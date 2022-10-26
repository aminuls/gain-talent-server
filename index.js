const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const classes = require('./data/courseCard.json')

const port = process.env.PORT || 5000;

app.get("/", (req, res)=>{
   res.send("server is run");
})

app.get("/classes", (req, res)=>{
   res.send(classes);
})

app.listen(port, ()=>{
   console.log("server is running");
})