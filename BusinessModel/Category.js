// const {v4 : uuidv4 } =require("uuid");
class Category{
    constructor(dataObject){
        // this.id = dataObject.id || uuidv4();
        this.date = new Date();
        this.supCategory = dataObject.supCategory; // change
        this.name = dataObject.name; // change
        this.description; // change
    }

    get Name() { return this.name; }
        set Name(newValue) {this.onChange(propertyName); this.name = newValue; }

    Update(data){
        this.Name = data.name;
    }

    CanDelete(){
        return false;
    }

    OnChange(propertyName){
        if(propertyName === "Name")
            this.dateUpdated = new Date();
    }

}

module.exports = Category;