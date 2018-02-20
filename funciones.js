const db = require("./db");

function validar_producto(producto){
    return new Promise((resolve, reject) => {
        if(!producto.NOMBRE || !producto.CATEGORIA) {
            reject("Producto Inválido");
            return;
        }
        resolve(producto);
    });
}

function registrar_producto(producto) {
    return validar_producto(producto).then(() => {
        return db.insert_product(producto);
    });
}

function getproductos() {
    return db.getproductos();
}

module.exports = {
    connect: db.connect,
    registrar_producto,
    getproductos

}