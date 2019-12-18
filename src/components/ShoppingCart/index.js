import React, { Component } from 'react'
import { Main, Empty, ShoppingCart, Image, P, Delete } from './styled'

export default class index extends Component {
  state = {
    cart: "",
    updatedCart: ""
  }
  componentDidMount = async () => {
    const userOrder = await fetch(`/auth/users/${this.props.currentUser._id}`)
    // console.log(userOrder, "<-----------user order")
    const userOrderJson = await userOrder.json()
    console.log(userOrderJson, "<----------userorderJson")
    this.setState({
      cart: userOrderJson
    })
    console.log(this.state.cart, "<------------------in the cart")
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
  render() {
    return (
      <Main>
        {console.log(this.state.updatedCart, "<------------")}
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
                  <Delete>X</Delete>
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