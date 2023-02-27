// routes/bookRoutes.js
const express = require("express");
const router = express.Router();
const authorController = require("../controller/authorController");

router.post("/create", authorController.createAuthor);
router.get("/all", authorController.getAll);
module.exports = router;
