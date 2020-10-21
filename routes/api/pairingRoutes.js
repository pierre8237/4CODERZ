const router = require("express").Router();
const pairingController = require("../../controllers/pairingsController");

//Identify what the the data endpoints are
router.route("/").get(pairingController.findAll);

//.post(pairingController.create);

module.exports = router;