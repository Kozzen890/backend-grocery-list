import Products from "../models/ProductModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const response = await Products.findAll({
      attributes: ["id", "productName", "category", "description"],
    });
    res.status(200).json({
      message: "Berhasil menampilkan semua Data Produk",
      response: response,
    });
  } catch (error) {
    res.status(404).json({ message: "Tidak dapat menampilkan data produk" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Products.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Berhasil memampilkan data produk dengan ID : ${response.id}`,
      response: response,
    });
  } catch (error) {
    res.status(404).json({ message: "Error" });
  }
};

export const addProduct = async (req, res) => {
  const { id, productName, category, description } = req.body;
  try {
    const newProduct = new Products({
      id,
      productName,
      category,
      description,
    });
    await newProduct.save();
    res.status(200).json({ msg: "Product saved" });
  } catch (error) {
    res.status(404).json({ msg: "Gagal menambahkan data produk" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Products.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Produk sudah terupdated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const response = await Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Berhasil menghapus produk" });
  } catch (error) {
    console.log(error.message);
  }
};
