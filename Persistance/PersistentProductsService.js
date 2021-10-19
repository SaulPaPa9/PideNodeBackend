
const persistentSchema = require("./PersistentSchemas/PersistentProductSchema");
const Products = require("../BusinessModel/Products");
const boom = require("@hapi/boom");

class PersistentProductsService{
  constructor(){
    /*
    this.Products = [
      {id : "560a8451-a29c-41d4-a716-544676554400", name:"P1", code:"1"},
      {id : "560a8452-a29d-41d4-a716-544676554400", name:"P2", code:"2"}];
      */
    }

    static async FindAll(){
        //return this.Products;
        let products = await persistentSchema.Model.find();
        //console.log(products);
        return products;
      }

      static async FindByKey(id){
       // return this.Products.find(item => item.id === id);
       let foundObject = await persistentSchema.Model.findById(id);
        return foundObject;
      }

      static async Find(data){
        let foundObject = await persistentSchema.Model.findByOne({data});
        return foundObject;
      }

      async PaginatedProducts(limit, offset){
        return  {
          limit: limit,
          offset: offset
        };
      }

      static async Create(product){
        try{
        let bussinesModel =  new Products(product);
        //console.log("model object", bussinesModel);
        let persistentModel =  new persistentSchema.Model(bussinesModel);

        let createdObject = await persistentModel.save();

        //this.Products.push(product);
        return createdObject;
        }
        catch(error){
          throw boom.notImplemented(" wii "+error.message);
        }

      }

      static async Update(id, data){
        /*
        let index = this.Products.findIndex(item => item.id === id);
        if(index != -1)
        {
          let currentProduct = this.Products[index];

          this.Products[index] = {
            ...currentProduct,
            ...data
          };

          return this.Products[index];
        }
        else
        //throw new Error("Produt whit id " + id + " not found to be updated");
        throw boom.notFound("Produt whit id " + id + " not found to be updated");
        */
        let productObject = await this.FindByKey(id);

//Model.finByIdAndUpdate(id)
        if(productObject){
          let productBusinessObject = new Products(productObject);
          productBusinessObject.Update(data);
          /*
          productBusinessObject  = {
            ...productBusinessObject,
            ...data
          };
*/
          productObject.name = productBusinessObject.name;
          productObject.dateUpdated = productBusinessObject.dateUpdated;
          productObject.code = productBusinessObject.code;

          productObject.save();

          return productObject;
        }
        else
        throw boom.notFound("Produt whit id " + id + " not found to be updated");
      }

      static async Delete(id){
        /*
        let index = this.Products.findIndex(item => item.id === id);
        if(index != -1)
        {
          this.Products.splice(index, 1);

          return {id};
        }
        else
        //throw new Error("Produt whit id " + id + " not found to be deleted");
        throw boom.notFound("Produt whit id " + id + " not found to be deleted");
        */
        let productObject = await this.FindByKey(id);

        //Model.finByIdAndDelete(id)
                if(productObject){
                  let productBusinessObject = new Products(productObject);
                  if(productBusinessObject.CanDelete())
                  {
                 await productObject.delete();
                 return id;
                }
                 else
                 throw boom.notFound("Product " + productBusinessObject.Name + " can not be deleted");


                }
                else
                throw boom.notFound("Product whit id " + id + " not found to be deleted");

      }
}

module.exports = PersistentProductsService;
