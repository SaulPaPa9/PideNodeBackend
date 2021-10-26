const {v4 : uuidv4} = require("uuid");

class Equivalence{
  constructor(dataObject){
    this.id = dataObject.id || uuidv4();
    this.PrincipalMeasurementUnit = dataObject.PrincipalMeasurementUnit || uuidv4();;
    this.SubMeasurementUnit = dataObject.SubMeasurementUnit || uuidv4();;
    this.equivalenceAmount = dataObject.equivalenceAmount;
    this.timestamp = new Date();
    this.optimisticLockField = 0;
  }

MeasurementConversion()
  {

  }

}

module.exports = Equivalence
