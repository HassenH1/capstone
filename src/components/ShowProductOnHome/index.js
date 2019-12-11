import React, { Component } from 'react'
import { Test, Image, NLink, Btn } from './styled'
import { NavLink, withRouter } from 'react-router-dom'

class index extends Component {
  goToShowPage = () => {
    this.props.history.push(`/products/${this.props.products.id}`)
  }
  render() {
    console.log(this.props.products, "<------------------------------------ShowProductOnHome")
    const homePageList = this.props.products.map((elem, i) => {
      console.log(elem, 'this is from map')
      return <NLink to={`/products/${elem._id}`}><Test onClick={() =>this.goToShowPage(elem._id)} key={i} className="product">
        <p>{elem._id}</p>
        <Image src={elem.image} />
        <h3>{elem.name}</h3>
        <span>Price: ${elem.price}</span>
      </Test></NLink>
    })
    return (
      <>
        {homePageList}
        <Btn>SEE MORE</Btn>
      </>
    )
  }
}

export default withRouter(index)
