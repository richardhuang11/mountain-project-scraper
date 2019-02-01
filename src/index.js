const fs = require('fs');
const { requestAndScrapeHome, requestAndScrape } = require('./requesters.js');

const DEBUG = true;
const DEBUG_URI = 'https://www.mountainproject.com/area/111951436/andrew-molera-sp-beach';
const OUTPUT_FILE = 'mountain-project.json';
const OUTPUT_INDENTATION = 2;

if (DEBUG) {
  requestAndScrape([DEBUG_URI])
    .then(writeDataToFile);
} else {
  requestAndScrapeHome()
    .then(requestAndScrape)
    .then(writeDataToFile);
}

function writeDataToFile(data) {
  const string = JSON.stringify(data, null, OUTPUT_INDENTATION);
  fs.writeFile(OUTPUT_FILE, string, 'utf8', (err) => {
    if (err) {
      throw err;
    }
    console.log(`Data saved to ${OUTPUT_FILE}!`);
  });
}
