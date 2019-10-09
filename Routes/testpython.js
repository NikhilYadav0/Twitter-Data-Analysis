const route = require("express").Router();

route.get("/:fn/:ln", callName);
(function() {
  var childProcess = require("child_process");
  var oldSpawn = childProcess.spawn;
  function mySpawn() {
    console.log("spawn called");
    console.log(arguments);
    var result = oldSpawn.apply(this, arguments);
    return result;
  }
  childProcess.spawn = mySpawn;
})();

function callName(req, res) {
  // Use child_process.spawn method from
  // child_process module and assign it
  // to variable spawn
  var spawn = require("child_process").spawn;

  // Parameters passed in spawn -
  // 1. type_of_script
  // 2. list containing Path of the script
  //    and arguments for the script

  // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will
  // so, first name = Mike and last name = Will
  var process = spawn("python", ["./hello.py", req.params.fn, req.params.ln]);

  // Takes stdout data from script which executed
  // with arguments and send this data to res object
  process.stdout.on("data", function(data) {
    res.send(data.toString());
  });
}

module.exports = route;
