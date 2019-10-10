const oauthserver = require("oauth2-server"),
  Request = oauthserver.Request,
  Response = oauthserver.Response,
  initializeOauth = require("../middleware/authServer");

const log = "OAUTH_CONTROLLER";

exports.obtainToken = (req, res, next) => {
  var request = new Request(req);
  var response = new Response(res);

  return initializeOauth
    .token(request, response)
    .then(function(token) {
      res.json(token);
    })
    .catch(function(err) {
      res.status(err.code || 500).json(err);
    });
};
