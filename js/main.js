const productos = [
    {nombre: "fideos", precio: 1000},
    {nombre: "arroz", precio: 500},
    {nombre: "cerveza", precio: 1500},
    {nombre: "fernet", precio: 2500},
    {nombre: "yerba", precio: 1250}
]

let carrito = []

let selecion = prompt("Desea comprar algun producto? SI o NO");
while(selecion != "si" && selecion != "no"){
alert("Ingrese SI o NO")
selecion = prompt("Hola desea comprar algo? SI o NO")
}


if(selecion == "si"){
    alert("A continuación nuestra lista de productos")
    let todolosProductos = productos.map((producto ) => producto.nombre + " " + producto.precio + "$")
    alert(todolosProductos.join("-"))
}else if (selecion == "no"){
    alert("Gracias por venir, hasta luego!!!");
}

while(selecion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0
    if(producto == "fideos" || producto == "arroz" || producto == "cerveza" || producto == "fernet" || producto == "yerba" ){
        switch(producto){
            case "fideos":
            precio = 1000;
            break;
            case "arroz":
            precio = 500;
            break;
            case "cerveza":
            precio = 1500;
            break;
            case "fernet":
            precio = 2500;
            break;
            case "yerba":
            precio = 1250;
            break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar "))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert("No tenemos ese producto")
    }
    selecion = prompt("Desea seguir comprando?");
    while(selecion === "no"){
        alert("Gracias por la compra, hasta pronto!!!")
    }
    
    function cacularTotalGastos(){
        let total = carrito.reduce((acumulador, gasto) => acumulador + gasto.precio, 0);
        return total;
    }
        
        console.log("Total gastos", cacularTotalGastos());
    
}
