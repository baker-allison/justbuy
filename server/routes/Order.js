const express = require("express");
const {get_orders, checkout} = require( "../controllers/orderControllers.js");


const router = express.Router();

router.get("/order/:id", get_orders);
router.post("/order/:id", checkout);

module.exports = router;


