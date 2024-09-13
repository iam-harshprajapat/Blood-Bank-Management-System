const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const { connect } = require('mongoose');
const connectDB = require('./config/db');

//dotenv config
dotenv.config();

//Mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//route
app.use('/api/v1/test', require('./routes/testRoute'));
app.use('/api/v1/auth', require('./routes/auth'))
app.use('/api/v1/inventory', require('./routes/inventoryRoute'));
app.use('/api/v1/analytics', require('./routes/analyticsRoutes'));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Node Server Running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}...`.bgBlue.white
    );
});
