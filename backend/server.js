// backend/server.js
const express = require('express');
const connectDB = require('./config/db');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
require('dotenv').config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
