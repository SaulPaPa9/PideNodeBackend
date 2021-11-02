const BaseModel = require("../../Persistance/BaseModel");

class Company extends BaseModel{
  
  static entityName = "company";

  constructor(dataObject){

    super(dataObject);

    this.name = dataObject.name;
  }

}

module.exports = Company;