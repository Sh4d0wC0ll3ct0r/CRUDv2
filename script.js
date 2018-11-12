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
    eventos();

}
function eventos(){

    document.addEventListener('click',function(e){
        // Fixed

        if(e.target.tagName.toLowerCase() === 'button'){
            if(e.target.id.toLowerCase() === 'add'){
                console.log(e.target.id);
                addItem();
            }
            if(e.target.id.toLowerCase() === 'update'){
                console.log(e.target.id);
                updateItem();
            }

            if(e.target.name === 'remove'){
                removeItem(e.target.id);
            }
        }
    })
}
function addItem(){
    obj.addProduct(prodNombre.value,proPrecio.value,prodDesc.value);
    //console.log(obj.itemlist);
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
       /* button.addEventListener('click',function (){
            editItem(object.id);
        },false);*/
        button.className="btn btn-primary glyphicon glyphicon-edit";
        td.appendChild(button);
        tr.appendChild(td);
        //Boton Eliminar
        var button = document.createElement("button");
        button.type="button";
        button.id= object.id;
        button.name = "remove";
      /*  button.addEventListener('click',function (){
            removeItem(object.id);
        },false);*/
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
    document.getElementById("add").removeEventListener("click", addItem,false);
    document.getElementById("add").setAttribute("id","update");
    document.getElementById("update").innerText = "Guardar";
    document.getElementById("update").addEventListener("click",function(){
        updateItem(id);
    },false);
 }



function updateItem(id){

    obj.editProduct(id,prodNombre.value,proPrecio.value,prodDesc.value);
    document.getElementById("update").removeEventListener("click",function(){
        updateItem(id);
    },false);
    document.getElementById("update").setAttribute("id","add");
    document.getElementById("add").innerText = "Add";
    document.getElementById("add").addEventListener('click',addItem,false);
    document.myform.reset();
    printProduct(obj.itemlist);
}


function removeItem(id){
    obj.deleteProduct(id);
    printProduct(obj.itemlist);
}