import React, { Component } from 'react'

export default class index extends Component {
  render() {
    console.log(this.props.products, "<------------------------------------ShowProductOnHome")
    return (
      <ul>
        {this.props.products.map((elem, i) => {
          return <div key={i}>
          <li>{elem.name}</li>
          <li>{elem.price}</li>
          <li>{elem.description}</li>
          </div>
        })}
      </ul>
    )
  }
}
