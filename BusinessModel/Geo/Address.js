const { v4: uuidv4 } = require("uuid");
class Address {
    constructor(dataObject) {
        // Principal data
        this.id = dataObject.id || uuidv4();
        // Address data
        this.street = dataObject.street;
        this.externalNumber = dataObject.externalNumber;
        this.internalNumber = dataObject.internalNumber;
        // Zone data        
        this.colony = dataObject.colony;
        this.city = dataObject.city; // --> City table?
        this.municipality = dataObject.municipality; // --> Municipality table?
        this.state = dataObject.state; // --> State table?
        this.country = dataObject.country; // --> Country table?
        this.zipCode = dataObject.zipCode;
        this.indication = dataObject.indication;
        
        // Address type
        this.home = dataObject.home;
        this.work = dataObject.work;
        this.fullAddress = dataObject.fullAddress; // Calculated field
    }

    // Get/Set Data
    get AddressLine() { return this.addressLine; }
    set AddressLine(newValue) { this.OnChange(propertyName); this.addressLine = newValue; }

    get ExternalNumber() { return this.externalNumber; }
    set ExternalNumber(newValue) { this.OnChange(propertyName); this.externalNumber = newValue; }

    get InternalNumber() { return this.internalNumber; }
    set InternalNumber(newValue) { this.OnChange(propertyName); this.internalNumber = newValue; }

    get Suburb() { return this.suburb; }
    set Suburb(newValue) { this.OnChange(propertyName); this.suburb = newValue; }

    get City() { return this.city; }
    set City(newValue) { this.OnChange(propertyName); this.city = newValue; }

    get Municipality() { return this.municipality; }
    set Municipality(newValue) { this.OnChange(propertyName); this.municipality = newValue; }

    get State() { return this.state; }
    set State(newValue) { this.OnChange(propertyName); this.state = newValue; }

    get Country() { return this.country; }
    set Country(newValue) { this.OnChange(propertyName); this.country = newValue; }

    get ZipCode() { return this.zipCode; }
    set ZipCode(newValue) { this.OnChange(propertyName); this.zipCode = newValue; }

    get FullAddress() { return this.fullAddress; }
    set FullAddress(newValue) { this.OnChange(propertyName); this.fullAddress = newValue; }

    // Updating data
    Update(data) {
        this.AddressLine = data.addressLine;
        this.ExternalNumber = data.externalNumber;
        this.InternalNumber = data.internalNumber;
        this.Suburb = data.suburb;
        this.City = data.city;
        this.Municipality = data.municipality;
        this.State = data.state;
        this.Country = data.country;
        this.ZipCode = data.zipCode;
        // Work on this concatenation
        this.FullAddress = data.fullAddress + data.externalNumber + data.internalNumber + data.suburb + data.city + data.municipality + data.state + data.country + data.zipCode;
    }

    // Can delete data?
    CanDelete() {
        // Code
    }

    // OnChange data
    OnChange(propertyName) {
        if (propertyName === "AddressLine") {
            // Code
        }
        if (propertyName === "ExternalNumber") {
            // Code
        }
        if (propertyName === "InternalNumber") {
            // Code
        }
        if (propertyName === "Suburb") {
            // Code
        }
        if (propertyName === "City") {
            // Code
        }
        if (propertyName === "Municipality") {
            // Code
        }
        if (propertyName === "State") {
            // Code
        }
        if (propertyName === "Country") {
            // Code
        }
        if (propertyName === "ZipCode") {
            // Code
        }
    }

}

module.exports = Address;