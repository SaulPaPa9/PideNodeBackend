const { v4: uuidv4 } = require("uuid");
class Municipal {
    constructor(dataObject) {
        //this.id = dataObject.id || uuidv4();
        this.name = dataObject.name;
        this.shortName = dataObject.shortName;
        this.state = dataObject.state; // Link to object
        
        // Collections
        this.location = dataObject.location;
    }

    // Get/Set Data
    get Name() { return this.name; }
    set Name(newValue) { this.OnChange("Name",this.name, newValue); this.name = newValue; }

    get ShortName() { return this.shortName; }
    set ShortName(newValue) { this.OnChange("ShortName",this.shortName, newValue); this.shortName = newValue; }

    get State() { return this.state; }
    set State(newValue) { this.OnChange("State",this.state, newValue); this.state = newValue; }

    // Updating data
    Update(data) {
        this.Name = data.name;
        this.ShortName = data.shortName;
        this.State = data.state;
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
        if (propertyName === "State" && newValue != null) {
            // Code
        }
    }

}

module.exports = Municipal;