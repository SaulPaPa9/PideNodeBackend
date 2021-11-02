const boom = require("@hapi/boom");
const PersistentProductsService = require("../Persistance/Services/PersistentProductsService");

class ProductsService
{
  constructor(){

  this.Products = [
    {id : "560a8451-a29c-41d4-a716-544676554400", name:"P1", code:"1"},
    {id : "560a8452-a29d-41d4-a716-544676554400", name:"P2", code:"2"}];
  }

  async FindAll(){
     // return this.Products;
     return PersistentProductsService.FindAll();
    }

    async FindByKey(id){
      //return this.Products.find(item => item.id === id);
      return PersistentProductsService.FindByKey(id);
    }

    async Find(data){
      return PersistentProductsService.Find(data);
    }

    async PaginatedProducts(limit, offset){
      return  {
        limit: limit,
        offset: offset
      };
    }

    async Create(product){
      try{
      //this.Products.push(product);
      let createdObject = await PersistentProductsService.Create(product);
      return createdObject;
      }
      catch(err){
        throw boom.badImplementation(err.message);
      }
    }

    async Update(id, data){
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
        */
        try{

          if(id && data)
          {
          let productObject = await PersistentProductsService.Update(id, data);
          return productObject;
          }
          else
          throw boom.badRequest("Invalid parameters to Update");

        }
        catch(error){
          throw boom.notFound(error.message);
        }


    }

    async Delete(id){
      try{
      await PersistentProductsService.Delete(id)

        return id;
      }
      catch(error){
        throw boom.notFound(error.message);
      }

    }
}

module.exports = ProductsService;
