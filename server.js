const express = require('express');
const app = express();
const path = require('path');
const multer  = require('multer');
const cors = require('cors');
require('dotenv').config();

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         console.log(__dirname);
//         cb(null, path.join(__dirname, './public/images'))
//     },

//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });

app.use(cors());
const productRoutes = require('./routes/productRoutes');
const profileRoutes = require('./routes/profileRoutes');
const listRoutes = require('./routes/listRoutes');

app.use(express.static('public'));

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';
app.use(express.json());


app.get('/', (_req, res) => res.send('Having a home is awesome!'));

// app.post("/upload", upload.single('image') ,(req, res) => {
//     res.send("image uploaded");
// })
app.use('/product', productRoutes);
app.use('/profile', profileRoutes);
app.use('/list', listRoutes);

const server = app.listen(PORT, HOST, () => {
    const { address, port } = server.address();
    console.log(`Server listening on http://${address}:${port}`);
});
