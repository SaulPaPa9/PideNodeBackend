class ErrorsHandler{

  static RegisterMiddelwares(app){
    app.use(this.LogErrors);
    app.use(this.BoomErrorHandler);
    app.use(this.ErrorHandler);
  }

  static LogErrors (err, req, res, next){
    //console.log("From log middelware");
    console.error(err);
    next(err);
  }

  static BoomErrorHandler(err, req, res, next){
    if(err.isBoom)
    {
      //console.log("BoomHandledError");
      let {output} = err;
      res.status(output.statusCode).json(output.payload);
    }
    else
    next(err);
  }

  static ErrorHandler(err, req, res, next){
    // console.log("From handler middelware");
    res.status(500).json({
      message: err.message,
      resStatus: err.resStatus,
      //stack: err.stack
    });
  }
}

module.exports = ErrorsHandler;
