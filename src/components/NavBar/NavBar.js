import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Navbar,
  Link,
  SecondDiv,
  Div,
  Title
} from './styled'
// import { doSignOut } from './firebase/users'


const NavBar = (props) => {
  console.log(props, "<-----------------------nav props")
  return (
    <Navbar>
      <Title>Clothing Legends</Title>
      <Div>
        <Link exact to="/">Home</Link>
      </Div>
      {
        !props.currentUser.username
          ?
          <SecondDiv>
            <Link exact to="/auth/login">Login</Link>
            <Link exact to="/auth/register">Register</Link>
          </SecondDiv>
          :
          <SecondDiv>
            <Link exact to='/shoppingcart'><i className="fa fa-shopping-cart"></i> Cart</Link>

            <Link exact to="/logout" onClick={props.logout}>Sign Out</Link>
          </SecondDiv>
      }
    </Navbar>
  )
}

export default NavBar