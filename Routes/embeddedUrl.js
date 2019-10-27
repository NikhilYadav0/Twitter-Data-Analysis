const route = require("express").Router();
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;
var $ = (jQuery = require("jquery")(window));

const corsUrl = "https://cors-anywhere.herokuapp.com/";
const oembedBaseUrl = "https://publish.twitter.com//oembed?url=";
route.get("/:screen_name/:id", (req, res) => {
  var _url = `https://twitter.com/${req.params.screen_name}/status/${req.params.id}`;
  var url = corsUrl + oembedBaseUrl + _url;
  $.ajax(url)
    .done(tweet => {
      res.send(tweet.html);
    })
    .fail(e => console.log(e));
});

module.exports = route;
