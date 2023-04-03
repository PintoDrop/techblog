const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homePage");

router.use("/", homePage);
router.use("/api", apiRoutes);

module.exports = router;


