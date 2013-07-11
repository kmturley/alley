/*global define, window, document*/
/*jslint nomen:true*/

/**
 * Events
 * add pub sub subscribe functionality
*/

define('Events', ['Class'], function (Class) {
    'use strict';
    
    return Class.extend({
        events: {},
        addEvent: function (name, callback) {
            if (!this.events[name]) { this.events[name] = []; }
            this.events[name].push(callback);
        },
        removeEvent: function (name, callback) {
            var i = 0;
            if (this.events[name]) {
                if (callback) {
                    for (i = 0; i < this.events[name].length; i += 1) {
                        if (this.events[name][i] === callback) { this.events[name].splice(i, 1); return true; }
                    }
                } else {
                    delete this.events[name];
                }
            }
        },
        dispatchEvent: function (name, data) {
            var i = 0;
            if (this.events[name]) {
                for (i = 0; i < this.events[name].length; i += 1) {
                    this.events[name][i]({ data: data, target: this, type: name});
                }
            }
        },
		on: function(el, event, func) {
			if (el.addEventListener) {
				el.addEventListener(event, function (e) {
					func(e, el)
				}, false);
			} else {
				el.attachEvent('on' + event, function (e) {
					func(e, el)
				}, false);
			}
		}
    });
});