import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Products = db.define(
  "newproducts",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    productName: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Products;

(async () => {
  await db.sync();
})();
