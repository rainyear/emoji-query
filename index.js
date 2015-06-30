var emojis  = require('./emoji.map.json');
var util    = require('util');
var q       = process.argv[2];
var results = [];
var tabs    = "                             "; // " " * 30

if (q === undefined) {
  results.push(emojis.names[Math.floor(Math.random()*emojis.names.length)]);
} else {
  var re = new RegExp(".*"+q+".*");
  results = emojis.names.filter(function(emj){
    if (re.test(emj.tags)) {
      return true;
    }
    return false;
  });
}
module.exports = {
  query: function(){
    results.forEach(function (emj) {
      var str = util.format("%s\t%s#%s", emj.unicode, emj.emoji+tabs.slice(0, 30-emj.emoji.length), emj.description);
      console.log(str);
    });
  }
}
