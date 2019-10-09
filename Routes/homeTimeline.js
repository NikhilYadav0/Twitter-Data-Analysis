const route = require("express").Router();
// var $ = require("jquery").ajax;
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;

var $ = (jQuery = require("jquery")(window));

const headers = {
  Authorization: `OAuth oauth_consumer_key="r5tYYhpcjTn7BHkpv2Lz5F69m",oauth_token="886093060517449728-Fe0hjxypBgpgrzQOyuq0WcVbyGYRFuw",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1570606948",oauth_nonce="X72DuLSAtwt",oauth_version="1.0",oauth_signature="YrxVfgkiwYH4pXlrXurkFd3NWcU%3D"`
};
const corsUrl = "https://cors-anywhere.herokuapp.com/";
var settings = {
  url: corsUrl + "https://api.twitter.com/1.1/statuses/home_timeline.json",
  method: "GET",
  headers: headers
};
route.get("/", (req, res) => {
  $.ajax(settings)
    .done(tweets => {
      console.log("here");
      res.send(tweets);
    })
    .fail(e => console.log(e));
});

module.exports = route;
