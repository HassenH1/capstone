import React, { Component } from 'react'
import ShowProductOnHome from '../ShowProductOnHome'
import {
  Header,
  Div,
  Header1,
  DivBtn,
  Btn,
  Transparent,
  SubHeader,
  Main
} from './styled'

export default class index extends Component {
  state = {
    products: []
  }

  componentDidMount = async () => {
    try {
      const allProducts = await fetch('/products', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const allProductsJson = await allProducts.json()
      console.log(allProductsJson, "<-------all products json()")
      this.setState({
        products: allProductsJson
      })
    } catch (err) {
      console.log(err, "<_------error from App")
    }
  }
  render() {
    console.log(this.props, "<---from home")
    return (
      <>
        <Header>
          <Transparent>
          </Transparent>
        </Header>
        <Div>
          <Header1>Shop Away..</Header1>
          <DivBtn>
            <Btn>SHOP</Btn>
          </DivBtn>
        </Div>
        <SubHeader>New Collections</SubHeader>
        <Main>
          <ShowProductOnHome products={this.state.products} />
        </Main>
      </>
    )
  }
}
