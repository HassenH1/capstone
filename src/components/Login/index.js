import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Div, Layout } from "./styled";

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
      <Layout>
        <div style={{ margin: "0" }}>
          <img
            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
            alt="img"
            height="895"
            width="750"
            style={{ margin: "0" }}
          />
        </div>

        <Div>
          <div
            style={{
              margin: "auto",
              width: "30vw",
              border: "1px solid red",
              textAlign: "center",
              height: "auto",
            }}
          >
            <form
              onSubmit={this.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4>Login</h4>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  placeholder="email"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="password"
                />
              </div>
              <div style={{ marginTop: "1rem" }}>
                <input type="submit" value="Submit" />
              </div>
              <div>
                {this.state.error && (
                  <p style={{ color: "red" }}>{this.state.error.message}</p>
                )}
              </div>
            </form>
          </div>
        </Div>
      </Layout>
    );
  }
}

export default withRouter(index);
