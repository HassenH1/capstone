import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navbar = styled.nav`
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: flex-end; 
    margin: 0px;
    font-size: 20px;
    box-shadow: 0 4px 15px -2px black;
    z-index: 1;
    position: fixed;

`

export const Link = styled(NavLink)`
    color: white;
    margin-left: 15px;
    font-family: Arial;
    text-decoration: none;
    &.active{
        border-bottom: 2.5px solid red;
    }
`

export const Title = styled.p`
    text-align: left;
    color: white;
    width:70%;
    font-size: 30px;
    font-family: Dancing Script;
    justify-content: flex-start;
    font-style: normal;
    margin: 0;
    padding: 16px 0 0;
    margin: 0 auto;
`

export const Div = styled.div`
    padding: 1rem 0 1rem 0;
    align-item: center
`

export const SecondDiv = styled.div`
    padding: 1rem 1rem 1rem 0;
    align-item: center
`
