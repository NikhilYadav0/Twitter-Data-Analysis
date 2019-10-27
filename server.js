const express = require("express");
const server = express();
const embeddedUrl = require("./Routes/embeddedUrl");
const homeTimeline = require("./Routes/homeTimeline");
const testPython = require("./Routes/testpython");
const newsClassifiedTimeline = require("./Routes/newsTimeline");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
// server.get("/myNews",(req,res)=>{
//   res.send()
// })
server.use("/getHomeTimeline", homeTimeline);
server.use("/getEmbeddedUrl", embeddedUrl);
server.use("/test", testPython);
server.use("/getNewsClassified", newsClassifiedTimeline);
server.listen(2706, () => {
  console.log("Server running at localhost:2706");
});
