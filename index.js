import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import usersRoutes from "./routes/usersRoutes.js";
import { get404 } from "./controllers/errorController.js"                               
const PORT = 3000;

const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {  
  res.sendFile(path.join(__dirname, "public/html/formInicioS.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/formRegistro.html"));
});


app.use(express.static(path.join(__dirname, "public")));

app.use("/users",usersRoutes);

app.use(get404);

app.use ((err, req, res, next)=>{
   const statusCode = err.statusCode || 500;
   res.status(statusCode).json({
      status: 'error',
      message: err.message || "Algo salió mal ..."
   })
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});