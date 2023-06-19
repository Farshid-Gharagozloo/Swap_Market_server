const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


const productRoutes = require('./routes/productRoutes');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';
app.use(express.json());



app.get('/', (_req, res) => res.send('Having a home is awesome!'));

app.use('/product', productRoutes);

const server = app.listen(PORT, HOST, () => {
    const { address, port } = server.address();
    console.log(`Server listening on http://${address}:${port}`);
});
