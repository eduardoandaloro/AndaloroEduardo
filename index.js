

 
/*let productosPlacasVideo = [
    {nombre: "placa de video", precio: 22000},
    {nombre: "placa de video1", precio: 33000},
    {nombre: "placa de video2", precio: 45000},
    {nombre: "placa de video3", precio: 55000},
]
function operaciones(operacion){
    if(operacion === "encontrar"){
        return (producto) => productosPlacasVideo.find(x => x.nombre === producto)
    }
    if (operacion === "filtrar"){
        return (precio) => productosPlacasVideo.filter(x => x.precio > precio)
    }
}
let filtro = operaciones ("filtrar")
console.log(filtro(22000));
    
let productosProcesadores = [
    {nombre: "procesador", precio: 18.500},
    {nombre: "procesador1", precio: 22.750},
    {nombre: "procesador2", precio: 25.600},
    {nombre: "procesador3", precio: 17.350},
]
function comprar(comprar){
    if(comprar === "encontrar"){
        return (producto) => productosProcesadores.find(x => x.nombre === producto)
    }
    if (comprar === "filtrar"){
        return (precio) => productosProcesadores.filter(x => x.precio < precio)
    }
}

let filt = comprar ("filtrar")
console.log(filt(33000));*/


/*const formulario = document.getElementById("form")

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let mail = document.getElementById("email-form").value;
    console.log(mail);
})*/



/****localstorage y json****/
function cargaraLocalStorage() {
   const productosIniciales = [
        {id: 1, producto: "placa de video"},
        {id: 2, producto: "procesador"},
        {id: 3, producto: "memoria ram"},
        {id: 4, producto: "disco rigido"},
    
    ];

 localStorage.setItem("productos", JSON.stringify(productosIniciales));
}

cargaraLocalStorage()
function agregar(nombre){
    let listaProductos = JSON.parse(localStorage.getItem("productos"));
    let product = {id: listaProductos.length + 1, producto: nombre};

    listaProductos.push(product);
    localStorage.setItem("productos", JSON.stringify(listaProductos));
}

let nombre = prompt("por favor ingresa el producto");
agregar(nombre);

