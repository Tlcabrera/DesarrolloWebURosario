
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

//const express = require('express');

//inicializamos express
const app = express();
//definimos el puerto
const PORT=3000;
//middleware para parsear JSON
app.use(express.json());
    //Motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');

//middleware para archivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../public")));


// //ruta de ejemplo
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

//ruta de ejemplo con EJS
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Bienvenido a mi proyecto con express' });
});

app.get('/stop', (req, res) => {
  res.render('stop', { titulo: 'Stop' });
});

app.get('/contactenos', (req, res) => {
  res.render('form');
});
app.get("/home", (req, res) => res.render("home"));
app.get("/portafolio", (req, res) => res.render("portafolio"));
app.get("/contact", (req, res) => res.render("contact"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

