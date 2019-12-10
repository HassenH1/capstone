const express = require('express')
const router = express.Router()
const Product = require('../models/Products')

// router.get("/products/:id", async (req,res) => {
//   try{
//     const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     console.log(updateProduct , "<---")
//     res.json(updateProduct)
//   } catch(err){
//     console.log(err)
//   }
// })

// router.post('/admin', async (req,res) => {
//   try{
//     console.log("hitting here")
//     console.log(req.body)
//     const createProduct = await Product.create(req.body)
//     res.json(createProduct)
//   } catch(err){
//     console.log(err)
//   }
// })

module.exports = router