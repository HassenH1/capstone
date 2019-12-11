import styled from 'styled-components'

export const Test = styled.div`
  min-height: 500px;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
  padding: 0;
  margin: 10px;
`

export const Image = styled.img`
  height: 186.664‬px;
  width: 261.5px;
`
export const A = styled.a`
  text-decoration: none;
  color: inherit;
`
export const Btn = styled.button`
  margin: 0 auto 5px auto;
  background-color: Transparent;
  color: black;
  border: 2px solid Black;
  height: 50px;
  width: 150px;
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