import React, { Component } from 'react'
import { doAddFile } from '../../firebase/products'

export default class index extends Component {
  state = {
    id: null,
    name: "",
    price: "",
    description: "",
    image: null,
    product: []
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }
  handleSubmit = async (e) => {
    const { id, name, price, description, image } = this.state
    e.preventDefault()
    console.log("hitting on submit")
    if(image) {
      doAddFile(image)
      .then(file => file.ref.getDownloadURL())
      .then(async url => { 
        const createProduct = await fetch(`/admin`, {
          method: "POST",
          body: JSON.stringify({...this.state, image: url}),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const createProductJson = await createProduct.json()
        console.log(createProductJson, "<--created product")
        this.setState({
          product: [...this.state.product, createProductJson]
        })
      })
    }   else {
      const createProduct = await fetch(`/admin`, {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const createProductJson = await createProduct.json()
      console.log(createProductJson, "<--created product")
      this.setState({
        product: [...this.state.product, createProductJson]
      })
    } 

  }
  doAddPicture = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  }
  render() {
    return (
      <div>
        <h1>the Id {this.state.id}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
          <input type="number" name="price" placeholder="price" onChange={this.handleChange}/>
          <input type="text-box" name="description" placeholder="description" onChange={this.handleChange}/>
          <input type='submit' value="submit" />
        </form>
        <input type='file' name="image" onChange={this.doAddPicture}/>
        {this.state.product === this.props.products}
        {this.state.product.map((p) => {
          return <img src={p.image} />
        })}
      </div>
    )
  }
}
