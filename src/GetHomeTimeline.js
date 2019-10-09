const corsUrl = "https://cors-anywhere.herokuapp.com/";
const oembedBaseUrl = "https://publish.twitter.com//oembed";
$.get("/getHomeTimeline", tweets => {
  for (var tweet in tweets) {
    var screen_name = tweet.user.screen_name;
    var id = tweet.id_str;

    // $.get(`getEmbeddedUrl/${screen_name}/${id}`, tweetHtml => {
    //   $(".tweets").append(tweetHtml);
    // });

    // $.get("getRetweets",(data)=>{
    //     console.log(data);
    // })
  }
});
