const express = require("express");
const router = express.Router();
const {
  suspendUser,
  unsuspendUser,
  createUser,
} = require("../controllers/userController");

router.route("/").post(createUser);
router.route("/:id/suspend").put(suspendUser);
router.route("/:id/unsuspend").put(unsuspendUser);

module.exports = router;
