const { v4: uuidv4 } = require("uuid");
class State {
    constructor(dataObject) {
        //this.id = dataObject.id || uuidv4();
        this.name = dataObject.name;
        this.shortName = dataObject.shortName;
        this.country = dataObject.country; // Link to object

        // Collections
        this.municipal = dataObject.municipal;
        
    }

    // Get/Set Data
    get Name() { return this.name; }
    set Name(newValue) { this.OnChange("Name",this.name, newValue); this.name = newValue; }

    get ShortName() { return this.shortName; }
    set ShortName(newValue) { this.OnChange("ShortName",this.shortName, newValue); this.shortName = newValue; }

    get Country() { return this.country; }
    set Country(newValue) { this.OnChange("Country",this.country, newValue); this.country = newValue; }

    // Updating data
    Update(data) {
        this.Name = data.name;
        this.ShortName = data.shortName;
        this.Country = data.country;
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
        if (propertyName === "Country" && newValue != null) {
            // Code
        }
    }

}

module.exports = State;