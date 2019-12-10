import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Div } from './styled'

import {doSignInWithEmailAndPassword} from '../../firebase/users'

class index extends Component {
  state = {
    password: "",
    email: "",
    session: {},
    message: ""
  }
  //////////////////////////////////need error message and session
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }
  handleSubmit = (e) => {
    const { email, password } = this.state
    e.preventDefault()
    ///fix this fetch method
    console.log("Hitting here too")
    doSignInWithEmailAndPassword(email, password)
      .then(async authUser => {
        const loginUser = await fetch(`/auth/users/${authUser.user.uid}`)
        const loginUserJson = await loginUser.json()
        this.props.doSetCurrentUser(loginUserJson)
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({error})
      })
  }
  render() {
    return (
      <Div>
        <form onSubmit={this.handleSubmit}>
          <h4>Login</h4>
          <input type="email" name="email" onChange={this.handleChange} placeholder="email"/>
          <input type="password" name="password" onChange={this.handleChange} placeholder="password"/>
          <input type='submit' value="Submit" />
          {this.state.error && <p style={{'color': 'red'}}>{this.state.error.message}</p>}
        </form>
      </Div>
    )
  }
}

export default withRouter(index)