function getSpan(height) {
  return Math.ceil(height / 10);
}
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
        $(".tweet-list").append(`
            <div class="tweet" id="${id}">
                  <div id="${id}nikhil">
                    ${tweetHtml}
                  </div>
                  <div style="display: flex;justify-content: center;">
                    <a href="getNewsClassified/${id}">
                      See News Classification
                    </a>
                  </div>
              </div>
          `);
        // $(`#${id}`).ready(() => {
        //   console.log($(`#${id}nikhil`).css("height"));
        //   var h = Math.ceil(($(`#${id}nikhil`).css("height") + 20) / 10);
        //   $(`#${id}`).css("grid-row-end", `span ${h}`);
        // });
      });
    });
  }
});
