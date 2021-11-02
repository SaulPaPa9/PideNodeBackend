const { v4: uuidv4 } = require("uuid");
class Person {
  constructor(dataObject) {
    //this.id = dataObject.id || uuidv4();
    this.address = dataObject.address; // Link to object
    this.firstName = dataObject.firstName;
    this.middleName = dataObject.middleName;
    this.lastName = dataObject.lastName;
    this.birthDate = dataObject.birthDate;
    this.gender = dataObject.gender;
    this.phoneNumber = dataObject.phoneNumber;
    this.email = dataObject.email;
    this.rfc = dataObject.rfc;
  }

  // Get/Set Data
  get FirstName() { return this.firstName; }
  set FirstName(newValue) { this.OnChange("FirstName",this.externalNumber, newValue); this.firstName = newValue; }

  get MiddleName() { return this.middleName; }
  set MiddleName(newValue) { this.OnChange("MiddleName",this.middleName, newValue); this.middleName = newValue; }

  get LastName() { return this.lastName; }
  set LastName(newValue) { this.OnChange("LastName",this.lastName, newValue); this.lastName = newValue; }

  get BirthDate() { return this.birthDate; }
  set BirthDate(newValue) { this.OnChange("BirthDate",this.birthDate, newValue); this.birthDate = newValue; }

  get Gender() { return this.gender; }
  set Gender(newValue) { this.OnChange("Gender",this.gender, newValue); this.gender = newValue; }

  get PhoneNumber() { return this.phoneNumber; }
  set PhoneNumber(newValue) { this.OnChange("PhoneNumber",this.phoneNumber, newValue); this.phoneNumber = newValue; }

  get Email() { return this.email; }
  set Email(newValue) { this.OnChange("Email",this.email, newValue); this.email = newValue; }

  get Rfc() { return this.rfc; }
  set Rfc(newValue) { this.OnChange("Rfc",this.rfc, newValue); this.rfc = newValue; }

  // Updating data
  Update(data) {
    this.FirstName = data.firstName;
    this.MiddleName = data.middleName;
    this.LastName = data.lastName;
    this.BirthDate = data.birthDate;
    this.Gender = data.gender;
    this.PhoneNumber = data.phoneNumber;
    this.Email = data.email;
    this.Rfc = data.rfc;
  }

  // Can delete data?
  CanDelete() {
    // Code
  }

  // OnChange data
  OnChange(propertyName, oldValue, newValue) {
    if (propertyName === "FirstName" && newValue != null) {
      // Code
    }
    if (propertyName === "MiddleName" && newValue != null) {
      // Code
    }
    if (propertyName === "LastName" && newValue != null) {
      // Code
    }
    if (propertyName === "BirthDate" && newValue != null) {
      // Code
    }
    if (propertyName === "Gender" && newValue != null) {
      // Code
    }
    if (propertyName === "PhoneNumber" && newValue != null) {
      // Code
    }
    if (propertyName === "Email" && newValue != null) {
      // Code
    }
    if (propertyName === "Rfc" && newValue != null) {
      // Code
    }
  }

}

module.exports = Person;
