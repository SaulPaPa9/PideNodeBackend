
const mongoose = require("mongoose");
//require('mongoose-uuid2').loadType(mongoose);
const envConfig = require("../Config/EnvConfig");


class DBLib{

  constructor(dbOrigin){
    this.mongoose = mongoose;
    this.mongoose.Promise = global.Promise;

    if(dbOrigin === "DBClient")
    {}
    else if(dbOrigin === "DBDeliver")
    {}
    else {
      this.dbUser = encodeURIComponent(envConfig.adminDBUser);
      this.dbPass = encodeURIComponent(envConfig.adminDBPassword);
      this.dbName = envConfig.adminDBName;
      this.dbHost = envConfig.adminDBHost;
    }

    this.Connect();
  }

  Connect(){

    // 3.6 or later
    //mongodb+srv://<username>:<password>@iventacluster.k3r8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

    // 2.2.12 or later
    // mongodb://<username>:<password>@iventacluster-shard-00-00.k3r8v.mongodb.net:27017,iventacluster-shard-00-01.k3r8v.mongodb.net:27017,iventacluster-shard-00-02.k3r8v.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-roawtc-shard-0&authSource=admin&retryWrites=true&w=majority



    this.mongoDB_Uri = `mongodb+srv://${this.dbUser}:${this.dbPass}@${this.dbHost}/${this.dbName}?retryWrites=true&w=majority`;

    this.mongoose.connect(this.mongoDB_Uri, {useNewUrlParser : true});

    console.log("Data Base Connected Succesfully!")
  }


  GetModel(collectionName, schema){
    const productModel = this.mongoose.model(collectionName, schema);
    //console.log(productModel.schema);
    return productModel;
  }

}

module.exports = DBLib;
