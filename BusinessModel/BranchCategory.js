// const {v4 : uuidv4 } =require("uuid");
class BranchCategory{
    constructor(dataObject){
        // this.id = dataObject.id || uuidv4();
        this.branch = dataObject.branch;
        this.category;
        this.date = new Date();
        // this.active; // aun falta decidir
    }

    // get Name() { return this.name; }
    //     set Name(newValue) {this.onChange(propertyName); this.name = newValue; }

    // Update(data){
    //     this.Name = data.name;
    // }

    CanDelete(){
        return false;
    }

    // OnChange(propertyName){
    //     if(propertyName === "Name")
    //         this.dateUpdated = new Date();
    // }

}

module.exports = BranchCategory;