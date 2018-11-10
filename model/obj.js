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

    deleteProduct : function(id){
        this.itemlist = this.itemlist.filter(function(obj){
            return obj.id != id;
        });
    },

    editProduct : function(id){
        this.itemlist.map(function(dato){
            if(dato.id == id){
               // dato.Precio = precioDescuento;
            }

            return dato;
        });


    },

        searchItem : function(id) {

           return this.itemlist.find(function (dato) {
                if (dato.id == id) {
                    return dato;
                }
            });
        }


}

