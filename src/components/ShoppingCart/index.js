import React, { Component } from 'react'
import { Main, Empty, ShoppingCart, Image, P, Delete } from './styled'

export default class index extends Component {
  state = {
    inCart: {
      order: [],
      total: ""
    }
  }
  componentDidMount = async () => {
    // this.productFetch()
    console.log(this.props.currentUser)
  }
  // productFetch = async () => {
  //   const productCart = await fetch(`/products/${this.props.currentUser.order}`, {
  //     method: "PUT"
  //   })
  //   const productCartJson = await productCart.json()
  //   console.log(productCartJson, "<---------product in cart at the moment")
  // }
  render() {
    return (
      <Main>
        <Empty>Shopping Cart List</Empty>
        {
          this.state.inCart.order.length > 0
            ?
            this.state.inCart.order.map((elem, i) => {
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
