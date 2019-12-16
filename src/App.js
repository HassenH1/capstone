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
    allProducts: []
  }
  componentDidMount = async () => {
    auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        console.log(authUser)
        const loginUser = await fetch(`/auth/users/${authUser.uid}`)
        const loginUserJson = await loginUser.json()
        console.log(loginUserJson, "<----------------------login")
        this.doSetCurrentUser(loginUserJson)

      }
    })
    this.allProducts()
  }
  allProducts = async () => {
    try {
      const all = await fetch(`/products`)
      console.log(all, "<_-------------------------------------")
      const allJson = await all.json()
      this.setState({
        allProducts: [...allJson]
      })
    } catch (err) {
      console.log(err)
    }
  }
  doSetCurrentUser = currentUser => {
    console.log(currentUser._id, "<------------------------currentUser")
    console.log(this.state, "<--------------------------dosetcurrentUser")
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        username: currentUser.username,
        id: currentUser._id,
        order: []
      }
    })
    console.log(this.state, "<------------after")
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
  addToCart = (productId) => {
    console.log(productId, "<--------------------------------product Id")
    this.state.currentUser.order.push(productId)
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
          <Route exact path='/' render={() => <Home currentUser={this.state.currentUser} all={this.all}/>}></Route>
          <Route exact path='/auth/register' render={() => <Register doSetCurrentUser={this.doSetCurrentUser} />} />
          <Route exact path='/auth/login' render={() => <Login doSetCurrentUser={this.doSetCurrentUser} />} />
          <Route exact path='/admin' render={() => <AddProducts products={this.state.products} />} />
          <Route exact path="/shoppingcart" component={() => <ShoppingCart currentUser={this.state.currentUser} />} />
          <Route exact path='/products/:id' render={() => <Showpage currentUser={this.state.currentUser} addToCart={this.addToCart} />} />
          <Route exact path='/products' render={() => <All currentUser={this.state.currentUser} allProducts={this.state.allProducts}/>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);