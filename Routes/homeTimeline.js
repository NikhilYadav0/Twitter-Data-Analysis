const route = require("express").Router();
var $ = require("jquery");

const headers = {
  Authorization: `OAuth oauth_consumer_key="r5tYYhpcjTn7BHkpv2Lz5F69m",oauth_token="886093060517449728-Fe0hjxypBgpgrzQOyuq0WcVbyGYRFuw",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1570282567",oauth_nonce="oVT5Wz",oauth_version="1.0",oauth_signature="h46Z5e4GLgvTHklEC8GAEQ9gykg%3D"`
};
const corsUrl = "https://cors-anywhere.herokuapp.com/";
var settings = {
  url: corsUrl + "https://api.twitter.com/1.1/statuses/home_timeline.json",
  method: "GET",
  headers: headers
};
route.get("/", req => {
  $.ajax(settings).done(tweets => {
    return tweets;
  });
  return null;
});

module.exports = route;
