/*
  Checks which language codes have localisations available and chooses
  one based on priority of browser's language settings
*/

const fs = require('fs');

let headers = parseLocales('en-GB,es-US;q=0.8,zh-SG;q=0.6,zh-TW;q=0.4,es'); // sample

let possible = [];
fs. readdir('../xyy/localisation/translations', function(err, items) {
  let ext = 'json';
  for (let i in items) {
    items[i] = items[i].replace('.'+ext,'');
  }
  possible = items;
});

function parseLocales(headers) {
  // split the headers and clear out prioritisation
  headers = headers.split(",");
  for (let i in headers) {
    let tmp = headers[i].split(';');
    headers[i] = tmp[0].toLowerCase();
  }
  return headers;
}

function getLocale(headers) {
  let found = 'false';
  let defaultLocale = 'en';
  for (let i in headers) {
    if (found == 'false') {
      let fullcode = headers[i];
      let partialcode = headers[i].split('-');
        partialcode = partialcode[0];
      if (possible.indexOf(fullcode) < 0) {
        if (possible.indexOf(partialcode) < 0) {
        } else {
          defaultLocale = partialcode;
          found = 'true';
        }
      } else {
        defaultLocale = fullcode;
        found = 'true';
      }
    }
  }
  return defaultLocale;
}

console.log(getLocale(headers))
