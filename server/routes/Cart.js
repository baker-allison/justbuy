const express = require("express");


const {get_cart_items, add_cart_item} = require("../controllers/cartControllers.js")

const {delete_item} = require("../controllers/itemControllers.js")
const router = express.Router();

router.get("/cart/:id", get_cart_items);
router.post("/cart/:id", add_cart_item );
router.delete("/cart/:userId/itemId", delete_item);



module.exports = router;




