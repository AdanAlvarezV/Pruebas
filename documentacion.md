# Sistema De Casa

Este sistema se va a encagar de administrar todos los productos que hacen falta en la casa.

## Actores

* __Producto__: Todos los datos con respecto a los productos

* __Gasto__: Cosas en que se gasta que no sea de mandado. (ej. papitas, cerveza, gasolina)

* __Usuario__: Persona encargada de capturar todos los productos que se terminan o que hacen falta en casa, dividiendo en categorías los productos, como por ejemplo, de cocina, de baño, para cuarto, para patio, personales etc.).

## Datos

### Categoría

Datos de tabla de categoría:

~~~json
{
    "ID": "1",
    "Nombre": "Cocina/Baño/Luz/Necesidades para el hogar/Herramienta",
    "Tipo": "Mandado/Gustos/Recibos/Hogar/Deseos"
}
~~~

### Producto

Datos del producto:

~~~json
{
    "ID": "1",
    "Nombre": "Jabón para manos",
    "Cateogría": "Baño",
    "Tienda": "Al super",
    "Precio_Estimado": "10",
    "Unidad": "Unidad",
    "Cantidad": "1",
    "Status": "Pendiente",
    "Fecha": "2018/01/28"
}
~~~

### Gasto

Datos de gastos:

~~~json
{
    "ID": "1",
    "Nombre": "Papitas/Luz",
    "Categoría": "Gustos/Recibos",
    "Costo": "12",
    "Status": "Pendiente",
    "Fecha": "2018/01/28"
}
~~~

### Roles

Datos de roles:

~~~json
{
    "ID": "1",
    "Nombre": "Administrador"
}
~~~

### Usuarios

Datos del usuario:

~~~json
{
    "ID": "1",
    "usuario": "Consuelo",
    "password": "♀:V}ÌGùÖH—˜‡™‡†*$%%&!#",
    "Rol": "Administrador",
    "ultimo_acceso": "2018/01/28"
}
~~~

## Operaciones

### Usuario

* __Registrar Productos Faltantes__: Registrar en la plataforma, los productos que hacen falta en la casa categorizándolos.

* __Registrar Necesidades__: Registrar en la plataforma, las cosas que hacen falta en la casa, o cuentas pendientes por pagar para la casa.

* __Registrar Deseos__: Registrar cosas que se desea tener.

* __Consultar Lista de Cosas faltantes__: Una consulta en donde el sistema mostrará todos los productos que hacen falta del mandado que se fueron registrando en el transcurso del periodo de pago.

* __Consultar Lista de Cosas Necesarias__: Una consulta en donde el sistema mostrará cosas que se necesitan en casa aparte del mandado. (ej. Ahorrador de espacios, espejo para baño, microondas, etc.).

* __Consultar lista de deseos__: Una consulta que devuelva la lista de cosas que se desea tener(ej. caja de herramienta, pantalla, xbox, etc.).

## Base de datos

Tabla **CATEGORIA**

~~~mssql
CREATE TABLE CATEGORIA
(
    ID INT PRIMARY KEY IDENTITY(1,1),
    NOMBRE VARCHAR(50),
    TIPO VARCHAR(50) 

)
~~~

Tabla **PRODUCTO**

~~~mssql
CREATE TABLE PRODUCTO
(
    ID INT PRIMARY KEY IDENTITY(1,1),
    NOMBRE VARCHAR(50),
    CATEGORIA INT,
    TIENDA VARCHAR(50),
    PRECIO_ESTIMADO DECIMAL(10,2),
    UNIDAD VARCHAR(20),
    CANTIDAD DECIMAL(10,2),
    STATUS VARCHAR(20),
    FECHA DATETIME,
    FOREIGN KEY (CATEGORIA) REFERENCES CATEGORIA (ID)
)
~~~

Tabla **GASTO**

~~~mssql
CREATE TABLE GASTO
(
    ID INT PRIMARY KEY IDENTITY(1,1),
    NOMBRE VARCHAR(50),
    CATEGORIA INT,
    COSTO DECIMAL(10,2),
    STATUS VARCHAR(50),
    FECHA DATETIME,
    FOREIGN KEY (CATEGORIA) REFERENCES CATEGORIA (ID)
)
~~~

Tabla **ROL**

~~~mssql
CREATE TABLE ROL
(
    ID INT PRIMARY KEY IDENTITY(1,1),
    NOMBRE VARCHAR (20)
)
~~~

Tabla **USUARIO**

~~~mssql
CREATE TABLE USUARIO
(
    ID INT PRIMARY KEY IDENTITY(1,1),
    USUARIO VARCHAR(50),
    PASSWORD VARCHAR(32),
    ROL INT,
    ULTIMO_ACCESO DATETIME,
    FOREIGN KEY (ROL) REFERENCES ROL (ID)
)
~~~

## Desarrollo

