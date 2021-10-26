const { v4: uuidv4 } = require("uuid");
class Branch {
    constructor(dataObject) {
        // Principal data
        this.id = dataObject.id || uuidv4();
        this.idOwner = dataObject.idOwner;
        this.idAddress = dataObject.idAddress;
        // Information data
        this.name = dataObject.name;

    }

    // Get/Set Data
    get Name() { return this.name; }
    set Name(newValue) { this.OnChange(propertyName); this.name = newValue; }

    // Add categories
    AddCategory(value) {
        // Function code
    }

    // Updating data
    Update(data) {
        this.Name = data.name;
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
    }

}

module.exports = Branch;
