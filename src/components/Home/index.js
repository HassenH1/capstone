import React, { Component } from 'react'
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
  componentDidMount = async () => {
    try {
      console.log('hi')
      const allProduct = await fetch('/products')
      const allProductJson = await allProduct.json()
      console.log(allProductJson)
    } catch (err) {
      console.log(err)
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
          {
            this.props.currentUser.username
              ? <Header1>Shop Away {this.props.currentUser.username} </Header1>
              : <Header1>Shop Away...</Header1>
          }
          <DivBtn>
            <Btn>SHOP</Btn>
          </DivBtn>
        </Div>
        <SubHeader>New Collections</SubHeader>
        <Main>
        </Main>
      </>
    )
  }
}
