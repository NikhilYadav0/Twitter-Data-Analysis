const path = require("path");
var myPythonScriptPath = path.join(__dirname, "classifyTwitterData.py");
const { PythonShell } = require("python-shell");

let options = {
  mode: "text",
  pythonPath: "python",
  pythonOptions: ["-u"] // get print results in real-time
};
var ans = "";
function getClass(article, res, s) {
  var pyshell = new PythonShell(myPythonScriptPath, options);
  pyshell.send(JSON.stringify([article]));
  pyshell.on("message", function(message) {
    console.log(message);
    ans = message;
  });
  pyshell.end(function(err) {
    if (err) {
      throw err;
    }
    console.log("finished");
    console.log("My Class is: " + ans);
    res.send(ans + "\n" + s);
    return ans;
  });
}