const { v4: uuidv4 } = require("uuid");
class Country {
    constructor(dataObject) {
        //this.id = dataObject.id || uuidv4();
        this.name = dataObject.name;
        this.shortName = dataObject.shortName;
        
        // Collections
        this.state = dataObject.state;
        
    }

    // Get/Set Data
    get Name() { return this.name; }
    set Name(newValue) { this.OnChange("Name",this.name, newValue); this.name = newValue; }

    get ShortName() { return this.shortName; }
    set ShortName(newValue) { this.OnChange("ShortName",this.shortName, newValue); this.shortName = newValue; }


    // Updating data
    Update(data) {
        this.Name = data.name;
        this.ShortName = data.shortName;
    }

    // Can delete data?
    CanDelete() {
        // Code
    }

    // OnChange data
    OnChange(propertyName, oldValue, newValue) {
        if (propertyName === "Name" && newValue != null) {
            // Code
        }
        if (propertyName === "ShortName" && newValue != null) {
            // Code
        }
    }

}

module.exports = Country;