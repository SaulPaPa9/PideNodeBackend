const BaseModel = require("../../Persistance/BaseModel");

class BranchCategory extends BaseModel{
    constructor(dataObject){
      super(dataObject);

        this.branch = dataObject.branch;
        this.category;
        this.date = new Date();
        this.active = dataObject.active; // aun falta decidir
    }
    CanDelete(){
        return false;
    }

}

module.exports = BranchCategory;