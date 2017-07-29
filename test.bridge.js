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
              */

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("sxty4", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`sxty4( 'hello' )`", function () {
		it("should return Base64 instance", function () {
			//: @ignore:
   			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof sxty4( "hello" ); } ).value, "object" );
   			//: @end-ignore

			assert.equal(browser.url(bridgeURL).execute(function () {return sxty4("hello").constructor.name;}).value, "Base64");

		});

		it("should encode to aGVsbG8%3D", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return sxty4("hello").encode();}).value, "aGVsbG8%3D");
		});
	});

	describe("`sxty4( 'aGVsbG8%3D' )`", function () {
		it("should return Base64 instance", function () {
			//: @ignore:
   			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof sxty4( "aGVsbG8%3D" ); } ).value, "object" );
   			//: @end-ignore

			assert.equal(browser.url(bridgeURL).execute(function () {return sxty4("aGVsbG8%3D").constructor.name;}).value, "Base64");

		});

		it("should decode to 'hello'", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return sxty4("aGVsbG8%3D").decode();}).value, "hello");
		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsImJyb3dzZXIiLCJ1cmwiLCJleGVjdXRlIiwic3h0eTQiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ2YWx1ZSIsImVuY29kZSIsImRlY29kZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLG9CQUFWLEVBQWdDLFlBQU87QUFDdENJLEtBQUksK0JBQUosRUFBcUMsWUFBTztBQUMzQztBQUNIOzs7QUFHQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxNQUFPLE9BQVAsRUFBaUJDLFdBQWpCLENBQTZCQyxJQUFwQyxFQUFsQyxFQUE2RUMsS0FBM0YsRUFBa0csUUFBbEc7O0FBRUEsR0FURDs7QUFXQVIsS0FBSSw2QkFBSixFQUFtQyxZQUFPO0FBQ3pDUCxVQUFPUSxLQUFQLENBQWNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLE1BQU8sT0FBUCxFQUFpQkksTUFBakIsRUFBUCxFQUFsQyxFQUFzRUQsS0FBcEYsRUFBMkYsWUFBM0Y7QUFDQSxHQUZEO0FBR0EsRUFmRDs7QUFpQkFaLFVBQVUseUJBQVYsRUFBcUMsWUFBTztBQUMzQ0ksS0FBSSwrQkFBSixFQUFxQyxZQUFPO0FBQzNDO0FBQ0g7OztBQUdBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLE1BQU8sWUFBUCxFQUFzQkMsV0FBdEIsQ0FBa0NDLElBQXpDLEVBQWxDLEVBQWtGQyxLQUFoRyxFQUF1RyxRQUF2Rzs7QUFFQSxHQVREOztBQVdBUixLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdENQLFVBQU9RLEtBQVAsQ0FBY0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxvQkFBT0MsTUFBTyxZQUFQLEVBQXNCSyxNQUF0QixFQUFQLEVBQWxDLEVBQTJFRixLQUF6RixFQUFnRyxPQUFoRztBQUNBLEdBRkQ7QUFHQSxFQWZEOztBQWlCQSxDQXRDRDs7QUF3Q0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInN4dHk0XCIsXG5cdFx0XHRcInBhdGhcIjogXCJzeHR5NC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvc3h0eTQuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInN4dHk0XCI6IFwic3h0eTRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJzeHR5NFwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgc3h0eTQoICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEJhc2U2NCBpbnN0YW5jZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggZnVuY3Rpb24oICl7IHJldHVybiB0eXBlb2Ygc3h0eTQoIFwiaGVsbG9cIiApOyB9ICkudmFsdWUsIFwib2JqZWN0XCIgKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN4dHk0KCBcImhlbGxvXCIgKS5jb25zdHJ1Y3Rvci5uYW1lICkudmFsdWUsIFwiQmFzZTY0XCIgKTtcblxuXHRcdH0gKTtcblxuXHRcdGl0KCBcInNob3VsZCBlbmNvZGUgdG8gYUdWc2JHOCUzRFwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN4dHk0KCBcImhlbGxvXCIgKS5lbmNvZGUoICkgKS52YWx1ZSwgXCJhR1ZzYkc4JTNEXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgc3h0eTQoICdhR1ZzYkc4JTNEJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gQmFzZTY0IGluc3RhbmNlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCBmdW5jdGlvbiggKXsgcmV0dXJuIHR5cGVvZiBzeHR5NCggXCJhR1ZzYkc4JTNEXCIgKTsgfSApLnZhbHVlLCBcIm9iamVjdFwiICk7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzeHR5NCggXCJhR1ZzYkc4JTNEXCIgKS5jb25zdHJ1Y3Rvci5uYW1lICkudmFsdWUsIFwiQmFzZTY0XCIgKTtcblxuXHRcdH0gKTtcblxuXHRcdGl0KCBcInNob3VsZCBkZWNvZGUgdG8gJ2hlbGxvJ1wiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN4dHk0KCBcImFHVnNiRzglM0RcIiApLmRlY29kZSggKSApLnZhbHVlLCBcImhlbGxvXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
