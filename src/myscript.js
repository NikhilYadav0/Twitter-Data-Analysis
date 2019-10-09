// const oauth_signature = require("oauth-signature");

// const headers = {
//   Authorization: `OAuth oauth_consumer_key="r5tYYhpcjTn7BHkpv2Lz5F69m",oauth_token="886093060517449728-Fe0hjxypBgpgrzQOyuq0WcVbyGYRFuw",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1570282567",oauth_nonce="oVT5Wz",oauth_version="1.0",oauth_signature="h46Z5e4GLgvTHklEC8GAEQ9gykg%3D"`
// };
// var consumer_secret = "u3W1X7TQq2pfygMtx8DudwkrTUNEIGrNODHUAL5Iw37XwJit5q";
// var token_secret = "RAtNY2JHoejNqzhNmWot4YRpr7RNNaCchCl4AUBWrRGca";
// var nounce = "kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg";
// parameters = {
//   oauth_consumer_key: "r5tYYhpcjTn7BHkpv2Lz5F69m",
//   oauth_token: "dSwOpcP4Xg4",
//   oauth_nonce: nounce,
//   oauth_timestamp: "1570356914",
//   oauth_signature_method: "HMAC-SHA1",
//   oauth_version: "1.0"
// };
// const corsUrl = "https://cors-anywhere.herokuapp.com/";
// var settings = {
//   url: corsUrl + "https://api.twitter.com/1.1/statuses/home_timeline.json",
//   method: "GET",
//   headers: headers
// };
// $.ajax(settings).done(function(tweets) {
//   var container = tweets;
//   const l = container.length;
//   const second_set = new Array();
//   const retweet_set = new Array();
//   for (i = 0; i < l; i++) {
//     // console.log(container[i])
//     const tweet = container[i];
//     const a = tweet.user.screen_name;
//     const b = tweet.id_str;
//     const _url = "https://twitter.com/" + a + "/status/" + b;
//     const url2 = corsUrl + "https://publish.twitter.com//oembed?url=" + _url;

//     $.ajax(url2).done(response => {
//       second_set.push(response);
//       var retweet_url =
//         corsUrl +
//         "https://api.twitter.com/1.1/statuses/retweets/" +
//         tweet.id_str +
//         ".json";
//       var sign = oauth_signature.generate(
//         "GET",
//         retweet_url,
//         parameters,
//         consumer_secret,
//         token_secret
//       );
//       console.log(`signature\n` + sign + "\n" + tweet.id_str);
//       var settings2 = {
//         url: retweet_url,
//         method: "GET",
//         headers: {
//           Authorization: `OAuth oauth_consumer_key="r5tYYhpcjTn7BHkpv2Lz5F69m",oauth_token="-Fe0hjxypBgpgrzQOyuq0WcVbyGYRFuw",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1570356914",oauth_nonce="${nounce}",oauth_version="1.0",oauth_signature="${sign}"`
//         }
//       };
//       $.ajax(settings2)
//         .done(function(res) {
//           console.log("res is ");
//           console.log(res);
//         })
//         .fail(() => {
//           console.log(retweet_url);
//         });
//     });
//   }

//   console.log(tweets);
//   console.log(second_set);

//   setTimeout(() => {
//     //display of tweets
//     $(document).ready(function() {
//       const len = second_set.length;
//       for (i = 0; i < len; i++) {
//         const s = second_set[i].html;
//         $(".tweets").append(s);
//       }
//     });
//   }, 3000);
// });
