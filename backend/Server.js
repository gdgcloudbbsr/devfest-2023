const express = require("express")
const cookieParser=require('cookie-parser');
const mongoose = require("mongoose")
require("dotenv").config()

const routes=require('./routes/Route');

const cors = require("cors")

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', // Update this with your frontend URL
    credentials: true,  // This allows credentials (cookies, etc) to be sent along with the request
  }));
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connection established successfully")).catch((err) => console.log(err))
app.use(cookieParser());
app.use("/api",routes);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("X-Powered-By")
    next();
  });

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`))

