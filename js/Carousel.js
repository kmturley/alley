/*global define, document, console*/
/**
 * Carousel
 * example module
 */

define('Carousel', ['Utils', 'Child'], function (Utils, Child) {
    'use strict';
	return Utils.create(Child, {
		init: function () {
			//console.log('Carousel', this);
		},
		carouselfunc: function () {
			console.log('Carouselfunc', this);
		}
	});
});
