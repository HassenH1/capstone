import React, { Component } from 'react'

export default class index extends Component {
  componentDidMount = async () => {
    // this.productFetch()
    console.log(this.props, '<--------props from somewhere')
    const cart = await fetch(`/auth/users/${this.props.currentUser.id}`, {
      method: "PUT",
      body: JSON.stringify(this.props.currentUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(cart, "<--------------cartJson")
    const cartJson = await cart.json()
    console.log(cartJson, "<-------------cartJSON")
  }
  productFetch = async () => {
    const productCart = await fetch(`/products/${this.props.currentUser.order}`, {
      method: "PUT"
    })
    const productCartJson = await productCart.json()
    console.log(productCartJson, "<---------product in cart at the moment")
  }
  render() {
    return (
      <div>
        Shopping Cart!
      </div>
    )
  }
}
