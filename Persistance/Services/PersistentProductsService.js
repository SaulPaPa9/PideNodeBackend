

const Products = require("../../BusinessModel/Inventory/Products");
const entityName = Products.entityName;
const ProductSchema = require("../Schemas/ProductSchema");
const DBSession = require("../../DataBase/DBSession");
const Session = new DBSession(entityName, ProductSchema);
const boom = require("@hapi/boom");

class PersistentProductsService {

  static async FindAll() {
    let products = await Session.FindAll();
    return products;
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

  static async Create(product) {
    try {
      //console.log("p " + product.name);
      let bussinesModel = new Products(product);

      //console.log("model object", bussinesModel);

      let createdObject = await Session.Save(bussinesModel);

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
      productObject.dateUpdated = data.dateUpdated;
      productObject.code = data.code;

      Session.Save(productObject);

      return productObject;
    }
    else
      throw boom.notFound(`${entityName} whit id " + id + " not found to be updated`);
  }

  static async Delete(id) {

    let productObject = await Session.FindById(id);

    if (productObject) {
      let productBusinessObject = new Products(productObject);
      if (productBusinessObject.CanDelete()) {
        await Session.Delete(productObject);
        return id;
      }
      else
        throw boom.notFound(`${entityName} ${productBusinessObject.Name} can not be deleted`);
    }
    else
      throw boom.notFound(`${entityName} whit id ${id} not found to be deleted`);
  }
}

module.exports = PersistentProductsService;
