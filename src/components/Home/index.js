import React, { Component } from "react";
import ShowProductOnHome from "../ShowProductOnHome";
import {
  Header,
  Div,
  Header1,
  DivBtn,
  Btn,
  Transparent,
  SubHeader,
  Main,
} from "./styled";

export default class index extends Component {
  state = {
    products: [],
  };

  componentDidMount = async () => {
    try {
      const allProducts = await fetch("/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const allProductsJson = await allProducts.json();
      this.setState({
        products: allProductsJson,
      });
    } catch (err) {}
  };
  render() {
    return (
      <>
        <Header>
          <Transparent></Transparent>
        </Header>
        <Div>
          <div style={{ margin: "0 auto" }}>
            <Header1>Shop Away..</Header1>
          </div>
          <DivBtn>
            <div style={{ margin: "0 auto" }}>
              <Btn onClick={this.props.all}>SHOP</Btn>
            </div>
          </DivBtn>
        </Div>
        <SubHeader>New Collection</SubHeader>
        <Main>
          <ShowProductOnHome
            products={this.state.products}
            all={this.props.all}
          />
        </Main>
        <br />
      </>
    );
  }
}
