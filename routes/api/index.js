const router = require("express").Router();
const pairingRoutes = require("./pairingRoutes");

router.use("/pairingRoutes", pairingRoutes);

module.exports = router;
