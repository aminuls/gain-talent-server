const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const classes = require('./data/courseCard.json')
const simplePackage = require('./data/simplPackages.json');

const port = process.env.PORT || 5000;

app.get("/", (req, res)=>{
   res.send("server is run");
})

app.get("/classes", (req, res)=>{
   res.send(classes);
})

app.get("/popular", (req, res)=>{
   const popular = classes.filter(p=>p.popular === true)
   res.send(popular);
})

app.get("/package", (req, res)=>{
   res.send(simplePackage);
})

app.listen(port, ()=>{
   console.log("server is running");
})