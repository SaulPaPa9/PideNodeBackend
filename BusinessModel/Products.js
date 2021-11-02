const {v4 : uuidv4} = require("uuid");
class Products{
  constructor(dataObject){
    //this.id = dataObject.id || uuidv4();
    this.name = dataObject.name;
    this.code = dataObject.code;
    this.date = new Date();
  }

  get Name() { return this.name; }
  set Name(newValue) { this.OnChange(propertyName, this.name, newValue); this.name = newValue; }

    Update(data){
      this.Name = data.name;
      //this.dateUpdated = new Date();
    }

    CanDelete(){
      return false;
    }

  OnChange(propertyName){
    //console.log("OnChange");
    if(propertyName === "Name")
      this.dateUpdated = new Date();
  }

}

module.exports = Products;
