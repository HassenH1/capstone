import React, { Component } from 'react'
import { Main, Empty, ShoppingCart, Image, P, Delete } from './styled'

export default class index extends Component {
  state = {
    cart: "",
    updatedCart: ""
  }
  componentDidMount = async () => {
    const userOrder = await fetch(`/auth/users/${this.props.currentUser._id}`)
    const userOrderJson = await userOrder.json()
    this.setState({
      cart: userOrderJson
    })
    this.getProducts()
  }

  getProducts = async () => {
    let newArray = []
    this.state.cart && this.state.cart.order.map(async (elem) => {
      const updatedUserOrder = await fetch(`/products/${elem}`)
      const updatedUserOrderJson = await updatedUserOrder.json()
      newArray.push(updatedUserOrderJson)
      this.setState({
        updatedCart: newArray
      })
    })
  }
  handleClick = async (id, userId) => {
    const items = this.state.updatedCart && this.state.updatedCart.filter((elem) => {
      return elem._id !== id
    })
    /////////////////////////////////////////////////////////
    const deleted = await fetch(`/auth/users/${userId._id}`, {
      method: "DELETE",
      body: JSON.stringify({id}),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(resp => resp.json())
    this.setState({
      updatedCart: items
    })
  }
  render() {
    return (
      <Main>
        <Empty>Shopping Cart List</Empty>
        {
          this.state.updatedCart && this.state.updatedCart.length > 0
            ?
            this.state.updatedCart.map((elem, i) => {
              return (
                <ShoppingCart>
                  <P>Name: {elem.name}</P>
                  <P>price: {elem.price}</P>
                  <Image src={elem.image} />
                  <Delete onClick={() => this.handleClick(elem._id, this.props.currentUser)}>X</Delete>
                </ShoppingCart>
              )
            })
            :
            <div>
              <Empty>There is nothing in your Shopping Cart</Empty>
            </div>
        }
      </Main>
    )
  }
}