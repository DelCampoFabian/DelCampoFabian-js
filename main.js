//CREACION DE OBJETOS
class Producto {
    constructor (nombre,tipo,precio,cantidad){
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = parseFloat (precio);
        this.cantidad = parseInt (cantidad)
    }
}
// DECLARACION DE OBJETOS
//INDUMENTARIA
const INDUMENTARIA1 =new Producto ("Conjunto Nike Hombre", "1 al 6", 12000, 1) 
const INDUMENTARIA2 =new Producto ("Conjunto Nike Mujer", "1 al 6", 12000, 1) 
const INDUMENTARIA3 =new Producto ("Zapatillas Hombre", "38 al 43", 15000, 1) 
const INDUMENTARIA4 =new Producto ("Zapatillas Mujer", "34 al 40", 12000, 1) 
const INDUMENTARIA5 =new Producto ("Camiseta Boca Juniors", "1 al 6", 7000, 1) 
//ACCESORIOS
const ACCESORIOS1 = new Producto ("Mancuernas", "10kg", 7500, 1) 
const ACCESORIOS2 = new Producto ("Barra", "Olimpica", 3500, 1) 
const ACCESORIOS3 = new Producto ("Banco", "Inclinado", 15500, 1) 
const ACCESORIOS4 = new Producto ("Discos", "5kg", 2500, 1) 
const ACCESORIOS5 = new Producto ("Pesas", "12.5kg", 4000, 1) 
//SNACKS
const SNACKS1 = new Producto ("Frutos Secos", "1kg", 1000, 1) 
const SNACKS2 = new Producto ("Cereal Mix", "200gr", 250, 1) 
const SNACKS3 = new Producto ("Galletas", "500gr", 300, 1) 
const SNACKS4 = new Producto ("Barritas", "50gr", 120, 1) 
const SNACKS5 = new Producto ("Almendras", "1kg", 1000, 1) 
//SUPLEMENTACION
const SUPLEMENTOS1 = new Producto ("Proteina Star Nutrition", "1kg", 2900, 1) 
const SUPLEMENTOS2 = new Producto ("Proteina Hardcore", "1kg", 1200, 1) 
const SUPLEMENTOS3 = new Producto ("Creatina Star Nutrition", "1kg", 1500, 1) 
const SUPLEMENTOS4 = new Producto ("Creatina Hardcore", "1kg", 1000, 1) 
const SUPLEMENTOS5 = new Producto ("BCAA  Star Nutrition", "1kg", 3900, 1) 


//VARIABLES
let cantidadProductos
let productos = []

let ingresar

let registroNombre
let registroTipo
let registroPrecio
let registroCantidad
let registrarTotal

let textoNombre
let textoTipo
let textoPrecio
let textoCantidad
let textoTotal
let total 


function registrarHtml (){
   registroNombre = document.getElementById("registro-nombre");
   registroTipo = document.getElementById("registro-tipo");
   registroPrecio = document.getElementById("registro-precio");
   registroCantidad = document.getElementById("registro-cantidad");
   registrarTotal= document.getElementById ("registro-total");

}

function ingresarTienda (){
   ingresar = prompt("Desea ingresar a la tienda?\n -si \n -no")
   if (ingresar == "si"){
      AgregarProductos()
   }else if(ingresar == "no"){
      alert ("Muchas Gracias");
   }else {
      alert ("Seleccion invalida. Recargue la p??gina")
   }
}

function registrarNombreProducto (){
   productos.forEach((producto) => {
      textoNombre = document.createElement("li")
      textoNombre.innerText = `${producto.nombre}`
      registroNombre.append(textoNombre)
   })
}
function registrarTipoProducto (){
   productos.forEach((producto) => {
      textoTipo = document.createElement("li")
      textoTipo.innerText = `${producto.tipo}`
      registroTipo.append(textoTipo)
   })
}
function registrarPrecioProducto (){
   productos.forEach((producto) => {
      textoPrecio = document.createElement("li")
      textoPrecio.innerText = `$${producto.precio}`
      registroPrecio.append(textoPrecio)
   })
}
function registrarCantidadProducto (){
   productos.forEach((producto) => {
      textoCantidad = document.createElement("li")
      textoCantidad.innerText = `${producto.cantidad}`
      registroCantidad.append(textoCantidad)
   })
}

//AGREGAR PRODUCTOS

function AgregarProductos () {
   let categorias = parseInt(prompt ("Te presentamos las siguientes categorias:\n 1- Indumentaria \n 2- Accesorios \n 3- Suplementos \n 4- Snacks"));

    if (categorias === 1){
        cantidadProductos = parseInt(prompt("??Cuantos productos pretende llevar?"))
        for (let i = 0; i < cantidadProductos; i++){
            let indumentaria = prompt("a- " + INDUMENTARIA1.nombre + " $" + INDUMENTARIA1.precio + "\nb- " + INDUMENTARIA2.nombre + " $" + INDUMENTARIA2.precio +  "\nc- " + INDUMENTARIA3.nombre + " $" + INDUMENTARIA3.precio +   "\nd- " + INDUMENTARIA4.nombre + " $" + INDUMENTARIA4.precio + "\ne- " + INDUMENTARIA5.nombre + " $" + INDUMENTARIA5.precio + "\n Presione cualquier otra letra para volver al inicio" )
            if (indumentaria === "a"){
                productos.push(INDUMENTARIA1)
            }else if (indumentaria === "b"){
                productos.push(INDUMENTARIA2)
             }else if (indumentaria === "c"){
                productos.push(INDUMENTARIA3)
             }else if (indumentaria === "d"){
                productos.push(INDUMENTARIA4)
             }else if (indumentaria === "e"){
                productos.push(INDUMENTARIA5)
             }else if ((indumentaria != "a") && (indumentaria != "b") && (indumentaria != "c") && (indumentaria != "d") && (indumentaria != "e")){
               alert ("Selecci??n invalida.")
               break
             }
         }
    }else if(categorias === 2 ){
        cantidadProductos = parseInt(prompt("??Cuantos productos pretende llevar?"))
        for (let i = 0; i < cantidadProductos; i++){
            let accesorios = prompt("a- " + ACCESORIOS1.nombre + " $" + ACCESORIOS1.precio + "\nb- " + ACCESORIOS2.nombre + " $" + ACCESORIOS2.precio +  "\nc- " + ACCESORIOS3.nombre + " $" + ACCESORIOS3.precio +   "\nd- " + ACCESORIOS4.nombre + " $" + ACCESORIOS4.precio + "\ne- " + ACCESORIOS5.nombre + " $" + ACCESORIOS5.precio + "\n Presione cualquier otra letra para volver al inicio" )
            if (accesorios === "a"){
                productos.push(ACCESORIOS1)
            }else if (accesorios === "b"){
                productos.push(ACCESORIOS2)
             }else if (accesorios === "c"){
                productos.push(ACCESORIOS3)
             }else if (accesorios === "d"){
                productos.push(ACCESORIOS4)
             }else if (accesorios === "e"){
                productos.push(ACCESORIOS5)
             }else if ((accesorios != "a") && (accesorios != "b") && (accesorios != "c") && (accesorios != "d") && (accesorios != "e")){
                alert ("Seleccion invalida.")
                break
             }
         }
    }else if(categorias === 3 ){
        cantidadProductos = parseInt(prompt("??Cuantos productos pretende llevar?"))
        for (let i = 0; i < cantidadProductos; i++){
            let suplementos = prompt("a- " + SUPLEMENTOS1.nombre + " $" + SUPLEMENTOS1.precio + "\nb- " + SUPLEMENTOS2.nombre + " $" + SUPLEMENTOS2.precio +  "\nc- " + SUPLEMENTOS3.nombre + " $" + SUPLEMENTOS3.precio +   "\nd- " + SUPLEMENTOS4.nombre + " $" + SUPLEMENTOS4.precio + "\ne- " + SUPLEMENTOS5.nombre + " $" + SUPLEMENTOS5.precio + "\n Presione cualquier otra letra para volver al inicio" )
            if (suplementos === "a"){
                productos.push(SUPLEMENTOS1)
            }else if (suplementos === "b"){
                productos.push(SUPLEMENTOS2)
             }else if (suplementos === "c"){
                productos.push(SUPLEMENTOS3)
             }else if (suplementos === "d"){
                productos.push(SUPLEMENTOS4)
             }else if (suplementos === "e"){
                productos.push(SUPLEMENTOS5)
             }else if ((suplementos != "a") && (suplementos != "b") && (suplementos != "c") && (suplementos != "d") && (suplementos != "e")){
               alert ("Seleccion invalida.")
               break
             }
         }
    }else if(categorias === 4 ){
        cantidadProductos = parseInt(prompt("??Cuantos productos pretende llevar?"))
        for (let i = 0; i < cantidadProductos; i++){
            let snacks = prompt("a- " + SNACKS1.nombre + " $" + SNACKS1.precio + "\nb- " + SNACKS2.nombre + " $" + SNACKS2.precio +  "\nc- " + SNACKS3.nombre + " $" + SNACKS3.precio +   "\nd- " + SNACKS4.nombre + " $" + SNACKS4.precio + "\ne- " + SNACKS5.nombre + " $" + SNACKS5.precio + "\n Presione cualquier otra letra para volver al inicio" )
            if (snacks === "a"){
                productos.push(SNACKS1)
            }else if (snacks === "b"){
                productos.push(SNACKS2)
             }else if (snacks === "c"){
                productos.push(SNACKS3)
             }else if (snacks === "d"){
                productos.push(SNACKS4)
             }else if (snacks === "e"){
                productos.push(SNACKS5)
             }else if ((snacks != "a") && (snacks != "b") && (snacks != "c") && (snacks != "d") && (snacks != "e")){
               alert ("Seleccion invalida.")
               break
             }
         }
    }
   total = productos.reduce ((acumulador,elemento) => acumulador + elemento.precio, 0)    
}  

function mostrarTotal(){
   if( (total != undefined) && (cantidadProductos <= productos.length) ){
      textoTotal = document.createElement("li")
      textoTotal.innerText = `$${total}`
      registrarTotal.append(textoTotal);
   }
}
 
   
function main (){
   ingresarTienda()
   registrarHtml ()
   registrarNombreProducto ()
   registrarTipoProducto ()
   registrarPrecioProducto ()
   registrarCantidadProducto ()
   mostrarTotal()
}

main()







   
