const fs = require('fs')
const parseJson = require('parse-json');

let locales = ["auto", "en", "zh_TW", "zh_CN", "ko", "jp"]

let obj
let demo = {
  "en": "",
  "zh_TW": {
    "c": "1",
    "a": "2",
    "b": "3"
  },
  "zh_CN": "",
  "ko": "",
}

function sortObject(obj) {
  let sorted = {}
  Object.keys(obj)
    .sort()
    .forEach(function(v, i) {
      sorted[v] = obj[v];
      if (obj[v] !== null && typeof(obj[v]) === 'object') {
        sorted[v] = sortObject(sorted[v]);
      }
    });
  return sorted;
}

function coverLocales(obj) {
  for (let i = 0; i < locales.length; i++) {
    if (obj[locales[i]] == undefined) {
      obj[locales[i]] = '';
    }
  }
  return sortObject(obj)
}

function saveFile(obj) {
  fs.writeFile('sorted.json', JSON.stringify(sortObject(obj), null, 2), (err) => {
    if (err) throw err;
    console.log('saved');
  });
}

fs.readFile('sorted.json', 'utf8', function(err, data) {
  parseJson(data);
  data = JSON.parse(data)
  saveFile(data)
});