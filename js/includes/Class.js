/*jslint nomen:true */
/*global define*/
/**
 * @class Class
 * The master class that all other modules inherit from
 * @return {Object} The class object
 */

define('Class', function () {
	'use strict';
	
	var initializing = false,
		fnTest = /var xyz/.test(function () { var xyz; }) ? /\b_super\b/ : /[\D|\d]*/,
		Class = function () {},
		overwriteTest = function (name, fn, _super) {
			return function () {
				var tmp = this._super,
					ret;
					
				// Add a new ._super() method that is the same method
				// but on the super-class
				this._super = _super[name];
					
				// The method only need to be bound temporarily, so we
				// remove it when we're done executing
				ret = fn.apply(this, arguments);
				this._super = tmp;
					
				return ret;
			};
		};
	
	// Create a new Class that inherits from this class
	Class.extend = function ext(prop) {
		var _super = this.prototype,
			prototype,
			name;
		
		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		initializing = true;
		prototype = new this();
		initializing = false;
		
		// Copy the properties over onto the new prototype
		for (name in prop) {
			if (prop.hasOwnProperty(name)) {
				// Check if we're overwriting an existing function
				if (typeof prop[name] === "function" && typeof _super[name] === "function" && fnTest.test(prop[name])) {
					prototype[name] = (overwriteTest(name, prop[name], _super));
				} else {
					prototype[name] = prop[name];
				}
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