import styled from 'styled-components'

export const P = styled.p`
  margin: auto 0;
`

export const Main = styled.div`
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  padding-top: 3.5rem;
`

export const Empty = styled.div`
  position: relative;
  top:5rem;
  text-align: center;
  font-size: 20px;
`

export const ShoppingCart = styled.div`
  height: 281px;
  width: 65rem;
  margin: 0 auto;
  position: relative;
  top: 15%;
  display: flex;
  background-color: #F5F5F5;
  padding: 8px;
  justify-content: space-around;
  margin-bottom: 10px;
` 

export const Image = styled.img`
  height: 50%
  width: 15%;
  margin: auto 0;
`

export const Delete = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 2rem;
  color: red;
  width: 4%;
`