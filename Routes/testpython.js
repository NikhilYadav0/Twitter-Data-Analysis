const route = require("express").Router();
const path=require("path");
var myPythonScriptPath = path.join(__dirname,'hello.py');
const {PythonShell}=require("python-shell");


route.get("/:fn/:ln", callName);

function callName(req, res) {
  // var process = spawn("python", [path.join(__dirname,"hello.py"), req.params.fn, req.params.ln]);
  var pyshell=new PythonShell(myPythonScriptPath);

  pyshell.send(JSON.stringify([req.params.fn,req.params.ln]));

  pyshell.on('message', function (message) {
    console.log(message);
  });
   
  pyshell.end(function (err) {
    if (err){
        throw err;
    };
  
    console.log('finished');
  });
  
  
}

module.exports = route;
