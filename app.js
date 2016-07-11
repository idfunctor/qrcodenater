'use strict';
const getqr = require('./getqr');
var data = process.argv[2];
var loc = process.argv[3];
//call qr function
getqr(data, loc);
