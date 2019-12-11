import styled from 'styled-components'

export const Header = styled.header`
  height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80);
  background-position: center center;
  background-size: cover;
  text-align: center;
`

export const Div = styled.div`
  width: 900px;
  height: 400px;
  position: absolute;
  left: 20%;
  top: 30%;
  text-align: center;
  z-index: 1px;
  font-family: Caveat;
`

export const Header1 = styled.h1`
  font-size: 180px;
  color: #FF3399;
  text-align: center;
  margin: 0;
  padding: 50px 0 0 0;
`

export const DivBtn = styled.div`
  width: 860px;
  text-align: center;
  padding-top: 65px;
`

export const Btn = styled.button`
  background-color: Transparent;
  color: white;
  border: 2px solid white;
  height: 50px;
  width: 150px;
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background-color: white;
    color: black;
  }
  &:focus {
    outline: none;
  }
  font-size: 20px;
`

export const Transparent = styled.div`
  background-color: rgba(0,0,0,0.4);
  height: 100vh;
`

export const SubHeader = styled.h1`
  text-align: center;
  font-weight: 300;
`

export const Main = styled.main`
  position: relative;
  margin: 0 auto;
  height: 50%;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`