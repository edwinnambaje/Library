// controllers/bookController.js
const { Book, Author } = require("../models");

exports.createAuthor = async (req, res) => {
  const { firstName, lastName, bookId } = req.body;
  try {
    const author = await Author.create({ firstName, lastName, bookId });
    res.status(200).json(author);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create author" });
  }
};
exports.getAll = async (req, res) => {
  try {
    const author = await Author.findAll({
      include: [{ model: Book, as: "books" }],
    });
    res.status(200).json(author);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch author" });
  }
};
