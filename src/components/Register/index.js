import React, { Component } from 'react'
import { doCreateUserWithEmailAndPassword } from '../../firebase/users'
import {withRouter} from 'react-router-dom'
import { Div } from './styled'


class index extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    session: {},
    message: ""
  }
  /////////////////////////////////////////need session and error message
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }
  handleSubmit = (e) => {
    const { email, password } = this.state
    e.preventDefault()
    console.log("hitting here")
    doCreateUserWithEmailAndPassword(email, password)
      .then(async authUser => {
        const user = {
          username: this.state.username,
          email: this.state.email,
          _id: authUser.user.uid
        }
        console.log(authUser)
        const createdUser = await fetch('/auth/register', {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const createdUserJson = await createdUser.json()
        this.props.doSetCurrentUser(createdUserJson)
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ error })
      })
  }
  render() {
    return (
      <Div>
        <form onSubmit={this.handleSubmit}>
          <h4>Register</h4>
          <input type="email" name="email" onChange={this.handleChange} placeholder="email"/>
          <input type="username" name="username" onChange={this.handleChange} placeholder="username"/>
          <input type="password" name="password" onChange={this.handleChange} placeholder="password"/>
          <input type='submit' value="Submit" />
          {this.state.error && <p style={{'color': 'red'}}>{this.state.error.message}</p>}

        </form>
      </Div>
    )
  }
}

export default withRouter(index)