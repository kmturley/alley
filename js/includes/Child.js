/*global define, document, console, Class*/
/*jslint nomen:true*/
/**
 * Child
 * example module
*/

define('Child', function () {
    'use strict';
    return Class.extend({
        init: function (id, options) {
            this.el = document.getElementById(id);
            this.options = options;
        },
        get: function () {
            return this.options;
        },
        childMethod: function () {
            return true;
        }
    });
});