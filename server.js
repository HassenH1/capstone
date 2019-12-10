const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const methodOverride = require("method-override")
const bcrypt = require("bcryptjs")
session = require('express-session')
const User = require("./models/Users.js")
const Product = require("./models/Products.js")
const PORT = 8000 
require('./config/db')


// const productController = require("./controllers/products")
// app.use("/admin", productController)

app.use(express.json())
app.use(methodOverride('_method'));
app.use(session({
  secret: "whatver",
  saveUninitialized: false,
  resave: false
}))

app.get("/products", async (req,res) => {
  console.log('hit')
  try{
    const foundProducts = await Product.find()
    console.log(foundProducts, "<----")
    res.json(foundProducts)
  } catch(err){
    console.log(err)
  }
})

app.post('/auth/register', async (req, res) => {
  try {
    console.log(req.body)
    const createdUser = await User.create(req.body)
    res.json(createdUser)
  } catch (err) {
    console.log(err)
  }
})

app.post('/admin', async (req,res) => {
  try{
    console.log("from server")
    console.log(req.body)
    const createProduct = await Product.create(req.body)
    res.json(createProduct)
  } catch(err){
    console.log(err)
  }
})

app.get("/auth/users/:id", async (req,res) => {
  
  const foundUser = await User.findById(req.params.id)
  res.json(foundUser)
})



app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`)
})