const express = require("express");

const watchlistModel = require("../services/models/watchList.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await categoryModel.findAll();
  if (data === 0) {
    return res.status(500).json("was row ecfect").end();
  }

  return res.status(202).json({ data });
});

router.get("/delete/:id", async (req, res) => {
  const data = req.params.id;

  const checkExist = await productModel.findbyCategory(data);

  if (checkExist != 0) {
    return res
      .status(500)
      .json({ message: "Cannot delete Category because is exist product" })
      .end();
  }

  const row = await categoryModel.delete(data);
  if (row === 0) {
    return res.status(500).json("was row ecfect").end();
  }
  return res.status(202).json({
    message: "add category successfully",
  });
});

router.post("/add", async (req, res) => {
  const data = {
    IdProduct: req.body.IdProduct,
    IdUser: req.body.IdUser,
    Isdeleted: 0
  };
  const raw = await watchlistModel.add(data);
  if (raw === 0) {
    return res.status(500).json("was row ecfect").end();
  }
  res.status(202).json({
    message: "add successfully",
  });
});

module.exports = router;
