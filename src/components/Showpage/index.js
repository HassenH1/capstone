import React, { Component } from 'react'
import {
  Box,
  Box2,
  Image,
  Info,
  Picture,
  Div,
  AddtoCartBtn,
  BuyToBtn,
  P,
  Error
} from './styled'
import { withRouter } from 'react-router-dom';

class index extends Component {
  state = {
    currentProduct: {},
    isClickedBuy: false,
    isClickedCart: false

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
  onSubmit = () => {
    this.props.addToCart(this.state.currentProduct)
    this.setState({
      isClickedCart: true
    })
  }
  handleClick = () => {
    console.log("hitting")
    this.setState({
      isClickedBuy: true
    })
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
            {
              Object.keys(this.props.currentUser).length !== 0
                ? <div>
                  <AddtoCartBtn onClick={this.onSubmit}>Add to Cart</AddtoCartBtn>
                  <P>{this.state.isClickedCart && "Item added to Cart"}</P>
                </div>
                : <AddtoCartBtn disabled>Must be logged in to add to Cart</AddtoCartBtn>
            }
            <br />
            <br />
            {
              Object.keys(this.props.currentUser).length !== 0
                ? <div>
                  <BuyToBtn onClick={this.handleClick}>Buy Now</BuyToBtn>
                  <Error>{this.state.isClickedBuy && "Coming soon......."}</Error>
                </div>
                : <BuyToBtn disabled>Must be logged in to Buy Now</BuyToBtn>
            }
          </Info>
        </Box2>
      </Box>
    )
  }
}

export default withRouter(index)