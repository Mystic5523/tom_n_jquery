var express = require('express');
var router = express.Router();
// Yelp API
'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'J9atlk5PR3rnr8sSGYLZIOoGIt9tv9bh84TsOUA_PkcOrZOzl7LaRu7CiHpsK4IeIPTVdTALaaXLUgyWQ2xcwg6n7oZ5fZc3p3ABjriHQqdBgp18UV2rF7CQedevW3Yx';

const searchRequest = {
  term:'Nature Trails',
  location: 'Overland Park, Ks'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});



module.exports = router;