var fs = require('fs');
var emoji2unicode = require('./emoji2unicode.json');

var reMap = [];
/*
{ emoji: ":smile:",
  description: "",
  unicode: "😄",
  tags: [
    'smile', 'happy', 'joy', 'pleased'
  ],
}
*/
emoji2unicode.forEach(function (emoji) {
  var ent = {
    emoji: ':'+ emoji.aliases[0] +':',
    description: emoji.description || "",
    unicode: emoji.emoji || "",
    tags: emoji.tags.concat(emoji.aliases).join(":")
  }
  reMap.push(ent);
});

var result = JSON.stringify({"names": reMap}, null, 2);
fs.writeFile("./emoji.map.json", result, function (err) {
  console.error(err);
});
