import React, { Component } from 'react'

export default class index extends Component {
  componentDidMount() {
    const getProduct = fetch(``)
  }
  render() {
    console.log(this.props, "<-------props from Showpage")
    return (
      <div>
        Show page
      </div>
    )
  }
}
