const mongoose = require("mongoose");

const CompanySchema = {
  name : {
    type: String,
    required : true,
    unique : true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company'
  }
}

module.exports = CompanySchema;