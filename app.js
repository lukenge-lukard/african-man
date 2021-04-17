const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3800;

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render("index");
});
app.get("/about", (req, res)=>{
    res.render("about");
});
app.get("/contact", (req, res)=>{
    res.render("contact");
});
app.get("/team", (req, res)=>{
    res.render("team");
});
app.get("/donate", (req, res)=>{
    res.render("donate");
});

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`));