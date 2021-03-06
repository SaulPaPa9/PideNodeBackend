const RouterRegister = require("./Settings/RouterRegister");
const resStatus = require("./Settings/ResponseStatus");
const CompanysService = require("../Services/CompanyService");
const ValidatorHandler = require("../Middelwares/DataValidationsHandler");
const ProductsValidationSchema = require("../Middelwares/ValidationSchemas/ProductsValidationSchema");

const service = new CompanysService();

class CompanyRoutes extends RouterRegister{
  constructor(){

    super("company");
  }

  async GetRoutes(router){

    router.get("/", async (req, res, next) => {
      try{
        let objectsList = await service.FindAll();

        res.status(resStatus.Ok).json(objectsList);
      }
      catch(error){
        next(error);
      }
    });

    router.get("/find/",
    ValidatorHandler(ProductsValidationSchema.UpdateSchema, "query"),
    async (req, res, next) => {
      try{
      const query = req.query;
        if(query)
        {
          let product = await service.Find(query);
          if(product)
            res.status(resStatus.Ok).json(product);
          else
            res.status(resStatus.NotFound).json("Product not fund");
        }
        else
        res.status(resStatus.BadRequest).send("Incorrect paramter received");
      }
      catch(error)
      {
        //next(error);
        res.status(resStatus.InternalServerError).send(error.message);
      }
    });

    router.get('/lo', async (req, res, next) => {
      // http://localhost:3000/users?limit=10&ofset=20
      try{
      const {limit, offset} = req.query;
      if(limit && offset)
      {
        let products = await service.PaginatedProducts(limit, offset);
        res.status(resStatus.Ok).json(products);
      } else
        res.status(resStatus.BadRequest).send("Incorrect paramter received");
      }catch(error){
        res.status(resStatus.InternalServerError).send(error.message);
        //next(error);
      }
    });

    router.get("/:id",
    ValidatorHandler(ProductsValidationSchema.GetSchema, "params"),
    async (req, res, next) => {
      try{
      const productId = req.params.id;
        if(productId)
        {
          let product = await service.FindByKey(productId);
          if(product)
            res.status(resStatus.Ok).json(product);
          else
            res.status(resStatus.NotFound).json("Product not fund");
        }
        else
        res.status(resStatus.BadRequest).send("Incorrect paramter received");
      }
      catch(error)
      {
        //next(error);
        res.status(resStatus.InternalServerError).send(error.message);
      }
    });




    router.get('/categories/:categoryId/products/:productId', async (req, res, next) => {
      // http://localhost:3000/categories/19/products/79
      const {categoryId, productId} = req.params;
      res.status(resStatus.Ok).json(
        {
          categoryId: categoryId,
          categoryName: "Beer",
          Product: {productId: productId, productName: "caf??", price: "23"}
        }
      );
    });
  }


 async PostRoutes(router) {

    router.post('/',
    ValidatorHandler(ProductsValidationSchema.CreateSchema, "body"),
    async (req, res, next) => {
        try {

            let body = req.body;
            if(body)
            {
            //console.log("body " + JSON.stringify(body));

            let createdObject =  await service.Create(body);
            if(createdObject)
            {
            res.status(resStatus.Created).json({
                data: createdObject,
                message: "Store a Product to MongoDB"
            });
          }
          else
          res.status(resStatus.InternalServerError).send("Can't create product");
          }
            else
            res.status(resStatus.BadRequest).send("Missing data to create product");
          }
        catch (err) {
          //next(err);
          res.status(resStatus.InternalServerError).send(err.message);
        }
    });
}

 async PutRoutes(router) {

    router.put('/:id', async (req, res, next) => {

        try {
            let { id } = req.params, body = req.body;

            let products = {name : "P1"};//await ProductController.UpdateProduct(id, body);
            res.status(resStatus.Ok).json({
                data: products,
                message: "Update a Product to MongoDB"
            });
        }
        catch (err) { next(err); }
    });
}

 async PatchRoutes(router) {
    router.patch('/:id',
    ValidatorHandler(ProductsValidationSchema.GetSchema, "params"),
    ValidatorHandler(ProductsValidationSchema.CreateSchema, "body"),
    async (req, res, next) => {

        try {
            let { id } = req.params, body = req.body;

            if(id && body)
            {
            let product = await service.Update(id, body);
            if(product)
            res.status(resStatus.Ok).json({
                data: product,
                message: "Update by Patch verbose a Product to MongoDB"
            });
            else
            res.status(resStatus.InternalServerError).send("Product with id " + id + "Can't be updated");
          } else
          res.status(resStatus.BadRequest).send("Incorrect parameters recived");
        }
        catch (err) {
          //next(err);
          res.status(resStatus.InternalServerError).send(err.message);
        }
    });
}


 async DeleteRoutes(router) {
    router.delete('/:id',
    ValidatorHandler(ProductsValidationSchema.GetSchema, "params"),
    async (req, res, next) => {
        try {
            let { id } = req.params;

            if(id)
            {
            let product = await service.Delete(id);

            if(product)
            {
            res.status(resStatus.Ok).json({
                data: product,
                message: "Product deleted"
            });
          } else
          res.status(resStatus.InternalServerError).send("Product with id " + id + "Can't be deleted");
          }
          else
          res.status(resStatus.BadRequest).send("Incorrect parameters recived");
        }
        catch (err) {
          next(err);
        }
    });
}
}

module.exports = CompanyRoutes;