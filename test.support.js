"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "sxty4",
              			"path": "sxty4/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/sxty4.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"sxty4": "sxty4"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var sxty4 = require("./sxty4.support.js");
//: @end-client







//: @client:

describe("sxty4", function () {

	describe("`sxty4( 'hello' )`", function () {
		var data = sxty4("hello");

		it("should return Base64 instance", function () {
			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "Base64");
		});

		it("should encode to aGVsbG8%3D", function () {
			assert.equal(data.encode(), "aGVsbG8%3D");
		});
	});

	describe("`sxty4( 'aGVsbG8%3D' )`", function () {
		var data = sxty4("aGVsbG8%3D");

		it("should return Base64 instance", function () {
			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "Base64");
		});

		it("should decode to 'hello'", function () {
			assert.equal(data.decode(), "hello");
		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwic3h0eTQiLCJkZXNjcmliZSIsImRhdGEiLCJpdCIsImVxdWFsIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZW5jb2RlIiwiZGVjb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLG9CQUFULENBQWQ7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCQSxVQUFVLG9CQUFWLEVBQWdDLFlBQU87QUFDdEMsTUFBSUMsT0FBT0YsTUFBTyxPQUFQLENBQVg7O0FBRUFHLEtBQUksK0JBQUosRUFBcUMsWUFBTztBQUMzQ0wsVUFBT00sS0FBUCxRQUFxQkYsSUFBckIsdURBQXFCQSxJQUFyQixHQUEyQixRQUEzQjs7QUFFQUosVUFBT00sS0FBUCxDQUFjRixLQUFLRyxXQUFMLENBQWlCQyxJQUEvQixFQUFxQyxRQUFyQztBQUNBLEdBSkQ7O0FBTUFILEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6Q0wsVUFBT00sS0FBUCxDQUFjRixLQUFLSyxNQUFMLEVBQWQsRUFBOEIsWUFBOUI7QUFDQSxHQUZEO0FBR0EsRUFaRDs7QUFjQU4sVUFBVSx5QkFBVixFQUFxQyxZQUFPO0FBQzNDLE1BQUlDLE9BQU9GLE1BQU8sWUFBUCxDQUFYOztBQUVBRyxLQUFJLCtCQUFKLEVBQXFDLFlBQU87QUFDM0NMLFVBQU9NLEtBQVAsUUFBcUJGLElBQXJCLHVEQUFxQkEsSUFBckIsR0FBMkIsUUFBM0I7O0FBRUFKLFVBQU9NLEtBQVAsQ0FBY0YsS0FBS0csV0FBTCxDQUFpQkMsSUFBL0IsRUFBcUMsUUFBckM7QUFDQSxHQUpEOztBQU1BSCxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdENMLFVBQU9NLEtBQVAsQ0FBY0YsS0FBS00sTUFBTCxFQUFkLEVBQThCLE9BQTlCO0FBQ0EsR0FGRDtBQUdBLEVBWkQ7O0FBY0EsQ0E5QkQ7O0FBZ0NBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwic3h0eTRcIixcblx0XHRcdFwicGF0aFwiOiBcInN4dHk0L3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zeHR5NC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwic3h0eTRcIjogXCJzeHR5NFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3Qgc3h0eTQgPSByZXF1aXJlKCBcIi4vc3h0eTQuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcInN4dHk0XCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYHN4dHk0KCAnaGVsbG8nIClgXCIsICggKSA9PiB7XG5cdFx0bGV0IGRhdGEgPSBzeHR5NCggXCJoZWxsb1wiICk7XG5cblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEJhc2U2NCBpbnN0YW5jZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGF0YSwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGEuY29uc3RydWN0b3IubmFtZSwgXCJCYXNlNjRcIiApO1xuXHRcdH0gKTtcblxuXHRcdGl0KCBcInNob3VsZCBlbmNvZGUgdG8gYUdWc2JHOCUzRFwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkYXRhLmVuY29kZSggKSwgXCJhR1ZzYkc4JTNEXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgc3h0eTQoICdhR1ZzYkc4JTNEJyApYFwiLCAoICkgPT4ge1xuXHRcdGxldCBkYXRhID0gc3h0eTQoIFwiYUdWc2JHOCUzRFwiICk7XG5cblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEJhc2U2NCBpbnN0YW5jZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGF0YSwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGEuY29uc3RydWN0b3IubmFtZSwgXCJCYXNlNjRcIiApO1xuXHRcdH0gKTtcblxuXHRcdGl0KCBcInNob3VsZCBkZWNvZGUgdG8gJ2hlbGxvJ1wiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkYXRhLmRlY29kZSggKSwgXCJoZWxsb1wiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
