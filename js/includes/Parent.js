/*global define, document, console, Class*/
/*jslint nomen:true*/
/**
 * Parent
 * example module
 */

define('Parent', ['Child'], function (Child) {
    'use strict';
    return Child.extend({
        init: function (id, options) {
            this.el = document.getElementById(id);
            this.options = options;
            this._super(id, options);
        },
        get: function () {
            // Call the inherited version of get()
            return this._super();
        },
        parentMethod: function () {
            return true;
        }
    });
});