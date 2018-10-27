// Yelp API
var express = require('express');
var router = express.Router();

const client = yelp.client('sIC9fCJBajA6KYwcedK_sQ');
 

'use strict';
 
const yelp = require('yelp-fusion');
const token ='J9atlk5PR3rnr8sSGYLZIOoGIt9tv9bh84TsOUA_PkcOrZOzl7LaRu7CiHpsK4IeIPTVdTALaaXLUgyWQ2xcwg6n7oZ5fZc3p3ABjriHQqdBgp18UV2rF7CQedevW3Yx';

const client = yelp.client(token);

router.get('/geo/:term/:location', function(req, res) { 
  console.log(  "******term " + req.params.term +
  "location" + req.body.location)
client.search({
  term:req.params.term,
  location: req.params.location
}).then(response => {
  var resp = response.jsonBody.businesses[0];
  // console.log(JSON.parse(resp));
  // console.log("**RESPONSE**" + resp);
  // console.log("**RESPONSESTRINGIFY**" + JSON.stringify(resp));

   res.send(resp);
}).catch(e => {
  console.log(e);
});
});

module.exports = router;