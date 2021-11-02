const { v4: uuidv4 } = require("uuid");
class Address {
    constructor(dataObject) {
        //this.id = dataObject.id || uuidv4();
        this.addressLine = dataObject.addressLine;
        this.street = dataObject.street;
        this.externalNumber = dataObject.externalNumber;
        this.internalNumber = dataObject.internalNumber;        
        this.location = dataObject.location;
        this.colony = dataObject.colony;
        this.zipCode = dataObject.zipCode;
        this.adjacentStreets = dataObject.adjacentStreets;
        this.indication = dataObject.indication;
        this.home = dataObject.home;
        this.work = dataObject.work;
    }

    // Get/Set Data
    get AddressLine() { return this.addressLine; }
    set AddressLine(newValue) { this.OnChange("AddressLine",this.addressLine, newValue); this.addressLine = newValue; }

    get Street() { return this.street; }
    set Street(newValue) { this.OnChange("Street",this.street, newValue); this.street = newValue; }

    get ExternalNumber() { return this.externalNumber; }
    set ExternalNumber(newValue) { this.OnChange("ExternalNumber",this.externalNumber, newValue); this.externalNumber = newValue; }

    get InternalNumber() { return this.internalNumber; }
    set InternalNumber(newValue) { this.OnChange("InternalNumber",this.internalNumber, newValue); this.internalNumber = newValue; }

    get Location() { return this.location; }
    set Location(newValue) { this.OnChange("Location",this.location, newValue); this.location = newValue; }

    get Colony() { return this.colony; }
    set Colony(newValue) { this.OnChange("Colony",this.colony, newValue); this.colony = newValue; }

    get ZipCode() { return this.zipCode; }
    set ZipCode(newValue) { this.OnChange("ZipCode",this.zipCode, newValue); this.zipCode = newValue; }

    get AdjacentStreets() { return this.adjacentStreets; }
    set AdjacentStreets(newValue) { this.OnChange("AdjacentStreets",this.adjacentStreets, newValue); this.adjacentStreets = newValue; }

    get Indication() { return this.indication; }
    set Indication(newValue) { this.OnChange("Indication",this.indication, newValue); this.indication = newValue; }

    get Home() { return this.home; }
    set Home(newValue) { this.OnChange("Home",this.home, newValue); this.home = newValue; }

    get Work() { return this.work; }
    set Work(newValue) { this.OnChange("Work",this.work, newValue); this.work = newValue; }

    get FullAddress() { return this.Indication + ", " + this.ZipCode + ", " + this.Colony + ", " + this.Location + ", " + this.Location.Municipal.Name + ", " + this.Location.Municipal.State.Name + ", " + this.Location.Municipal.State.Country.Name; }

    // Updating data
    Update(data) {
        this.AddressLine = data.addressLine;
        this.Street = data.street;
        this.ExternalNumber = data.externalNumber;
        this.InternalNumber = data.internalNumber;
        this.Location = data.location;
        this.colony = data.colony;
        this.ZipCode = data.zipCode;
        this.AdjacentStreets = data.adjacentStreets;
        this.Indication = data.indication;
        this.Home = data.home;
        this.Work = data.work;
        this.FullAddress = data.fullAddress;
    }

    // Can delete data?
    CanDelete() {
        // Code
    }

    // OnChange data
    OnChange(propertyName, oldValue, newValue) {
        if (propertyName === "AddressLine" && newValue != null) {
            // Code
        }
        if (propertyName === "Street" && newValue != null) {
            // Code
        }
        if (propertyName === "ExternalNumber" && newValue != null) {
            // Code
        }
        if (propertyName === "InternalNumber" && newValue != null) {
            // Code
        }
        if (propertyName === "Location" && newValue != null) {
            // Code
        }
        if (propertyName === "Colony" && newValue != null) {
            // Code
        }
        if (propertyName === "ZipCode" && newValue != null) {
            // Code
        }
        if (propertyName === "AdjacentStreets" && newValue != null) {
            // Code
        }
        if (propertyName === "Indication" && newValue != null) {
            // Code
        }
    }

}

module.exports = Address;