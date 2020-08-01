const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")
const route = require("./Routes/index")
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

///Database connection and Model///
mongoose.connect("mongodb://localhost:27017/keeperDB", {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/', route)

app.listen(port,()=>{
    console.log("This server is running on port",port);
})