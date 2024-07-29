const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});

const usersRouter = require('./routes/user');
const productsRouter = require('./routes/products');

const app = express();

//Routes.
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION)
        .then(connection => console.log('Connected to DB'))
        .catch(err =>     
            (console.error('Error de conexión a MongoDB:', err.message)));

app.use('/api/v1/users',usersRouter);
app.use('/api/v1/products',productsRouter);

//Add listener

app.listen(3500, () => {
    console.log('Listening on port 3500');
})