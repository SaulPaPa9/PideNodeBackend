const joi = require("joi-oid");

class ProductsValidationSchema{
static id = joi.objectId();
static name = joi.string().min(1);
static code = joi.string().min(1).max(100);

static GetSchema = joi.object({
  id : this.id.required(),
});

static CreateSchema = joi.object({
  //id : this.id.required(),
  name: this.name.required(),
  code: this.code
});

static UpdateSchema = joi.object({
name : this.name,
code : this.code
});

}

module.exports = ProductsValidationSchema;
