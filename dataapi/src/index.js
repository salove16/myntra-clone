const express=require("express");
var cors = require('cors')

const app=express();



app.use(cors());


const beautycontroller=require("./controllers/beauty.controller");

const homelivingcontroller=require("./controllers/homeliving.controller");

const homescontroller=require("./controllers/homes.controller");

const kidscontroller=require("./controllers/kids.controller");

const menscontroller=require("./controllers/mens.controller");

const searchcontroller=require("./controllers/search.controller");

const womenscontroller=require("./controllers/womens.controller")

const cathomelivingcontroller=require("./controllers/cathome.controller");

app.use(express.json());

app.use("/beautyproductdata",beautycontroller);

app.use("/cathomelivingdata",cathomelivingcontroller);

app.use("/homelivingdata",homelivingcontroller);

app.use("/homesdata",homescontroller);

app.use("/kidsdata",kidscontroller);

app.use("/mensdata",menscontroller);

app.use("/searchpagedata",searchcontroller);

app.use("/womensdata",womenscontroller);



module.exports=app;