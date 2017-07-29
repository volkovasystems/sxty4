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

const assert = require( "should" );

//: @server:
const sxty4 = require( "./sxty4.js" );
//: @end-server






//: @server:

describe( "sxty4", ( ) => {

	describe( "`sxty4( 'hello' )`", ( ) => {
		let data = sxty4( "hello" );

		it( "should return Base64 instance", ( ) => {
			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Base64" );
		} );

		it( "should encode to aGVsbG8%3D", ( ) => {
			assert.equal( data.encode( ), "aGVsbG8%3D" );
		} );
	} );

	describe( "`sxty4( 'aGVsbG8%3D' )`", ( ) => {
		let data = sxty4( "aGVsbG8%3D" );

		it( "should return Base64 instance", ( ) => {
			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Base64" );
		} );

		it( "should decode to 'hello'", ( ) => {
			assert.equal( data.decode( ), "hello" );
		} );
	} );

} );

//: @end-server






