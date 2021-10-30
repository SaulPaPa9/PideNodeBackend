// const {v4 : uuidv4 } =require("uuid");
class Provider{
    constructor(dataObject){
        // this.id = dataObject.id || uuidv4();
        this.user = dataObject.user;
        this.active = dataObject.active; // esta por verse
        this.code = dataObject.code; // codigo de provider, para mostrar los productos que surte el provider
        
    }

    CanDelete(){
        return false;
    }

}

module.exports = Provider;