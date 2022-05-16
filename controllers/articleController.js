const asyncHandler = require("express-async-handler");

const Article = require("../models/articleModel");
const User = require("../models/userModel");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
exports.getArticles = asyncHandler(async (req, res, next) => {
  const articles = await Article.find();

  res.status(200).json({
    success: true,
    count: articles.length,
    data: articles,
  });
});

exports.getArticle = asyncHandler(async (req, res, next) => {
  const article = await Article.findById(req.params.id);

  if (!article) {
    return next(
      new ErrorResponse(`No article with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: article,
  });
});

exports.createArticle = asyncHandler(async (req, res, next) => {
  const article = await Article.create(req.body);

  res.status(201).json({
    success: true,
    data: article,
  });
});

exports.updateArticle = asyncHandler(async (req, res, next) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!article) {
    return next(
      new ErrorResponse(`No article with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: article,
  });
});

exports.deleteArticle = asyncHandler(async (req, res, next) => {
  const article = await Article.findById(req.params.id);

  if (!article) {
    return next(
      new ErrorResponse(`No article with the id of ${req.params.id}`, 404)
    );
  }

  article.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
