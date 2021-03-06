import React, { Component } from "react";
import { Test, Image, NLink, Btn, showpageWrapper } from "./styled";
import { NavLink, withRouter } from "react-router-dom";

class index extends Component {
  goToShowPage = () => {
    this.props.history.push(`/products/${this.props.products.id}`);
  };
  render() {
    const homePageList = this.props.products.slice(0, 6).map((elem, i) => {
      return (
        <NLink to={`/products/${elem._id}`}>
          <Test
            onClick={() => this.goToShowPage(elem._id)}
            key={i}
            className="product"
          >
            <Image src={elem.image} />
            <h3>{elem.name}</h3>
          </Test>
        </NLink>
      );
    });
    return (
      <>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {homePageList}
        </div>
        <div style={{ margin: "1rem auto" }}>
          <Btn onClick={this.props.all}>More</Btn>
        </div>
      </>
    );
  }
}

export default withRouter(index);
