const boom = require("@hapi/boom");

class DataValidationsHandler{

static ValidatorHandler(schema, property){
  return (req, res, next) => {
    let data = req[property];
    let { error } = schema.validate(data);

    if(error)
      next(boom.badRequest(error));
    else
      next();
  }
}

}

module.exports = DataValidationsHandler.ValidatorHandler;
