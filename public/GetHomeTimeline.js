$.get("/getHomeTimeline", tweets => {
  console.log(tweets);
  if (tweets !== null) {
    tweets.map(tweet => {
      var screen_name = tweet.user.screen_name;
      var id = tweet.id_str;

      $.get(`getEmbeddedUrl/${screen_name}/${id}`, tweetHtml => {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = tweetHtml;
        var tags = wrapper.firstChild.querySelectorAll("p a");
        var news = tags[tags.length - 1].href.split("/");
        var id = news[news.length - 1];
        console.log(id);
        $(".tweets").append(`
            <div style="width: 520px;display: inline-block;border-width:2px;">
              ${tweetHtml}
              <div style="display: flex;justify-content: center;"><a href="getNewsClassified/${id}">See News Classification</a></div>
            </div>
          `);
      });

      // $.get("getRetweets",(data)=>{
      //     console.log(data);
      // })
    });
  }
});
