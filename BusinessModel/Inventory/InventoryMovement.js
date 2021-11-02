//const {v4 : uuidv4} = require("uuid");
class InventoryMovment{
  constructor(dataObject){
    //this.id = dataObject.id || uuidv4();
    this.inventory = dataObject.inventory;
    this.user = dataObject.user;
    this.salesDetail = dataObject.salesDetail;
    this.quantity = dataObject.quantity;
    this.measurementUnit = dataObject.MeasurementUnit;
    this.movementDate = new Date();
    this.movementType = dataObject.movementType;
    this.equivalenceAmount = dataObject.equivalenceAmount;
    this.timestamp = new Date();
   // this.optimisticLockField = 0;
  }

  get MovementType() { return this.movementType; }
  set MovementType(newValue) { this.OnChange("MovementType",this.movementType, newValue); this.movementType = newValue; }

  get MovementDate() { return this.movementDate; }
  set MovementDate(newValue) { this.OnChange("MovementDate",this.movementDate, newValue); this.movementDate = newValue; }
  
  // DecreaseInventory()
  // {
  //   this will afect as a decrease cos it comes from a Lose, Sell, Merma or any kind og decrease
  // } 
  // EncreaseInventory()
  // {
  //  this will afect as a Encrease the inventory in case of a provider or any internal movement
  // }



  OnSaving()
  {
    // check the movement onsaving and encrease o decrease the main inventory  
    
  }

  OnChange(propertyName, oldValue, newValue){
    if(propertyName === "movementDate")
      this.dateUpdated = new Date();
  }
}

module.exports = InventoryMovment