const { v4: uuidv4 } = require("uuid");
class Person {
  constructor(dataObject) {
    // Principal data
    this.id = dataObject.id || uuidv4();
    this.idAddress = dataObject.idAddress;
    // Personal data
    this.firstName = dataObject.firstName;
    this.middleName = dataObject.middleName;
    this.lastName = dataObject.lastName;
    this.birthDate = dataObject.birthDate;
    this.gender = dataObject.gender;
    // Contact data
    this.phoneNumber = dataObject.phoneNumber;
    this.email = dataObject.email;
    this.rfc = dataObject.rfc;

  }

  // Get/Set Data
  get FirstName() { return this.firstName; }
  set FirstName(newValue) { this.OnChange(propertyName); this.firstName = newValue; }

  get MiddleName() { return this.middleName; }
  set MiddleName(newValue) { this.OnChange(propertyName); this.middleName = newValue; }

  get LastName() { return this.lastName; }
  set LastName(newValue) { this.OnChange(propertyName); this.lastName = newValue; }

  get BirthDate() { return this.birthDate; }
  set BirthDate(newValue) { this.OnChange(propertyName); this.birthDate = newValue; }

  get Gender() { return this.gender; }
  set Gender(newValue) { this.OnChange(propertyName); this.gender = newValue; }

  get PhoneNumber() { return this.phoneNumber; }
  set PhoneNumber(newValue) { this.OnChange(propertyName); this.phoneNumber = newValue; }

  get Email() { return this.email; }
  set Email(newValue) { this.OnChange(propertyName); this.email = newValue; }

  get Rfc() { return this.rfc; }
  set Rfc(newValue) { this.OnChange(propertyName); this.rfc = newValue; }

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
  OnChange(propertyName) {
    if (propertyName === "FirstName") {
      // Code
    }
    if (propertyName === "MiddleName") {
      // Code
    }
    if (propertyName === "LastName") {
      // Code
    }
    if (propertyName === "BirthDate") {
      // Code
    }
    if (propertyName === "Gender") {
      // Code
    }
    if (propertyName === "PhoneNumber") {
      // Code
    }
    if (propertyName === "Email") {
      // Code
    }
    if (propertyName === "Rfc") {
      // Code
    }
  }

}

module.exports = Person;
