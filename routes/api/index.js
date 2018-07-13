const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/question", bookRoutes);

module.exports = router;

