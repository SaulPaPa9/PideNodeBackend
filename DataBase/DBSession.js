const DBLib = require("./DBDriver");

class DBSession {

  constructor(collectionName, collectionSchema, dbName) {
    this.Model = DBLib.GetModel(collectionName, collectionSchema, dbName);
  }

  // Local functions

  async FindAll() {
    return await this.Model.find();
  }

  async FindById(id) {
    return await this.Model.findById(id);
  }

  async Find({ data }) {
    return await this.Model.findOne(data);
  }

  async Save(dbObject) {

    // If has not found existing object then creates a new one
    if (!dbObject._id)
    dbObject = new this.Model(dbObject);

    // Saves the object to database
    await dbObject.save();

    return dbObject;
  }
/*
  async Save(data) {

    let dbObject = data;
    // Check if _id exist to search it
    //if (data._id)
    //dbObject = await this.FindById(data._id);

    // If has not found existing object then creates a new one
    if (!dbObject._id)
      dbObject = new this.Model(data);

    // Saves the object to database
    await dbObject.save();

    return dbObject;
  }
*/
  async Delete(id) {

    await this.Model.deleteOne(id);;

    return id;
  }

  //Static functions

}

module.exports = DBSession;
