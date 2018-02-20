const f = require("./funciones");

function registrar_producto(req, res) {
    const NOMBRE = req.query.NOMBRE;
    const CATEGORIA = req.query.CATEGORIA;
    const TIENDA = req.query.TIENDA;
    const PRECIO_ESTIMADO = req.query.PRECIO_ESTIMADO;
    const UNIDAD = req.query.UNIDAD;
    const CANTIDAD = req.query.CANTIDAD;

    const producto = {
        NOMBRE,
        CATEGORIA,
        TIENDA,
        PRECIO_ESTIMADO,
        UNIDAD,
        CANTIDAD
    }

    f.registrar_producto(producto).then(() => {
        res.send({
            success: true,
            date: new Date()
        });
    }).catch(err => {
        res.send({
            error: true,
            info: err
        });
    });
}

function getproductos(req, res) {
    f.getproductos().then((productos) => {
        res.send({
            productos
        });
    }).catch(err => {
        res.send({
            error: true,
            inf: err
        });
    });
}

module.exports = {
    connect: f.connect,
    registrar_producto,
    getproductos
}