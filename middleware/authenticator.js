const oauthserver = require("oauth2-server"),
  Request = oauthserver.Request,
  Response = oauthserver.Response,
  initializeOauth = require("./authServer"),
  LOG = "AUTENTICATE MIDDLEWARE";

function authenticateRequest(req, res, next) {
  var request = new Request(req);
  var response = new Response(res);

  return initializeOauth
    .authenticate(request, response)
    .then(function(token) {
      // console.log(LOG, token);
      next();
    })
    .catch(function(err) {
      res.status(err.code || 500).json(err);
    });
}

module.exports = authenticateRequest;
