import  express from "express";
import fs from "fs"   //interactuar sistema de archivos
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
const port = 3000;

//funcion leer datos
const LeerDatos = () => {
  try{
  const data=fs.readFileSync("./db.json");
  return JSON.parse(data);
  } catch (error){
    console.log(`Error al leer datos >> ${error}`);
  }
}

//funcion escribir datos
const escribirDatos = (data) => {
  try{
    fs.writeFileSync("./db.json", JSON.stringify(data));
  } catch (error){
    console.log(error);
  }
} 

app.get("/", (req, res) => {
  res.send("Bienvenido a mi Proyecto de Libros");
});

app.get("/libros", (req, res) =>{
  const data = LeerDatos();
  res.json(data.libros)
})

//libro por id
app.get("/libros/:id", (req,res) => {
  const data = LeerDatos();
  const id = parseInt(req.params.id);
  const libro = data.libros.find((libro) => libro.id === id)
  res.json(libro);
})

//crear un libro
app.post("/libros", (req,res) => { 
  const data = LeerDatos();
  const body = req.body;
  const nuevoLibro = {
    id: data.libros.length + 1,
    ...body
  };
  data.libros.push(nuevoLibro);
  escribirDatos(data);
  res.json(nuevoLibro); //mostrar lo nuevo
});

//put
app.put("/libros/:id", (req,res) => {
  const data = LeerDatos();
  const body = req.body;
  const id = parseInt(req.params.id);
  const indiceLibro = data.libros.findIndex((libro) => libro.id === id);
  data.libros[indiceLibro] = {
    ...data.libros[indiceLibro],
    ...body
  };
  escribirDatos(data);
  res.json({ mensaje: "Libro Actualizado con éxito" });
});

//DELETE
app.delete("/libros/:id", (req,res) =>{
  const data = LeerDatos();
  const id = parseInt(req.params.id);
  const indiceLibro = data.libros.findIndex
  ((libro) => libro.id === id);
  data.libros.splice(indiceLibro, 1); //eliminar por pocicion
  escribirDatos(data);
  res.json({mensaje: `registro en la posicion ${indiceLibro}
  elminado correctamente`})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});