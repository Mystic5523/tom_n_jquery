// Active API stuff gets events near the user etc
var express = require('express');
var router = express.Router();

// Scripts for it
new ActiveNetwork.NearYouWidget({"title":"Things to do Near You","num":"5","keywords":"","activity":"running","showActivitySelector":true,"type":"all","location":"66213","showLocationSelector":true,"affiliate":"2sgze6zu6jc7vhumc4vq3na8","placement":"map","campaign":"150457","width":294,"height":383,"style":{"frame":{"background-color":"#f7f6f6"},"title":{"color":"#ffffff"},"window":{"background-color":"#f7f6f6"},"text":{"color":"#5b5c5c","border-color":"#5b5c5c"},"links":{"color":"#0068a4"},"buttons":{"background-color":"#f5ba46"},"tags":{"background-color":"#eeeeee"}}}).render();
