import React, { Component } from 'react'
import { Test, Image, NLink, Btn, Main } from './styled'
import { withRouter } from 'react-router-dom'

class index extends Component {
  goToShowPage = (id) => {
    this.props.history.push(`/products/${this.props.allProducts.id}`)
  }
  render() {
    console.log(this.props.allProducts, "<-----------------props");
    const products = this.props.allProducts.map((elem, i) => {
      return <NLink to={`/products/${elem._id}`}><Test onClick={() => this.goToShowPage(elem._id)} key={i} className="product">
        <p>{elem._id}</p>
        <Image src={elem.image} />
        <h3>{elem.name}</h3>
        <span>Price: ${elem.price}</span>
      </Test></NLink>
    })
    return (
      <Main>
        {products}
      </Main>
    )
  }
}

export default withRouter(index)