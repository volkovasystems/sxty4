"use strict";

const sxty4 = require( "./sxty4.js" );

let password = sxty4( "hello" ).encode( );
let showpassword = sxty4( password ).decode( );

console.log( password );
console.log( showpassword );
