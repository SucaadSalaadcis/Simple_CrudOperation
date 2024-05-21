const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors());


mongoose.connect("mongodb://localhost:27017/practice").then(()=> {
    console.log("Database Connected ...")
}).catch((err) => console.log(err))

const student = require("./routes/studentRoute");
app.use(student);



app.listen(3000, () => console.log("server started successfully..."));