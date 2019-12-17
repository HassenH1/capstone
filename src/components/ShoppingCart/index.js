import React, { Component } from 'react'
import { Main, Empty, ShoppingCart, Image, P, Delete } from './styled'

export default class index extends Component {
  state = {
    cart: "",
    updatedCart: ""
  }
  componentDidMount = async () => {
    const userOrder = await fetch(`/auth/users/${this.props.currentUser.id}`)
    // console.log(userOrder, "<-----------user order")
    const userOrderJson = await userOrder.json()
    console.log(userOrderJson, "<----------userorderJson")
    this.setState({
      cart: userOrderJson
    })
    // this.getProducts()
  }
  // getProducts = () => {
  //   this.state.cart && this.state.cart.order.map(async(elem) => {
  //     const updatedUserOrder = await fetch(`/products/${elem}`)
  //     // console.log(updatedUserOrder, "<_--------updateUserCartOrder")
  //     const updatedUserOrderJson = await updatedUserOrder.json()
  //     // console.log(updatedUserOrderJson, "<------------Grind dont stop")
  //     this.setState({
  //       updatedCart: [updatedUserOrderJson]
  //     }, console.log(this.state.updatedCart))
  //   })
  // }
  render() {
    return (
      <Main>
        <Empty>Shopping Cart List</Empty>
        {
          this.state.cart && this.state.cart.order.length > 0
            ?
            this.state.cart.order.map((elem, i) => {
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
