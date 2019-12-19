import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar.js'
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import AddProducts from './components/AddProducts'
import { auth, doSignOut } from './firebase/users'
import Showpage from './components/Showpage'
import ShoppingCart from './components/ShoppingCart'
import All from './components/All'

class App extends Component {
  state = {
    currentUser: {},
    allProducts: [],
  }
  componentDidMount = async () => {
    auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        console.log(authUser)
        const loginUser = await fetch(`/auth/users/${authUser.uid}`)
        const loginUserJson = await loginUser.json()
        console.log(loginUserJson)
        this.doSetCurrentUser(loginUserJson)

      }
    })
    this.allProducts()
  }
  allProducts = async () => {
    try {
      const all = await fetch(`/products`)
      const allJson = await all.json()
      this.setState({
        allProducts: [...allJson]
      })
    } catch (err) {
      console.log(err)
    }
  }
  doSetCurrentUser = currentUser => {
    this.setState({
      currentUser
    })
  }
  logout = () => {
    doSignOut()
      .then(() => {
        this.setState({
          currentUser: {}
        }, () => {
          console.log(this.state, "<-----logout")
        })
        this.props.history.push("/")
      })

  }
  addToCart = async (productId) => {
    this.setState({
      // currentUser: { ...this.state.currentUser, order: [...this.state.currentUser.order, productId] }
      currentUser: { ...this.state.currentUser, order: [productId] }
    }, async () => {
      const cart = await fetch(`/auth/users/${this.state.currentUser._id}`, {
        method: "PUT",
        body: JSON.stringify(this.state.currentUser),
        headers: {
          "Content-Type": "application/json"
        }
      },)
      const cartJson = await cart.json()
      console.log(cartJson.order, "<-------------cartJSON")
    })
    console.log(this.state, "<-----order from app")
  }
  all = () => {
    this.props.history.push(`/products`)
  }
  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} logout={this.logout} />
        <Switch>
          <Route exact path='/' render={() => <Home currentUser={this.state.currentUser} all={this.all} />}></Route>
          <Route exact path='/auth/register' render={() => <Register doSetCurrentUser={this.doSetCurrentUser} />} />
          <Route exact path='/auth/login' render={() => <Login doSetCurrentUser={this.doSetCurrentUser} />} />
          <Route exact path='/admin' render={() => <AddProducts products={this.state.products} />} />
          <Route exact path="/shoppingcart" component={() => <ShoppingCart currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route exact path='/products/:id' render={() => <Showpage currentUser={this.state.currentUser} addToCart={this.addToCart} />} />
          <Route exact path='/products' render={() => <All currentUser={this.state.currentUser} allProducts={this.state.allProducts} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);