var consumer_key = "r5tYYhpcjTn7BHkpv2Lz5F69m";
var consumer_secret = "u3W1X7TQq2pfygMtx8DudwkrTUNEIGrNODHUAL5Iw37XwJit5q";
var token = "886093060517449728-Fe0hjxypBgpgrzQOyuq0WcVbyGYRFuw";
var token_secret = "RAtNY2JHoejNqzhNmWot4YRpr7RNNaCchCl4AUBWrRGca";
var signature_method = "HMAC-SHA1";
var timestamp = `${new Date().getTime()}`;
var version = "1.0";
var nounce = "TQGLNb2quCW";

var obj = {
  consumer_key,
  consumer_secret,
  token,
  token_secret,
  signature_method,
  timestamp,
  version,
  nounce
};
export default obj;
