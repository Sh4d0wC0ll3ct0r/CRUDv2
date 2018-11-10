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
    tabla.innerHTML="";
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
        //Boton Editar
        var button = document.createElement("button");
        button.type="button";
        button.id= object.id;
        button.addEventListener('click',function (){
            editItem(object.id);
        },false);
        button.className="btn btn-primary glyphicon glyphicon-edit";
        td.appendChild(button);
        tr.appendChild(td);
        //Boton Eliminar
        var button = document.createElement("button");
        button.type="button";
        button.id= object.id;
        button.addEventListener('click',function (){
            removeItem(object.id);
        },false);
        button.className="btn btn-danger glyphicon glyphicon-trash";
        td.appendChild(button);
        tr.appendChild(td);
        tabla.appendChild(tr);
    });
}
function editItem(id){
    var objItem = obj.searchItem(id);

    document.getElementById("caja_1").value = objItem.name;
    document.getElementById("caja_2").value = objItem.price;
    document.getElementById("caja_3").value = objItem.desc;

    //Aqui falta cambiar el boton de Añadir a Guardar y poner un nuevo evento con la funcion updateItem.
 }



function updateItem(){
    console.log(id);
    obj.editProduct(id);
    printProduct(obj.itemlist);
}


function removeItem(id){
    obj.deleteProduct(id);
    printProduct(obj.itemlist);
}