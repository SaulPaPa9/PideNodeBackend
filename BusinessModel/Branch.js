const { v4: uuidv4 } = require("uuid");
class Branch {
    constructor(dataObject) {
        // Principal data
        this.id = dataObject.id || uuidv4();
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
