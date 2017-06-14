
const assert = require( "assert" );
const sxty4 = require( "./sxty4.js" );

let password = sxty4( "hello" ).encode( );
let showpassword = sxty4( password ).decode( );

assert.equal( password, "aGVsbG8%3D", "should return 'aGVsbG8%3D'" );
assert.equal( showpassword, "hello", "should return 'hello'" );

console.log( "ok" );
