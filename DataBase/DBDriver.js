
const mongoose = require("mongoose");
//require('mongoose-uuid2').loadType(mongoose);
const envConfig = require("../Config/EnvConfig");


class DBDriver {
/*
  constructor(dbOrigin) {

    if (dbOrigin === "DBClient") { }
    else if (dbOrigin === "DBDeliver") { }
    else {
      if (!DBLib.Mongoose) {
        DBLib.Mongoose = this.CreateMongooseInstance(envConfig.adminDBUser, envConfig.adminDBPassword, envConfig.adminDBName, envConfig.adminDBHost);
      }
      else
      {
        this.mongoose = DBLib.Mongoose;
        console.log("Reusing existing mongoose instance!");
      }
    }
  }
*/
  static CreateMongooseInstance(dBUser, dBPassword, dBName, dBHost) {
    this.mongoose = mongoose;
    this.mongoose.Promise = global.Promise;
    this.Connect(encodeURIComponent(dBUser), encodeURIComponent(dBPassword), dBName, dBHost);

    return this.mongoose;
  }

  static async Connect(dbUser, dbPass, dbName, dbHost) {

    // 3.6 or later
    //mongodb+srv://<username>:<password>@iventacluster.k3r8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

    // 2.2.12 or later
    // mongodb://<username>:<password>@iventacluster-shard-00-00.k3r8v.mongodb.net:27017,iventacluster-shard-00-01.k3r8v.mongodb.net:27017,iventacluster-shard-00-02.k3r8v.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-roawtc-shard-0&authSource=admin&retryWrites=true&w=majority

    let mongoDB_Uri = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

    await this.mongoose.connect(mongoDB_Uri, { useNewUrlParser: true });

    console.log("Data Base Connected Succesfully!")
  }

  GetModel(collectionName, schema) {
    return this.mongoose.model(collectionName, schema, { optimisticConcurrency: true }, { timestamps: true });
  }

  static mongoose;
  static get Mongoose(){
    if(!this.mongoose)
    this.mongoose = this.CreateMongooseInstance(envConfig.adminDBUser, envConfig.adminDBPassword, envConfig.adminDBName, envConfig.adminDBHost);

    return this.mongoose;
  };

  static GetModel(collectionName, schema){
    let modelSchema = new this.Mongoose.Schema(schema, { timestamps: true, optimisticConcurrency: true});

    return this.Mongoose.model(collectionName, modelSchema);
  }

}

module.exports = DBDriver;
