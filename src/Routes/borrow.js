const express = require("express");
const router = express.Router();

const bookController = require("../Controllers/book");
// const bookController = require("../Controllers/borrow");

router.get("/", bookController.getBorrow);
router.post("/", bookController.postBorrow);

module.exports = router;
