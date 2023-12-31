const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
const productRoutes = require('./routes/productRoutes');
const profileRoutes = require('./routes/profileRoutes');
const listRoutes = require('./routes/listRoutes');
const messageRoutes = require('./routes/messageRoutes');


app.use(express.static('public'));

const PORT = process.env.PORT || 5050;
app.use(express.json());


app.get('/', (_req, res) => res.send('Having a home is awesome!'));

app.use('/product', productRoutes);
app.use('/profile', profileRoutes);
app.use('/list', listRoutes);
app.use('/message', messageRoutes);


const server = app.listen(PORT, () => {
    const { address, port } = server.address();
    console.log(`Server listening on http://${address}:${port}`);
});
