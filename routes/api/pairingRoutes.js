const router = require("express").Router();
const pairingController = require("../../controllers/pairingsController");

//Identify what the the data endpoints are
router.route("/").get(pairingController.findAll);
// .post(pairingController.create);

// Matches with "/api/wines/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
