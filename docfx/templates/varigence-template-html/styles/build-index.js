var lunr = require('./lunr');
var fs = require('fs');

var lunrIndex;

var stopWords = null;
var searchData = {};

lunr.tokenizer.seperator = /[\s\-\.]+/;

stopWords = JSON.parse(fs.readFileSync('templates/varigence-template-html/search-stopwords.json', 'utf8'));
searchData = JSON.parse(fs.readFileSync('_site/index.json', 'utf8'));

if (stopWords !== null && !isEmpty(searchData)) {
  lunrIndex = lunr(function () {
    this.pipeline.remove(lunr.stopWordFilter);
    this.ref('href');
    this.field('title', { boost: 50 });
    this.field('keywords', { boost: 20 });

    for (var prop in searchData) {
      if (searchData.hasOwnProperty(prop)) {
        this.add(searchData[prop]);
      }
    }

    // var docfxStopWordFilter = lunr.generateStopWordFilter(stopWords);
    // lunr.Pipeline.registerFunction(docfxStopWordFilter, 'docfxStopWordFilter');
    // this.pipeline.add(docfxStopWordFilter);
    // this.searchPipeline.add(docfxStopWordFilter);
  });
  
  var json = JSON.stringify(lunrIndex);
  fs.writeFileSync('_site/index-cache.json', json, 'utf8');
  
}

function isEmpty(obj) {
if(!obj) return true;

for (var prop in obj) {
  if (obj.hasOwnProperty(prop))
    return false;
}

return true;
}