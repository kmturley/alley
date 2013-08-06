/**
 * @class Class
 *
 * Simple JavaScript Inheritance by John Resig http://ejohn.org/
 *
 * ## Usage
 * To attach the class to the element you created you can use `require` or another AMD loader.
 *
 *     define('ModuleName', ['Class'], function (Class) {
 *         return Class.extend({
 *             init: {
 *                 // this will be called automatically when the object is initiated
 *             }
 *         });
 *     });
 */

/*jslint nomen:true*/
/*globals define, window, Class*/

define('Class', function () {
	'use strict';

    var initializing = false,
        fnTest = /xyz/.test(function () { var xyz; }) ? /\b_super\b/ : /[\D|\d]*/;
    
    // The base Class implementation (does nothing)
    window.Class = function () { };
    
    // Create a new Class that inherits from this class
    Class.extend = function ext(prop) {
        var _super = this.prototype,
            name = '',
            tmp = null,
            prototype = null;
        
        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        prototype = new this();
        initializing = false;
        
        // Copy the properties over onto the new prototype
        for (name in prop) {
            if (prop.hasOwnProperty(name)) {
                // Check if we're overwriting an existing function
                prototype[name] = typeof prop[name] === "function" && typeof _super[name] === "function" && fnTest.test(prop[name]) ? (function (name, fn) {
                    return function () {
                        tmp = this._super;
                        
                        // Add a new ._super() method that is the same method
                        // but on the super-class
                        this._super = _super[name];
                        
                        // The method only need to be bound temporarily, so we
                        // remove it when we're done executing
                        var ret = fn.apply(this, arguments);
                        this._super = tmp;
                        
                        return ret;
                    };
                }(name, prop[name])) : prop[name];
            }
        }
        
        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            if (!initializing && this.init) {
                this.init.apply(this, arguments);
            }
        }
        
        // Populate our constructed prototype object
        Class.prototype = prototype;
        
        // Enforce the constructor to be what we expect
        Class.prototype.constructor = Class;
        
        // And make this class extendable
        Class.extend = ext;
        
        return Class;
    };
	
	return Class;
});