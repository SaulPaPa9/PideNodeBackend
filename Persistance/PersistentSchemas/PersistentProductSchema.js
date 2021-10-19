const DBLib = require("../DBLib");

class PersistentProductSchema extends DBLib{

  constructor(){
    super("admin");

    this.Model = this.GetModel("products", this.GetSchema());
  }

  GetSchema(){
  const productScema = new this.mongoose.Schema({
    name : {
      type: String,
      required : true,
      unique : true
    },
    code : String,
    date : Date,
    dateUpdated : Date,
  });

  return productScema;
  }

}

module.exports = new PersistentProductSchema();
