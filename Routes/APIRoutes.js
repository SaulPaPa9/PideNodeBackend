const ProductRoutes = require("./ProductRoutes");

class APIRoutes
{
  static RegisterRoutes(app, express){
    new ProductRoutes().RegisterRoutes(app, express);
    //ProductRoutes.RegisterRoutes(app, express);
  }
}

module.exports = APIRoutes;
