const CompanySchema = {
  name : {
    type: String,
    required : true,
    unique : true
  }
}

module.exports = CompanySchema;