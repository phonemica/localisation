/*
  Simple sorting of the object by key. Nothing Fancy, but will be
  run on changes to keep things consistent across languages
*/

const fs = require('fs')
const parseJson = require('parse-json'); // error reporting
const clear = require('clear'); // just because
clear();

let base = {}
let other = {}

let locales = []; // possible locales based on what files exist
fs.readdir('./ui', function(err, items) {
  let ext = 'json';
  for (let i in items) {
    items[i] = items[i].replace('.' + ext, '');
  }
  locales = items;

  readBaseFile('./ui/zh-tw.json');
});

function saveFile(obj, filename, level) {
  fs.writeFile(filename, JSON.stringify(obj, null, 2), (err) => {
    if (err) throw err;
    console.log('saved ' + filename + " " + level);
  });
}

function readBaseFile(file) {
  fs.readFile(file, 'utf8', function(err, data) {
    data = sortObject(JSON.parse(data));
    base = data;
    saveFile(data, './ui/base.json')
    nextLanguage('zh'); // temporary
  });
}

function nextLanguage(iso) {
  console.log(iso);
  readNewFile('./ui/' + iso + '.json', iso);
}

function fillStructure(base, other, level, iso) {
  Object.keys(base).sort().forEach(function(v, i) {
    if (!other.hasOwnProperty(v)) {
      if (Array.isArray(base[v])) {
        other[v] = [];
      } else {
        if (typeof(base[v]) === 'string') {
          other[v] = "";
        }
        if (typeof(base[v]) === 'object') {
          other[v] = {};
          fillStructure(base[v], other[v], level + 1, iso);
        }
      }
    }
  })
  saveFile(other, './ui/' + iso + '.json', level)
}

function sortObject(obj) {
  let sorted = {}
  if (Array.isArray(obj) == false) {
    Object.keys(obj).sort().forEach(function(v, i) {
      sorted[v] = obj[v];
      if (obj[v] !== null && typeof(obj[v]) === 'object') {
        sorted[v] = sortObject(sorted[v]);
      }
    });
  } else {
    sorted = obj;
  }
  return sorted;
}

function readNewFile(file, iso) {
  fs.readFile(file, 'utf8', function(err, data) {
    data = sortObject(JSON.parse(data));
    other = data;
    //saveFile(data, 'other.json')
    fillStructure(base, other, 0, iso);
  });
}
