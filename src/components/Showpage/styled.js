import styled from 'styled-components'

export const Box = styled.div`
  height: 100vh;
  width: 100vw;
`

export const Box2 = styled.div`
  margin: 0 auto;
  height: 80vh;
  width: 80vw;
  padding-top: 3.5rem;
  display: flex;
  justify-content: center;
`

export const Image = styled.div`
  margin: 3rem 0;
  margin-left: 2rem;
  flex: 1 1 auto;
  height: 45rem;
`

export const Info = styled.div`
  margin: 3rem 0;
  width: 550px;
  flex: 0 1 auto;
  height: 40rem;
`

export const Picture = styled.img`
  top: 0;
  left: 0;
  height: 100%;
`

export const Div = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  top: 100px;
`

export const AddtoCartBtn = styled.button`
  background-color: white;
  color: black;
  border: 2px solid black;
  height: 50px;
  width: 450px;
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background-color: black;
    color: white;
  }
  &:focus {
    outline: none;
  }
  font-size: 20px;
`

export const BuyToBtn = styled.button`
  background-color: white;
  color: black;
  border: 2px solid black;
  height: 50px;
  width: 450px;
  cursor: pointer;
  border-radius: 2em;
  &:hover {
    background-color: black;
    color: white;
  }
  &:focus {
    outline: none;
  }
  font-size: 20px;
`
