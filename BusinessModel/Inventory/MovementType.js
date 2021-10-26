const {v4 : uuidv4} = require("uuid");
class MovementType{
  constructor(dataObject){
    this.id = dataObject.id || uuidv4();
    this.movementName = dataObject.MovementName;
    this.input = dataObject.input || false;
    this.FolioControl = dataObject.FolioControl;
    this.timestamp = new Date();
    this.optimisticLockField = 0;
  }

}



module.exports = MovementType
