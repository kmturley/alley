/*global define, window, document*/
/*jslint nomen:true*/

/**
 * Child
 * example module
*/

define('Child', ['Events'], function (Events) {
    'use strict';
    
    return Events.extend({
        name: 'Child',
        init: function (id, options) {
            var me = this;
            this.el = document.getElementById(id);
            this.on(this.el, 'click', function (e) {
                me.dispatchEvent('click', { value: 'something' });
            });
            this.options = options;
            this.render();
        },
        render: function () {
            //this.el.innerHTML = this.name + ' = ' + JSON.stringify(this.options);
        },
        childMethod: function () {
            return true;
        }
    });
});