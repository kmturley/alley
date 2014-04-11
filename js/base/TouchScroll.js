/*
	TouchScroll
*/

function TouchScroll() {
	var instance = this;
    var Event = {
        CHANGE: 'change',
        COMPLETE: 'complete',
        ERROR: 'error',
        TOUCH_START: 'touchstart',
        TOUCH_MOVE: 'touchmove',
        TOUCH_END: 'touchend',
        MOUSE_DOWN: 'mousedown',
        MOUSE_MOVE: 'mousemove',
        MOUSE_UP: 'mouseup'
    };
	this.options = {
		'element': null
	};
	var drag = false;
	var startevent = {};
	var startpercentage = {};
	var axis = 'y';
	var target;
	this.load = function(data) {
		for (var item in data) {this.options[item] = data[item];}
		addListeners();
		setupAnimation();
	}
	function setupAnimation() {
		window.requestAnimFrame = (function() {
			return  window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
			function(callback, element) {window.setTimeout(callback, 1000 / 60);};
		})();
	}
	function addListeners() {
		if (instance.options.element.addEventListener) {
			instance.options.element.addEventListener(Event.MOUSE_DOWN, onTouchStart, false);
			instance.options.element.addEventListener(Event.MOUSE_MOVE, onTouchMove, false);
			instance.options.element.addEventListener(Event.MOUSE_UP, onTouchEnd, false);
			instance.options.element.addEventListener(Event.TOUCH_START, onTouchStart, false);
			instance.options.element.addEventListener(Event.TOUCH_MOVE, onTouchMove, false);
			instance.options.element.addEventListener(Event.TOUCH_END, onTouchEnd, false);
		}
	}
	function onTouchStart(e) {
		drag = true;
		target = instance.options.element || e.target;
		startevent = e;
		startpercentage = {x: (e.x/window.innerWidth)*100, y: (e.y/window.innerHeight)*100}
		//console.log('onTouchStart', e, target);
		e.preventDefault();
	}
	function onTouchMove(e) {
		if (drag == true) {
			var diffx = (startevent.pageX-e.pageX);
			var diffy = (startevent.pageY-e.pageY);
			target.scrollLeft += diffx;
			target.scrollTop += diffy;
			
			if (Math.abs(diffx) > 60) {axis = 'x';}
			else if (Math.abs(diffy) > 100) {axis = 'y';}

			//console.log('onTouchMove', target, diffx, diffy);
			e.preventDefault();
		}
	}
	function onTouchEnd(e) {
		drag = false;

		var endpercentage = {x: (e.x/window.innerWidth)*100, y: (e.y/window.innerHeight)*100}
		var diffpercentagex = -(endpercentage.x-startpercentage.x);
		var diffpercentagey = -(endpercentage.y-startpercentage.y);
		
		var diffx = (window.innerWidth/100)*diffpercentagex;
		var diffy = (window.innerHeight/100)*diffpercentagey;
		
		//console.log('onTouchEnd', e, diffpercentagex, diffpercentagey);
		
		//animate();
		
		scrollAxis(diffx*1.5, diffy*1.5, axis);
		
		e.preventDefault();
	}
	function animate() {
		requestAnimFrame(animate);
		console.log('animate');
	}
	function scrollAxis(diffx, diffy, axis) {
		var x = target.scrollLeft;
		var y = target.scrollTop;
		var start = y;
		var stop = start+diffy;
		if (axis == 'x') {
			start = x;
			stop = start+diffx;
		}
		
		var distance = stop > start ? stop - start : start - stop;
		if (distance < 50) {
			if (axis == 'x') { instance.updatePosition(stop, y); }
			else { instance.updatePosition(x, stop); }
			return;
		}
		var speedY = Math.round(distance);
		if (speedY >= 20) speedY = 20;
		var step = Math.round(distance / 30);
		var leapY = stop > start ? start + step : start - step;
		var timer = 0;
		//console.log(axis, distance, target, start, stop);
		if (stop > start) {
			for ( var i=start; i<stop; i+=step ) {
				if (axis == 'x') { setTimeout("touchscroll.updatePosition("+leapY+", 0)", timer*speedY); }
				else { setTimeout("touchscroll.updatePosition(0, "+leapY+")", timer*speedY); }
				leapY += step;
				if (leapY > stop) leapY = stop;
				timer++;
			}
			return;
		}
		for ( var i=start; i>stop; i-=step ) {
			if (axis == 'x') { setTimeout("touchscroll.updatePosition("+leapY+", 0)", timer*speedY); }
			else { setTimeout("touchscroll.updatePosition(0, "+leapY+")", timer*speedY); }
			leapY -= step;
			if (leapY < stop) leapY = stop;
			timer++;
		}
	}
	this.updatePosition = function(x, y) {
		//console.log('window.scrollTo', x, y);
		target.scrollLeft = x;
		target.scrollTop = y;
	}
}
TouchScroll.prototype = new TouchScroll();