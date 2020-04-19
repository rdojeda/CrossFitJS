/* Cargar datos*/
let nombre = prompt("Ingrese nombre del Producto");
let stock = prompt("Ingrese el stock");
let precio = prompt("Ingrese el precio del Producto");
let disponible = confirm("Está disponible el Producto");

/*validar datos*/
if (nombre == "" || nombre == null || nombre == undefined) {
    alert("ERROR...nombre NO puede quedar vacío");
}

if (isNaN(stock) || stock < 0 || stock > 1000) {
    alert("ERROR...ingrese un valor válido...");
}

if (isNaN(precio) || precio < 0) {
        alert("ERROR...ingrese un valor valido...")
    }

    /*Mostrar datos en el html*/
    let html;

    html = `
        <p style="color:blue"> El valor del producto es: ${precio} y el stock son ${stock} unidades.
       `; document.getElementById('texto').innerHTML = html;