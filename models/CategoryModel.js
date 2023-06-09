import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Category = db.define(
  "list_category",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Category;
