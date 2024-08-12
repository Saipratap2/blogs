const express=require("express");

const mongoose=require("mongoose");

const app=express();

const blogRoutes=require("./routes/blogRoutes");
const { render } = require("ejs");

//connect to MongoDB
const dbURI="mongodb+srv://chennaharsha11403:Harsha114@nodejs.v3ywrjs.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));


//register view engine 
app.set("view engine","ejs");

//static middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));

//routes
app.get("/",(req,res) =>{
    
    //res.sendFile('./views/index.html',{root : __dirname});
    res.redirect("/blogs");
    
});

app.get("/about",(req,res) =>{
    //res.sendFile('./views/about.html',{root : __dirname});
    res.render("about",{title: "About"});
});

//blog-route
app.use("/blogs",blogRoutes);

//404 page
app.use((req,res) =>{
    //res.status(404).sendFile("./views1/404-1.html",{root:__dirname});
    res.status(404).render("404",{title: "404"});
})
