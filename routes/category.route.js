const express = require('express');

const categoryModel = require('../services/models/category.model');
const router = express.Router();

    router.get('/', async (req, res) =>{
    console.log('aaaa');

    const data = await categoryModel.findAll();
    if (data === 0) {
      return res.status(500).json("was row ecfect").end();
    }
    res.status(202).json({data});
  });

  router.get('/delete/:id', async (req, res) =>{
    const data = req.params.id;

    const row = await categoryModel.delete(data);
    if (row === 0) {
      return res.status(500).json("was row ecfect").end();
    }
    res.status(202).json({
        message: "add category successfully"
    });
  });


  router.post('/add', async (req, res) =>{
    const data = req.body;

    var a = new Date().toString();

    console.log(a);

    const category = {
        Name: data.Name,
        DateCreated: new Date(),
        Isdeleted: 0
    } 

    const raw = await categoryModel.add(category);
    if (raw === 0) {
      return res.status(500).json("was row ecfect").end();
    }
    res.status(202).json({
        message: "add category successfully"
    });
  });

module.exports = router;