// server/models/list.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    static associate(models) {
      // Define associations if necessary
    }
  }

  List.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "List", // 'list' is automatically pluralized to 'lists' in Sequelize
    }
  );

  return List;
};
