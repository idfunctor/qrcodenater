const qr = require('qr-image');
const fs = require('fs');
module.exports = function getQR(data, loc){
  var qr_png = qr.image(data, { type: 'png', size: 20 });
  qr_png.pipe(fs.createWriteStream(data+'.png'));
}
