window.addEventListener('DOMContentLoaded',init);
var prodNombre;
var proPrecio;
var prodDesc;

function getId(nombre){
    return document.getElementById(nombre);
}

function init(e){
    // Obtenemos el control de los campos del Formulario
    prodNombre = getId('caja_1');
    proPrecio = getId('caja_2');
    prodDesc = getId('caja_3');
    //Tenemos el control del boton add
    botonAdd = getId('add');
    botonAdd.addEventListener('click',addItem,false);

}
function addItem(){
    obj.addProduct(prodNombre.value,proPrecio.value,prodDesc.value);
    console.log(obj.itemlist);
    printProduct(obj.itemlist);

    document.myform.reset();
    prodNombre.focus();
}

function printProduct(list){
    var tabla = document.getElementById("tbListPers");
    //tabla.innerHTML="";
    // console.log(list);

    list.forEach(function(object){

        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerHTML = object.id;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.innerHTML = object.name;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.innerHTML = object.price;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.innerHTML = object.desc;
        tr.appendChild(td);
        var td = document.createElement("td");
        var button = document.createElement("button");
        button.type="button";
        button.innerText = "Eliminar";
        tr.appendChild(button);
        td.innerHTML = object.desc;
        tr.appendChild(td);

        tabla.appendChild(tr);
        //li.addEventListener("click",markProduct);
    })
}