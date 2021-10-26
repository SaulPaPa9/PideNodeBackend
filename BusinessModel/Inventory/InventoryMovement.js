const {v4 : uuidv4} = require("uuid");
class InventoryMovment{
  constructor(dataObject){
    this.id = dataObject.id || uuidv4();
    this.inventory = dataObject.inventory;
    this.user = dataObject.user;
    this.salesDetail = dataObject.salesDetail;
    this.quantity = dataObject.quantity;
    this.measurementUnit = dataObject.MeasurementUnit;
    this.movementDate = new Date();
    this.equivalenceAmount = dataObject.equivalenceAmount;
    this.timestamp = new Date();
    this.optimisticLockField = 0;
  }

}

module.exports = InventoryMovment