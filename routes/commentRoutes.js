const express = require("express");
const router = express.Router();

const {
  getComments,
  createComment,
  deleteComment,
  updateComment,
} = require("../controllers/commentController");

router.route("/").get(getComments).post(createComment);
router.route("/:id").delete(deleteComment).put(updateComment);

module.exports = router;
