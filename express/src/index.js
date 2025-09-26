
import express from 'express';
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
app.use(express.static(path.join(__dirname, 'public')));

// //ruta de ejemplo
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

//ruta de ejemplo con EJS
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Bienvenido a mi proyecto con express' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

