//const express = require('express')
import express from 'express';
import { registerRoutes } from './routes';
const app = express()
const port = 3000

registerRoutes(app);

app.get('/', (req, res) => res.send('Bye World!'))

app.listen(port, () => console.log(`Prueba asdf app listening at http://localhost:${port}`))
