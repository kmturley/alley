/*
 * TouchScroll - using dom overflow:scroll
 * by kmturley
 */

/*globals window, document */

var TouchScroll = function () {
    'use strict';
    
    var module = {
        axis: 'x',
        drag: false,
        isIE: window.navigator.userAgent.toLowerCase().indexOf('msie') > -1,
        isFirefox: window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
        init: function (options) {
            var me = this;
            if (options && options.id) {
                this.el = document.getElementById(options.id);
            } else {
                if (this.isIE || this.isFirefox) {
                    this.el = document.documentElement;
                } else {
                    this.el = document.body;
                }
            }
            this.addEvent('mousedown', this.el, function (e) { me.onMouseDown(e); });
			this.addEvent('mousemove', this.el, function (e) { me.onMouseMove(e); });
			this.addEvent('mouseup', this.el, function (e) { me.onMouseUp(e); });
        },
        addEvent: function (name, el, func) {
            if (el.addEventListener) {
                el.addEventListener(name, func, false);
            } else if (el.attachEvent) {
                el.attachEvent('on' + name, func);
            } else {
                el[name] = func;
            }
        },
        preventEvent: function (e) {
            if (!e) {
                e = window.event;
            }
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            return e;
        },
        onMouseDown: function (e) {
            e = this.preventEvent(e);
            this.startx = e.clientX + this.el.scrollLeft;
            this.starty = e.clientY + this.el.scrollTop;
            this.diffx = 0;
            this.diffy = 0;
            this.drag = true;
        },
        onMouseMove: function (e) {
            if (this.drag === true) {
                e = this.preventEvent(e);
                this.diffx = (this.startx - (e.clientX + this.el.scrollLeft));
                this.diffy = (this.starty - (e.clientY + this.el.scrollTop));
                this.el.scrollLeft += this.diffx;
                this.el.scrollTop += this.diffy;
            }
        },
        onMouseUp: function (e) {
            this.preventEvent(e);
            this.drag = false;
            var me = this,
                start = 1,
                animate = function () {
                    var step = Math.sin(start);
                    if (step <= 0) {
                        window.cancelAnimationFrame(animate);
                    } else {
                        me.el.scrollLeft += me.diffx * step;
                        me.el.scrollTop += me.diffy * step;
                        start -= 0.02;
                        window.requestAnimationFrame(animate);
                    }
                };
            animate();
        }
    };
    return module;
};