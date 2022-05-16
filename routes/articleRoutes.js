const express = require("express");
const router = express.Router();
const {
  getArticles,
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");

router.route("/").get(getArticles).post(createArticle);
router.route("/:id").get(getArticle).put(updateArticle).delete(deleteArticle);

module.exports = router;
