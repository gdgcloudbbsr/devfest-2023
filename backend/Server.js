const express = require("express")
const cookieParser=require('cookie-parser');
const mongoose = require("mongoose")
require("dotenv").config()

const routes=require('./routes/Route');

const cors = require("cors")

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connection established successfully")).catch((err) => console.log(err))
app.use(cookieParser());
app.use("/api",routes);

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`))

