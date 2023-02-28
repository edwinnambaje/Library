// controllers/bookController.js
const { Book, Author } = require("../models");

exports.createBook = async (req, res) => {
  const { title, authorId, year } = req.body;
  try {
    const author = await Author.findByPk(authorId);
    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }
    const book = await Book.create({ title, authorId, year });
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create book" });
  }
};
exports.getBooks = async (req, res) => {
  const books = await Book.findAll({
    include: [
      { model: Author, as: "author", attributes: ["firstName", "lastName"] },
    ],
  });
  res.json(books);
};
exports.getSingleBook = async (req, res) => {
  const books = await Book.findByPk(req.params.id, {
    include: [{ model: Author, as: "author" }],
  });
  res.json(books);
};
exports.getSingleUserBook = async (req, res) => {
  const author = req.params.id;
  const books = await Book.findAll({
    where: { authorId: author },
    include: [{ model: Author, as: "author" }],
  });
  //   include: [{ model: Author, as: "author" }],
  // });
  res.json(books);
};
