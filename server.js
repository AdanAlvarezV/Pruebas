const http = require("http");
const express = require("express");
const router = require("./router");

const app = express();

app.get("/usuario/producto/registrar" , router.registrar_producto);
app.get("/usuario/producto/getproductos", router.getproductos);
//app.get("/usuario/producto/editar", router.editar_producto);

app.get("/", (req, res) => {
    res.send("HOLA");
})

router.connect().then(() => {
    http.createServer(app).listen(3000, () => {
        console.log("Servidor inciado en http://localhost:3000/");
    });
}).catch(err => {
    console.log(`${err}`);
})