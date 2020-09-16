import React, { Component } from "react";
import { doCreateUserWithEmailAndPassword } from "../../firebase/users";
import { withRouter } from "react-router-dom";
import { Div, InputField, InputBtn } from "./styled";

class index extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    session: {},
    message: "",
  };
  /////////////////////////////////////////need session and error message
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    console.log("hitting here");
    doCreateUserWithEmailAndPassword(email, password)
      .then(async (authUser) => {
        const user = {
          username: this.state.username,
          email: this.state.email,
          _id: authUser.user.uid,
        };
        console.log(authUser);
        const createdUser = await fetch("/auth/register", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const createdUserJson = await createdUser.json();
        this.props.doSetCurrentUser(createdUserJson);
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ error });
      });
  };
  render() {
    return (
      <Div>
        <div
          style={{
            height: "50vh",
            border: "1px solid whitesmoke",
            width: "30vw",
          }}
        >
          <form
            onSubmit={this.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#ffffff",
              height: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              alignContent: "center",
              width: "auto",
            }}
          >
            <div>
              <h4>Register</h4>
            </div>

            <div
              style={
                {
                  /*border: "1px solid red"*/
                }
              }
            >
              <InputField
                type="email"
                name="email"
                onChange={this.handleChange}
                placeholder="email"
              />
            </div>

            <div>
              {/* <InputField
                type="username"
                name="username"
                onChange={this.handleChange}
                placeholder="username"
              /> */}
            </div>

            <div>
              {/* <InputField
                type="password"
                name="password"
                onChange={this.handleChange}
                placeholder="password"
              /> */}
            </div>

            <div>
              <InputBtn type="submit" value="Submit" />
            </div>

            <div>
              {this.state.error && (
                <p style={{ color: "red" }}>{this.state.error.message}</p>
              )}
            </div>
          </form>
        </div>

        <div style={{ height: "50vh", width: "30vw" }}>
          <img
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="img"
            height="100%"
            width="100%"
          />
        </div>
      </Div>
    );
  }
}

export default withRouter(index);
