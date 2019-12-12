import React, { Component } from 'react'
import {
  Box,
  Box2,
  Image,
  Info,
  Picture,
  Div,
  AddtoCartBtn,
  BuyToBtn
} from './styled'
import { withRouter } from 'react-router-dom';

class index extends Component {
  state = {
    currentProduct: {}
  }
  componentDidMount = async () => {
    const getProduct = await fetch(`/products/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const getProductJson = await getProduct.json()
    this.setState({
      currentProduct: getProductJson
    })
  }
  // AddtoCart = () => {
  //   console.log(this.props.currentUser.order.push(this.state.currentProduct._id))
  //   console.log(this.props.currentUser.order, "<------------order array in User")
  // }
  onSubmit = () =>{
    console.log("hitting from showpage")
    this.props.addToCart(this.state.currentProduct)
    // console.log(this.props.currentUser)
  }
  modal = () => {
    console.log("modal should pop up")
    setTimeout(alert('Item in Cart!'), 5000)
  }
  render() {
    return (
      <Box>
        <Box2>
          <Image>
            <Picture src={this.state.currentProduct.image} />
          </Image>
          <Info>
            <Div>
              <h1>{this.state.currentProduct.name}</h1>
              <p>${this.state.currentProduct.price} USD</p>
            </Div>
            <hr />
            <p>{this.state.currentProduct.description}</p>
            <br />
            <AddtoCartBtn onClick={this.onSubmit, this.modal}>Add to Cart</AddtoCartBtn>
            <br />
            <br />
            <BuyToBtn>Buy Now</BuyToBtn>
          </Info>
        </Box2>
      </Box>
    )
  }
}

export default withRouter(index)