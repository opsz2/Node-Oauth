const oauthserver = require("oauth2-server");

const initializeOauth = new oauthserver({
  model: require("../utils/mongodb-oauth2"),
  accessTokenLifetime: 60 * 60,
  allowBearerTokensInQueryString: true
});

module.exports = initializeOauth;
