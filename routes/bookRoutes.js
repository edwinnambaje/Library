// routes/bookRoutes.js
const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookcontroller");

router.post("/create", bookController.createBook);
router.get("/all", bookController.getBooks);
router.get("/:id", bookController.getSingleBook);
module.exports = router;
