const express=require("express");
const { blog_delete, blog_index, blog_create_post, blog_details, blog_create_get } = require("../controllers/blogController");


const router=express.Router();

router.get("/",blog_index);

router.post("/",blog_create_post);

router.get("/create",blog_create_get);

router.get("/:id",blog_details);

router.delete("/:id",blog_delete);



module.exports=router;