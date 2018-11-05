
var utils = require('loader-utils');
module.exports = function (source) {
  var matchPXExp = /([0-9,.]+rem)([;| |}|'|"])/g;
  return source.replace(matchPXExp, function (match, m1, m2) {
    var pxValue = parseFloat(m1.slice(0, m1.length - 3));
    remValue = (pxValue / 10).toFixed(3);
    return remValue + 'rem' + m2;
  });
};
