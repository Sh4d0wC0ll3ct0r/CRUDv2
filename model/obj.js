var obj={
    itemlist : [],
    id : 0,
    markedproduct : new Product,

    addProduct : function(name,price,desc){
        this.id++;
        var prod = new Product(this.id,name,price,desc);
        this.itemlist.push(prod);

        // console.log(this.itemlist);
    },

    toggleProduct : function(id){
        var markedlist = this.itemlist.filter(function(obj){
            if(obj.id==id)
            return obj.id;
        });
        this.markedproduct = markedlist[0];
        // console.log(this.markedproduct);
        this.markedproduct.selected = !this.markedproduct.selected;
        // console.log(this.markedproduct);
    },

    deleteProduct : function(){
        this.itemlist = this.itemlist.filter(function(obj){
            return obj.selected == false;
        });
    },

    editProduct : function(id,name,price,desc){
        edititem = new Product(id,name,price,desc);

        console.log("in obj");

        var oldobject = this.itemlist.filter(function(object){
            if(object.id==edititem.id){
                console.log(object);
                return object.id; 
            }
        })

        console.log("old object   "+oldobject[0].id);
        console.log("edited object    "+edititem.id);

        index = this.itemlist.findIndex(x=>x.id==oldobject[0].id);
        console.log(index);
        if(index!==-1){
            this.itemlist[index]=edititem;
        }

        console.log(this.itemlist);

    }

}