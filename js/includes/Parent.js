/*global define, window, document*/
/*jslint nomen:true*/

/**
 * Parent
 * example module
 */

define('Parent', ['Child'], function (Child) {
    'use strict';
    
    return Child.extend({
        name: 'Parent',
        init: function (id, options) {
            this._super(id, options);
        },
        render: function () {
            // Call the inherited version of render()
            return this._super();
        },
        parentMethod: function () {
            return true;
        }
    });
});