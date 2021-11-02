
const BaseModel = require("../../Persistance/BaseModel");


class Products extends BaseModel {


static entityName = "products";

  constructor(dataObject) {

    super(dataObject);

    this.name = dataObject.name;
    this.code = dataObject.code;
    this.date = new Date();
  }

  get Name() { return this.name; }
  set Name(newValue) { this.OnChange(propertyName, this.name, newValue); this.name = newValue; }

  Update(data) {
    this.Name = data.name;
    // this.dateUpdated = new Date();
  }

  CanDelete() {
    return true;
  }

  OnChange(propertyName, oldValue, newValue) {
    // console.log("OnChange");
    if (propertyName === "Name")
      this.dateUpdated = new Date();
  }


  // static elements
  /*
  static GetInstance(dbObject) {
    let instance = new Products(dbObject);
    console.log("Instance " + instance);
    return instance;
  }
*/

}

module.exports = Products;
