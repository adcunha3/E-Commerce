require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

const userRoute = require("./routes/user.route");
const orderRoute = require("./routes/order.route");
const cartRoute = require("./routes/cart.route");
const productRoute = require("./routes/product.route");
const paymentRoute = require("./routes/payment.route");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());     
app.use(bodyParser.urlencoded({ extended: true }));

//Connect DB
mongoose.connect("mongodb://localhost:27017/ecomDB", {
dbName: 'ecomDB',    
useNewUrlParser: true});

app.use("/api/users", userRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);
app.use("/api/product", productRoute);
app.use("/api/payment", paymentRoute);

app.listen(3001, () => {console.log("Server running on port 3001")});