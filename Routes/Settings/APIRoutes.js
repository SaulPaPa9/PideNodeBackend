const ProductRoutes = require("../ProductRoutes");
const CompanyRoutes = require("../CompanyRoutes");

class APIRoutes
{
  static RegisterRoutes(app, express){
    new ProductRoutes().RegisterRoutes(app, express);
    new CompanyRoutes().RegisterRoutes(app, express);
    //ProductRoutes.RegisterRoutes(app, express);
  }
}

module.exports = APIRoutes;
