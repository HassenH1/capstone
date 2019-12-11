import React, { Component } from 'react'

export default class index extends Component {
  componentDidMount = () => {
    console.log(this.props, '<--------props from somewhere')
    const cart = fetch(`/auth/users/${this.props.currentUser._id}`, {
      method: "PUT",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(cart, "<--------------cartJson")
  }
  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
}
