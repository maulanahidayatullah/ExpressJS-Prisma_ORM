var express = require('express');
var router = express.Router();
const AnimeController = require("../controllers/AnimeController");
// const middleware = require("../middleware/authJWT");

router.get("/", AnimeController.list);
// router.get("/:id", (req, res, next) => middleware.auth(req, res, next), AnimeController.getById);
// router.post("/create", (req, res, next) => middleware.auth(req, res, next), AnimeController.create);
// router.put("/update/:id", (req, res, next) => middleware.auth(req, res, next), AnimeController.update);
// router.delete("/delete/:id", (req, res, next) => middleware.auth(req, res, next), AnimeController.delete);

// router.post('/', (req, res, next) => middleware.authorizations(req, res, next) {

module.exports = router;
