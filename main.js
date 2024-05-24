// CLASS
class Producto {
constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
}
// Create some products
const producto1 = new Producto(1, "ferne", 10000, 500);
const producto2 = new Producto(2, "malibu", 15500, 350);
const producto3 = new Producto(3, "vodkita", 22000, 400);
const producto4 = new Producto(4, "tinto", 8000, 800);

const productos = [producto1, producto2, producto3, producto4];

const contenedorProductos = document.getElementById("contenedorProductos");
productos.forEach((producto) => {
const divProducto = document.createElement("div");
divProducto.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "gap-4");
divProducto.innerHTML = `
<img src="src/assets/${producto.id}.jpg" class="w-full h-48 object-cover mb-4 rounded-lg md:h-auto">  <div class="text-center md:text-left">
    <h3 class="text-xl font-bold mb-2"> ${producto.nombre}</h3>
    <p class="text-gray-600"> $${producto.precio}</p>
    <div class="mt-4">
    <div class="flex justify-center md:justify-start">
        <input type="number" class="w-24 border border-gray-300 rounded-md px-2 py-1 text-gray-700" min="1" value="1" id="cantidad${producto.id}">
        <button class="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" type="button" id="boton${producto.id}">Agregar al Carrito</button>
        </div>
    </div>
    </div>
`;
contenedorProductos.appendChild(divProducto);

  //Boton para agregar al carrito
const boton = document.getElementById(`boton${producto.id}`);
boton.addEventListener("click", () => {
    const cantidad = parseInt(
    document.getElementById(`cantidad${producto.id}`).value
    );
    agregarAlCarrito(producto.id, cantidad);
});
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const agregarAlCarrito = (id, cantidad) => {
const producto = productos.find((producto) => producto.id === id);
if (producto.stock > 0) {
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    const cantidadMaxima = Math.min(cantidad, producto.stock); // obtener cantidad maxima
    if (productoEnCarrito) {
    productoEnCarrito.cantidad += cantidadMaxima;
    } else {
    carrito.push({ ...producto, cantidad: cantidadMaxima });
    }
    producto.stock -= cantidadMaxima;
    actualizarCarrito();
    Swal.fire({
    position: "center",
    icon: "success",
    title: "Producto agregado al carrito",
    showConfirmButton: false,
    timer: 1300,
    });
} else {
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Lo sentimos, no hay mas stock de este producto.",
    });
}
};

//Carrito de compras

let contenedorCarrito = document.getElementById("contenedorCarrito");

function actualizarCarrito() {
  let contenido = "";
  carrito.forEach((producto) => {
    contenido += `
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">  <div class="w-full rounded-lg shadow-md bg-white">  <img src="src/assets/${producto.id}.jpg" class="w-full h-48 object-cover mb-4 rounded-lg" alt="${producto.nombre}">
        <div class="p-4">  <h3 class="text-xl font-bold mb-2"> ${producto.nombre}</h3>
          <p class="text-gray-600">$${producto.precio}</p>
          <p class="text-gray-600">Cantidad: ${producto.cantidad}</p>
          <button onClick="eliminarDelCarrito(${producto.id})" class="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Eliminar del Carrito
          </button>
        </div>
      </div>
    </div>
        `;
  });

  contenedorCarrito.innerHTML = contenido;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  calcularTotalCompra();
}

//Eliminar productos del carrito

const eliminarDelCarrito = (id) => {
  const productoEnCarrito = carrito.find((producto) => producto.id === id);
  productoEnCarrito.cantidad -= 1;
  if (productoEnCarrito.cantidad <= 0) {
    carrito.splice(carrito.indexOf(productoEnCarrito), 1);
  }
  const producto = productos.find((producto) => producto.id === id);
  producto.stock += 1;
  actualizarCarrito();
  Swal.fire({
    position: "center",
    icon: "warning",
    title: "El producto ha sido eliminado del carrito",
    showConfirmButton: false,
    timer: 1300,
  });
};

//Vaciar carrito

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
  carrito.forEach((productoEnCarrito) => {
    const producto = productos.find(
      (producto) => producto.id === productoEnCarrito.id
    );
    producto.stock += productoEnCarrito.cantidad;
  });
  carrito.splice(0, carrito.length);
  actualizarCarrito();
});

const comprarCarrito = document.getElementById("comprarCarrito");

comprarCarrito.addEventListener("click", () => {
  carrito.forEach((productoEnCarrito) => {
    const producto = productos.find(
      (producto) => producto.id === productoEnCarrito.id
    );
    producto.stock += productoEnCarrito.cantidad;
  });
  carrito.splice(0, carrito.length);
  Swal.fire({
    title: "compra exitosa!",
    text: "pronto te llegara tu pedido!",
    icon: "success",
    button: "finalizar!",
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  actualizarCarrito();
});

//Ver precio total

const totalCompra = document.getElementById("totalCompra");

const calcularTotalCompra = () => {
  let total = 0;
  carrito.forEach(async (producto) => {
    //Obtengo el precio actual en pesos argentinos
    let precioActual = producto.precio * producto.cantidad;

      total += precioActual;
      if (carrito.length === 0) {
        totalCompra.innerHTML = "$ 0";
      } else {
        totalCompra.innerHTML = "$ " + total;
      }
  });
  if (carrito.length === 0) {
    totalCompra.innerHTML = "$ 0";
  } else {
    totalCompra.innerHTML = "$ " + total;
  }
};

actualizarCarrito();


  // Add products to the cart
  carrito.agregarProducto(producto1);
  carrito.agregarProducto(producto2);

  // Display the products in the cart
  console.log("Productos en el carrito:");
  carrito.productos.forEach((producto) => {
    console.log(`${producto.nombre} - Precio: $${producto.precio}`);
  });
// Validate age
let edad = parseInt(prompt("ingrese su edad"));
edad = Number(edad);

if (edad >= 18) {
  alert("Puedes ingresar a la app");


  // Calculate and display the total of the purchase
  const totalCompra = carrito.calcularTotal();
  console.log(`Total de la compra: $${totalCompra}`);
} else {
  alert("Acceso denegado, eres menor de edad");
}
