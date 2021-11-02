const boom = require("@hapi/boom");
const PersistentService = require("../Persistance/Services/PersistentCompanyService");

class CompanyService{

  async FindAll(){
    // return this.Products;
    return PersistentService.FindAll();
   }

   async FindByKey(id){
     return PersistentService.FindByKey(id);
   }

   async Find(data){
     return PersistentService.Find(data);
   }


   async Create(product){
     try{
     let createdObject = await PersistentService.Create(product);
     return createdObject;
     }
     catch(err){
       throw boom.badImplementation(err.message);
     }
   }

   async Update(id, data){

       try{

         if(id && data)
         {
         let dbObject = await PersistentService.Update(id, data);
         return dbObject;
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
     await PersistentService.Delete(id)

       return id;
     }
     catch(error){
       throw boom.notFound(error.message);
     }

   }
}

module.exports = CompanyService;