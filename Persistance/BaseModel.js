const DBSession = require("../DataBase/DBSession");

class BaseModel {

  constructor(dataObject) {
    if(dataObject)
    {
      if(dataObject._id)
    this._id = dataObject._id.toString();
    if(dataObject.__v)
    this.__v = dataObject.__v;
    }

  }

  //Static elements

}

module.exports = BaseModel;
