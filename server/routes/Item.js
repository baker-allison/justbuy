
const express = require('express');
const {get_items, post_item, update_item, delete_item, search_item, get_Category } = require("../controllers/itemControllers.js");
const router = express.Router();


router.get("/items", get_items);
router.get("/search",  search_item);
router.get("/category/:id",  get_Category);
router.put("/items/:id", update_item);
router.delete("/items/:id", delete_item);

router.post("/items", post_item );



module.exports =  router;

