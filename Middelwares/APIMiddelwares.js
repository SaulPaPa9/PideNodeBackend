const ErrorsHandler = require("./ErrorsHandler");

class APIMiddelwares{

  static RegisterMiddelwares(app){
    ErrorsHandler.RegisterMiddelwares(app);
  }
}

module.exports = APIMiddelwares;
