"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Author.hasMany(models.Book, {
        foreignKey: "authorId",
        as: "books",
      });
      // Author.belongsTo(models.Book, {
      //   foreignKey: "bookId",
      //   as: "books",
      // });
    }
  }
  Author.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      bookId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Author",
    }
  );
  return Author;
};
