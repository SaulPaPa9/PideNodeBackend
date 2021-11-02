const Company = require("../../BusinessModel/CompanyStructure/Company");
const entityName = Company.entityName;
const CompanySchema = require("../Schemas/CompanySchema");
const DBSession = require("../../DataBase/DBSession");
const Session = new DBSession(entityName, CompanySchema);
const boom = require("@hapi/boom");


class PersistentCompanyService{

  static async FindAll() {
    let objectsList = await Session.FindAll();
    return objectsList;
  }

  static async FindByKey(id) {
    let foundObject = await Session.FindById(id);
    //let modelInstance = new Products(foundObject);
    return foundObject;
  }

  static async Find(data) {
    let foundObject = await Session.Find({ data });
    return foundObject;
  }

  async PaginatedProducts(limit, offset) {
    return {
      limit: limit,
      offset: offset
    };
  }

  static async Create(data) {
    try {
      let bussinesModel = new Company(data);

      //console.log("model company object", bussinesModel);

      let createdObject = await Session.Save(bussinesModel);
      //console.log("cre", createdObject);
      return createdObject;
    }
    catch (error) {
      throw boom.notImplemented(" wii " + error.message);
    }
  }

  static async Update(id, data) {

    let productObject = await Session.FindById(id);

    if (productObject) {

      productObject.name = data.name;

      Session.Save(productObject);

      return productObject;
    }
    else
      throw boom.notFound(`${entityName} whit id ${id} not found to be updated`);
  }

  static async Delete(id) {

    let productObject = await Session.FindById(id);

    if (productObject) {

        await Session.Delete(productObject);
        return id;
    }
    else
      throw boom.notFound(`${entityName} whit id ${id} not found to be deleted`);
  }
}

module.exports = PersistentCompanyService;