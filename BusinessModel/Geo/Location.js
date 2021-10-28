const { v4: uuidv4 } = require("uuid");
class Locality {
    constructor(dataObject) {
        //this.id = dataObject.id || uuidv4();
        this.name = dataObject.name;
        this.shortName = dataObject.shortName;
        this.municipal = dataObject.municipal; // Link to object
        this.locationId = dataObject.locationId;

        // Collections
        this.colony = dataObject.colony;
    }

    // Get/Set Data
    get Name() { return this.name; }
    set Name(newValue) { this.OnChange("Name",this.name, newValue); this.name = newValue; }

    get ShortName() { return this.shortName; }
    set ShortName(newValue) { this.OnChange("ShortName",this.shortName, newValue); this.shortName = newValue; }

    get Municipal() { return this.municipal; }
    set Municipal(newValue) { this.OnChange("Municipal",this.municipal, newValue); this.municipal = newValue; }

    get LocationId() { return this.Name + " " + this.Municipal.Name + " " + this.Municipal.State.Name + " " + this.Municipal.State.Country.Name; }

    // Updating data
    Update(data) {
        this.Name = data.name;
        this.ShortName = data.shortName;
        this.Municipal = data.municipal;
        this.LocationId = data.locationId;
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
        if (propertyName === "Municipal" && newValue != null) {
            // Code
        }
    }

}

module.exports = Locality;