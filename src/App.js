import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar.js'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import AddProducts from './components/AddProducts'
import { auth, doSignOut } from './firebase/users'

class App extends Component {
  state = {
    currentUser: {}
  }
  componentDidMount() {
    auth.onAuthStateChanged(async authUser => {
      if(authUser) {
        console.log(authUser)
        const loginUser = await fetch(`/auth/users/${authUser.uid}`)
        const loginUserJson = await loginUser.json()
        console.log(loginUserJson)
        this.doSetCurrentUser(loginUserJson)
      }
    })
  }
  doSetCurrentUser = currentUser => {
    console.log(currentUser, "<---whats in here")
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        username: currentUser.username
      }
    })  
  }
  logout = () => {
    doSignOut()
    this.setState({
      currentUser: {}
    })
  }
  render() {
    return (
      <div>
        {console.log(this.state.currentUser, "THIS IS CURRNET USSER")}
       <NavBar currentUser={this.state.currentUser} logout={this.logout}/>
       <Switch>
        <Route exact path='/' render={() => <Home currentUser={this.state.currentUser}/>}></Route>
        <Route exact path='/auth/register' render={() => <Register doSetCurrentUser={this.doSetCurrentUser}/>}/>
        <Route exact path='/auth/login' render={() => <Login doSetCurrentUser={this.doSetCurrentUser}/>} />
        <Route exact path='/admin' render={() => <AddProducts products={this.state.products}/>} />
        <Route exact path="/shoppingcart" render={() => {return <div>Hello world from shopping cart</div>}}/>
       </Switch>
      </div>
    );
  }
}

export default App;