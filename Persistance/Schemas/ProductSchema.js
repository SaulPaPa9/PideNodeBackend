const ProductSchema = {
  name : {
    type: String,
    required : true,
    unique : true
  },
  code : String,
  date : Date,
  dateUpdated : Date,

}

module.exports = ProductSchema;