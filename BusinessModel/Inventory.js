// const {v4 : uuidv4} = require("uuid");
class Inventory{
  constructor(dataObject){
    // this.id = dataObject.id || uuidv4();
    this.product = dataObject.product;
    this.branch = dataObject.branch;
    this.quantity = dataObject.quantity;
    this.unit = dataObject.unit;
    this.location = dataObject.location;
    this.timeStamp = new Date(); 
    this.lastUpdate = dataObject.lastUpdate || new Date(); // probablemente esto sea calculado
    // product // agregar
  }

  get Quantity() { return this.quantity; }
    set Quantity(newValue) { this.OnChange("Quantity", this.quantity, newValue); this.quantity = newValue; }
  
  get Unit() { return this.unit; }
    set Unit(newValue) { this.OnChange(propertyUnit); this.unit = newValue; }
  

    Update(data){
      this.Quantity = data.quantity;
      this.Unit = data.unit;
    }

    CanDelete(){
      return false;
    }

  OnChange(propertyName, oldValue, newValue){
    if(propertyName === "Quantity" && oldValue != newValue)
    if(propertyName === "Unit")
      this.lastupdate = new Date();
  }

}

module.exports = Inventory;
