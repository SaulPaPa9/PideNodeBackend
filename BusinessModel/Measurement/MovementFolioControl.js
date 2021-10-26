const {v4 : uuidv4} = require("uuid");
class MovementFolioControl{
  constructor(dataObject){
    this.id = dataObject.id || uuidv4();
    this.code = dataObject.code;
    this.consecutive = dataObject.consecutive;
    this.timestamp = new Date();
    this.optimisticLockField = 0;
  }
  
  GetMovementFolio() 
  {

  }

}

 


module.exports = MovementFolioControl
