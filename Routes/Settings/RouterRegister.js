const AuthenticationHandler = require("../../Middelwares/AuthenticationHandler");
class RouterRegister{

constructor(baseRouteName){
this.BaseRouteName = baseRouteName;
}

 RegisterRoutes(app, express){
  let router = express.Router();

  this.GetRoutes(router);
  this.PostRoutes(router);
  this.PutRoutes(router);
  this.PatchRoutes(router);
  this.DeleteRoutes(router);

  app.use("/"+this.BaseRouteName, AuthenticationHandler.CheckApiKey, router);
 }


 async GetRoutes(router){}

 async PostRoutes(router) {}

 async PutRoutes(router) {}

 async PatchRoutes(router) {}

 async DeleteRoutes(router) {}
}

module.exports = RouterRegister;
