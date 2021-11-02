//const {v4 : uuidv4} = require("uuid");

class MeasurementUnit{
  constructor(dataObject){
//   this.id = dataObject.id || uuidv4();
    this.name = dataObject.name;
    this.measurementType = dataObject.code;
    this.timestamp = new Date();
   // this.optimisticLockField = 0;
  }

}

module.exports = MeasurementUnit;
