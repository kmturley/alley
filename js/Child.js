/*global define, document, console*/
/**
 * Child
 * example module
*/

define('Child', function () {
    'use strict';
	return {
		childfunc: function () {
			console.log('Child', this);
		},
		childfunc2: function () {
			console.log('Child2', this);
		}
	};
});
