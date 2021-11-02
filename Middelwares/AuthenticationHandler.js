const boom = require("@hapi/boom");

class AuthenticationHandler {
 static CheckApiKey(req, res, next) {
    let apiKey = req.headers["apikey"];
//console.log(apiKey);
    if (apiKey === "123")
      next();
    else
      next(boom.unauthorized());
  }
}

module.exports = AuthenticationHandler;