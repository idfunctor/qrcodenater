'use strict';
const qr = require('qr-image');
const fs = require('fs');

var data = process.argv[2];
var loc = process.argv[3];


function getQR(data, loc){
  var qr_png = qr.image(data, { type: 'png', size: 20 });
  qr_png.pipe(fs.createWriteStream(data+'.png'));
}

getQR(data, loc);
