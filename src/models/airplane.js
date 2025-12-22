"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            /**^ : Starts the search at the beginning of the string.

            (?=.*[a-z]) : The Secret Ingredient. This is a "Positive Lookahead." It scans the string to ensure there is at least one letter (a-z). If it doesn't find a letter, the whole validation fails immediately.

            [a-z0-9 ]+ : After confirming there is a letter, it checks that the entire string consists only of letters, numbers, or spaces.

            $ : Ensures the match goes all the way to the end of the string.

            i : Makes it case-insensitive (covers both A-Z and a-z). 
            */
            args: /^(?=.*[a-z])[a-z0-9 ]+$/i,
          },
        },
      },
      capacity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          isNumeric: true,
          max: 1200,
        },
      },
    },
    {
      sequelize,
      modelName: "Airplane",
    }
  );
  return Airplane;
};
