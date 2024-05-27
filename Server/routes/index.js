const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

router.use("/user", require("./user"));
router.use("/property", auth, require("./property"));

module.exports = router;