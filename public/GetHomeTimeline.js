// $.get('/test/Nikhil/Yadav',(res)=>{
//   console.log(res)
// })
$.get("/getHomeTimeline", tweets => {
  console.log(tweets);
  if (tweets !== null) {
    tweets.map(tweet => {
      console.log(tweet);
      var screen_name = tweet.user.screen_name;
      var id = tweet.id_str;

      $.get(`getEmbeddedUrl/${screen_name}/${id}`, tweetHtml => {
        $(".tweets").append(
          `<div style="width: 510px;display: inline-block;">${tweetHtml}</div>`
        );
      });

      // $.get("getRetweets",(data)=>{
      //     console.log(data);
      // })
    });
  }
});
