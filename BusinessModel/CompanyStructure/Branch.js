const BaseModel = require("../../Persistance/BaseModel");

class Branch extends BaseModel{
    constructor(dataObject) {
        // Principal data
        this.company = dataObject.company;
        this.idOwner = dataObject.idOwner;
        this.idAddress = dataObject.idAddress;
        // Information data
        this.name = dataObject.name;
        this.nameToPrint = dataObject.nameToPrint;
    }
    

    // Get/Set Data
    get Name() { return this.name; }
    set Name(newValue) { this.OnChange(propertyName); this.name = newValue; }

    get NameToPrint() { return this.nameToPrint; }
    set NameToPrint(newValue) { this.OnChange(propertyName); this.nameToPrint = newValue; }


    // Add categories
    AddCategory(value) {
        // Function code
    }

    // Updating data
    Update(data) {
        this.Name = data.name;
        this.NameToPrint = data.nameToPrint;
    }

    // Can delete data?
    CanDelete() {
        // Code
    }

    // OnChange data
    OnChange(propertyName) {
        if (propertyName === "Name") {
            // Code
        }
        if (propertyName === "NameToPrint") {
            // Code
        }
    }

}

module.exports = Branch;
