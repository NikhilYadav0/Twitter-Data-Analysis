const route = require("express").Router();
// var $ = require("jquery").ajax;
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;

var $ = (jQuery = require("jquery")(window));

const getAuthorization = require("../src/Authorization");

const corsUrl = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://api.twitter.com/1.1/statuses/home_timeline.json";
const headers = {
  Authorization: getAuthorization("GET", baseUrl, {})
};
console.log(headers.Authorization)
var settings = {
  url: corsUrl + baseUrl,
  method: "GET",
  headers: headers
};
route.get("/", (req, res) => {
  $.ajax(settings)
    .done(tweets => {
      res.send(tweets);
    })
    .fail(e => console.log(e));
});

module.exports = route;
