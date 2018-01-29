const sql = require("mssql");
const config = require("./db.config.json");

function connect() {
    return new Promise((resolve, reject) => {
        sql.connect(config, err => {
            if(err){
                reject("Error en conexión\n" + err);
                return;
            }
            resolve("Conexión establecida");
        })
    });
}

function insert_product(producto){
     return new Promise((resolve, reject) => {
         const ps = new sql.PreparedStatement();

         ps.input("NOMBRE", sql.NVarChar);
         ps.input("CATEGORIA", sql.Int);
         ps.input("TIENDA", sql.NVarChar);
         ps.input("PRECIO_ESTIMADO", sql.Decimal);
         ps.input("UNIDAD", sql.NVarChar);
         ps.input("CANTIDAD", sql.Decimal);

         const query = `INSERT INTO PRODUCTO
                        VALUES (
                            @NOMBRE,
                            @CATEGORIA,
                            @TIENDA,
                            @PRECIO_ESTIMADO,
                            @UNIDAD,
                            @CANTIDAD,
                            'Pendiente',
                            GETDATE()
                        )`;
        ps.prepare(query, err => {
            if(err){
                reject("Error crear producto faltante\n" + err);
                return;
            }
            const data = {
                NOMBRE: producto.NOMBRE,
                CATEGORIA: producto.CATEGORIA,
                TIENDA: producto.TIENDA,
                PRECIO_ESTIMADO: producto.PRECIO_ESTIMADO,
                UNIDAD: producto.UNIDAD,
                CANTIDAD: producto.CANTIDAD
            };
            
            ps.execute(data, (err, result) => {
                if(err){
                    reject("Error crear producto faltante\n" + err);
                    return;
                }
                ps.unprepare(() => {
                    resolve(result);
                });
            });
        });
     });
}

module.exports = {
    connect,
    insert_product
}