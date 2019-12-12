import React, { Component } from 'react'

export default class index extends Component {
  state = {
    inCart: {
      order: {}
    }
  }
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
    console.log(cartJson.order, "<-------------cartJSON.order")
    this.setState({
      inCart: {
        order: cartJson.order
      }
    }, console.log(this.state, "<-----------state"))
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
        {/***************************************Need to fix this*************************************************/}
        {console.log(this.state.inCart.order, "<------from render")}

        {/* {this.state.inCart.order.map((subArray) => {
          return subArray.map((arr) => {
            return arr
          })
        }) */}
        {
          // this.state.inCart.order !== {}
          //   ?
          //   this.state.inCart.order.map((elem, i) => {
          //     return (
          //       <div>
          //         Hello
          //         { console.log(elem, "elem"),
          //           console.log(this.state, "<-------------state")
          //           // console.log(elem[i].image, 'map', "<-----------------inCart")
          //         }
          //         {/* <h1>{elem[i].name}</h1> */}
          //       </div>
          //     )
          //   })
          //   :
          //   <div>"Nothing in shopping Cart"</div>
        }
        {/***************************************Need to fix this*************************************************/}
      </div>
    )
  }
}
