const express = require("express");
const app = express();
require("dotenv").config();
const { sequelize } = require("./models");
const PORT = process.env.PORT;
const book = require("./routes/bookRoutes");
const author = require("./routes/authorRoutes");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
};
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
connectDb();
app.use("/api/book", book);
app.use("/api/author", author);
