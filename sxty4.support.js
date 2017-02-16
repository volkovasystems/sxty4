"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "sxty4",
              			"path": "sxty4/sxty4.js",
              			"file": "sxty4.js",
              			"module": "sxty4",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/sxty4.git",
              			"test": "sxty4-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Base 64 string encoding and decoding with url safety.
              	@end-module-documentation
              
              	@include:
              		{
              			"asea": "asea",
              			"falzy": "falzy",
              			"harden": "harden",
              			"protype": "protype"
              		}
              	@end-include
              */var _freeze = require("babel-runtime/core-js/object/freeze");var _freeze2 = _interopRequireDefault(_freeze);var _defineProperty2 = require("babel-runtime/helpers/defineProperty");var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var asea = require("asea");
var falzy = require("falzy");
var harden = require("harden");
var protype = require("protype");

var DECODED = "decoded";
var ENCODED = "encoded";
var RESULT = (0, _symbol2.default)("result");
var TYPE = (0, _symbol2.default)("type");
var DATA = (0, _symbol2.default)("data");

var sxty4 = function sxty4(data) {
	/*;
                                  	@meta-configuration:
                                  		{
                                  			"data:required": "string"
                                  		}
                                  	@end-meta-configuration
                                  */

	if (falzy(data) || !protype(data, STRING)) {
		throw new Error("invalid data");
	}

	/*;
   	@note:
   		This is intentionally var, do not change.
   	@end-note
   */
	var cache = (0, _defineProperty3.default)({}, DATA, data);

	var wrapper = {};

	var update = function update(data) {
		/*;
                                     	@meta-configuration:
                                     		{
                                     			"data:required": "string"
                                     		}
                                     	@end-meta-configuration
                                     */

		if (falzy(cache)) {
			throw new Error("data has been flushed");
		}

		if (falzy(data) || !protype(data, STRING)) {
			throw new Error("invalid data");
		}

		cache[DATA] = data;

		return wrapper;
	};

	var encode = function encode() {
		if (falzy(cache)) {
			throw new Error("data has been flushed");
		}

		if (cache[TYPE] === ENCODED) {
			throw new Error("data has been encoded");
		}

		cache[TYPE] = ENCODED;
		var value = cache[RESULT] || cache[DATA];

		if (falzy(value)) {
			throw new Error("empty value to be encoded");
		}

		if (asea.client) {
			cache[RESULT] = encodeURIComponent(btoa(encodeURIComponent(value).
			replace(/%([0-9A-F]{2})/g, function (match, token) {
				return String.fromCharCode("0x" + token);
			})));

		} else if (asea.server) {
			cache[RESULT] = encodeURIComponent(new Buffer(value).toString("base64"));

		} else {
			throw new Error("cannot determine platform");
		}

		return cache[RESULT];
	};

	var decode = function decode() {
		if (falzy(cache)) {
			throw new Error("data has been flushed");
		}

		if (cache[TYPE] === DECODED) {
			throw new Error("data has been decoded");
		}

		cache[TYPE] = DECODED;
		var value = cache[RESULT] || cache[DATA];

		if (falzy(value)) {
			throw new Error("empty value to be decoded");
		}

		if (asea.client) {
			cache[RESULT] = decodeURIComponent(atob(decodeURIComponent(data)).
			split("").map(function (character) {
				character = ("00" + character.charCodeAt(0).toString(16)).slice(-2);

				return "%" + character;
			}).join(""));

		} else if (asea.server) {
			cache[RESULT] = new Buffer(decodeURIComponent(data), "base64").toString("utf8");

		} else {
			throw new Error("cannot determine platform");
		}

		return cache[RESULT];
	};

	var clear = function clear() {
		if (falzy(cache)) {
			throw new Error("data has been flushed");
		}

		cache[TYPE] = null;
		cache[RESULT] = "";

		return wrapper;
	};

	var flush = function flush() {
		if (falzy(cache)) {
			throw new Error("data has been flushed");
		}

		wrapper.clear();

		cache[DATA] = "";
		cache = null;

		return wrapper;
	};

	harden("encode", encode, wrapper);
	harden("decode", decode, wrapper);
	harden("update", update, wrapper);
	harden("clear", clear, wrapper);
	harden("flush", flush, wrapper);

	return (0, _freeze2.default)(wrapper);
};

module.exports = sxty4;

//# sourceMappingURL=sxty4.support.js.map