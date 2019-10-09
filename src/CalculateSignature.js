const oauth_signature = require("oauth-signature");
var constants = require("../constansts").default;

var parameters = {
  oauth_consumer_key: constants.consumer_key,
  oauth_token: constants.token,
  oauth_nonce: constants.nounce,
  oauth_timestamp: constants.timestamp,
  oauth_signature_method: constants.signature_method,
  oauth_version: constants.version
};

var getSign = (method, URL) => {
  sign = oauth_signature.generate(
    method,
    URL,
    parameters,
    constants.consumer_secret,
    constants.token_secret
  );
  return sign;
};

export default getSign;
