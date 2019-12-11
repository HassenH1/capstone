import React, { Component } from 'react'
import {Test, Image, A, Btn} from './styled'

export default class index extends Component {
  // componentDidMount = async () => {
  //   const selectOne = await fetch(`/products/${this.props.match.params.id}`)
  // }
  render() {
    console.log(this.props.products, "<------------------------------------ShowProductOnHome")
    return (
      <>
        {this.props.products.map((elem, i) => {
          console.log(elem, 'this is from map')
          return <A href><Test key={i} className="product">
        <p>{elem._id}</p>
          <Image src={elem.image}/>
          <h3>{elem.name}</h3>
          <span>Price: ${elem.price}</span>
          </Test></A>
        })}
        <Btn>SEE MORE</Btn>
      </>
    )
  }
}
