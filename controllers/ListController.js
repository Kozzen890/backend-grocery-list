import List from "../models/ListModel.js";
import Products from "../models/ProductModel.js";
import User from "../models/UserModel.js";
// import db from "../models/db.js";

export const getAllList = async (req, res) => {
  try {
    let list = await List.findAll({
      attributes: ["id", "userId", "product_id"],
      include: [
        {
          model: Products,
          attributes: ["id", "productName", "category", "description"],
        },
        {
          model: User,
          attributes: ["username", "email"],
        },
      ],
    });
    res.status(200).json({
      message: "Berhasil menampilkan Data List",
      response: list,
    });
  } catch (error) {
    res.status(404).json({ message: "Tidak dapat menampilkan data list" });
  }
};

export const getListId = async (req, res) => {
  try {
    const response = await List.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Products,
          attributes: ["id", "productName", "category", "description"],
        },
        {
          model: User,
          attributes: ["username", "email"],
        },
      ],
    });
    res.status(200).json({
      message: `Berhasil memampilkan data List dengan ID : ${response.id}`,
      response: response,
    });
  } catch (error) {
    res.status(404).json({ message: "Error" });
  }
};

export const createList = async (req, res) => {
  const { id, userId, product_id } = req.body;
  try {
    const newList = new List({
      id,
      userId,
      product_id,
    });
    await newList.save();
    res.status(200).json({ msg: "List tersimpan" });
  } catch (error) {
    res.status(404).json({ message: "Tidak dapat menampilkan data List" });
  }
};

export const deleteList = async (req, res) => {
  try {
    const response = await List.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Berhasil menghapus List" });
  } catch (error) {
    console.log(error.message);
  }
};
