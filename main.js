
/// CONSTANTES /////////////////////////////////////////////////////////////////////////////
const iva = x => x * 0.21 

/// CLASES ////////////////////////////////////////////////////////////////////////////////

class Producto{
    constructor(nombre, precio) {
      this.nombre = nombre; // Propiedad para almacenar el nombre del producto
      this.precio = precio; // Propiedad para almacenar el precio del producto
    }
}

class Carrito {
    constructor() {
      this.productos = []; // Array para almacenar los productos del carrito
    }
}
/// DECLARACIONES /////////////////////////////////////////////////////////////////////////
//validacion de edad

let edad = parseInt(prompt ("ingrese su edad"));
edad = Number(edad);

let resultado = 0;

  // objeto de tipo Carrito
  const carrito = new Carrito(); // nuevo carrito de compras

  //  algunos productos
let producto = class {
    constructor(nombre, precio) {
        this.nombre = vino;
        this.precio = 1000;
    }
};
console.log(producto.name); // Salida: "Rectangulo"
  const producto1 = new Producto("fernet", 2000); // Crear un nuevo objeto Producto
  const producto2 = new Producto("ron", 3500); // Crear otro objeto Producto

/// PROTOTIPADOS ///////////////////////////////////////////////////////////////////////////////////



/// LLAMADOS ////////////////////////////////////////////////////////////////
if (edad >= 18){
    alert("Puedes ingresar a la app");
} else {
    alert ("Acceso denegado, eres menor de edad")
}


  // Agregar productos al carrito
  carrito.agregarProducto(producto1); // Agregar producto1 al carrito
  carrito.agregarProducto(producto2); // Agregar producto2 al carrito

  // Mostrar los productos en el carrito
console.log("Productos en el carrito:");
carrito.productos.forEach((producto) => {
    // Iterar sobre los productos en el carrito
    console.log(`${producto.nombre} - Precio: $${producto.precio}`); // Mostrar el nombre y precio de cada producto
});

  // Calcular y mostrar el total de la compra
  const totalCompra = carrito.calcularTotal(); // Calcular el total de la compra
  console.log(`Total de la compra: $${totalCompra}`); // Mostrar el total de la compra



/// FUNCIONES ////////////////////////////////////////////////////////////////////////////////
// switch es  bucle condicional
// for es ciclo
// funcion para sumar dos numeros
function sumar(numUno,numDos)
{
    resultado = numUno + numDos
}
//funcion para mostrar algo por consola
function mostrar(mensaje)
{
    console.log(mensaje)
}

function agregarProducto(producto) {
    this.productos.push(producto); // Método para agregar un producto al carrito
}

function calcularTotal() {
    let total = 0; // Inicializar el total en 0
this.productos.forEach((producto) => {
      // Iterar sobre los productos en el carrito
      total += producto.precio; // Sumar el precio de cada producto al total
});
    return total; // Devolver el total de la compra
}












