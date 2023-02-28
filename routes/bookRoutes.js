// routes/bookRoutes.js
const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookcontroller");

router.post("/create", bookController.createBook);
router.get("/all", bookController.getBooks);
router.get("/user/:id", bookController.getSingleUserBook);
module.exports = router;
