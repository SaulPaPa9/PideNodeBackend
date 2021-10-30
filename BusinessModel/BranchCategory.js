// const {v4 : uuidv4 } =require("uuid");
class BranchCategory{
    constructor(dataObject){
        // this.id = dataObject.id || uuidv4();
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