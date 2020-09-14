import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Div } from "./styled";

import { doSignInWithEmailAndPassword } from "../../firebase/users";

class index extends Component {
  state = {
    password: "",
    email: "",
    session: {},
    message: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    doSignInWithEmailAndPassword(email, password)
      .then(async (authUser) => {
        const loginUser = await fetch(`/auth/users/${authUser.user.uid}`);
        const loginUserJson = await loginUser.json();
        this.props.doSetCurrentUser(loginUserJson);
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ error });
      });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
          textAlign: "center",
        }}
      >
        <Div>
          <form onSubmit={this.handleSubmit}>
            <h4>Login</h4>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              placeholder="password"
            />
            <input type="submit" value="Submit" />
            {this.state.error && (
              <p style={{ color: "red" }}>{this.state.error.message}</p>
            )}
          </form>
        </Div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
            alt="img"
            height="892"
            width="750"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(index);
