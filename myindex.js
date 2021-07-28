const express = require("express");
const hbs = require("hbs");
const path = require("path");

const port = process.env.PORT || 3000;

const PartialPath = path.join(__dirname,"./partial");
const PublicPath = path.join(__dirname,"./public");

app = express()

app.set("view engine","hbs");
app.use(express.static(PublicPath));
hbs.registerPartials(PartialPath);

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("*",(req,res)=>{
    res.send("ERROR CODE 404")
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
})
