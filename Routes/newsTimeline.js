const route = require("express").Router();
const request = require("request");
var tall = require("tall").default;
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;
var DOMParser = new JSDOM().window.DOMParser;
var $ = (jQuery = require("jquery")(window));

// ------------------------------- Python Work -------------------------------------------
const path = require("path");
var myPythonScriptPath = path.join(__dirname, "classifyTwitterData.py");
const { PythonShell } = require("python-shell");

let options = {
  mode: "text",
  pythonPath: "python",
  pythonOptions: ["-u"] // get print results in real-time
};

function getClass(article) {
  var pyshell = new PythonShell(myPythonScriptPath, options);
  pyshell.send(JSON.stringify([article]));
  pyshell.on("message", function(message) {
    console.log(message);
    return message;
  });
  pyshell.end(function(err) {
    if (err) {
      throw err;
    }
    console.log("finished");
  });
}
// -----------------------------------------------------------------------------

route.get("/:id", (req, res) => {
  var uri = `https://t.co/${req.params.id}`;
  tall(uri)
    .then(url => {
      console.log(url);
      request(url, function(err, response, body) {
        var doc = new DOMParser().parseFromString(body, "text/html");
        var arr = doc.querySelectorAll(".story-body__inner p");
        s = "";
        str = "";
        for (var i = 0; i < arr.length; i++) {
          s = s + `<p>${arr[i].innerHTML}</p>`;
          str += arr[i].innerHTML;
        }
        console.log("*  " + s);
        getClass(str);
        res.send(s);
      });
    })
    .catch(err => console.error("AAAW ", err));
});

module.exports = route;
