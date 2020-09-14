import styled from "styled-components";

export const Box2 = styled.div`
  margin: 0 auto;
  height: auto;
  width: 80vw;
  padding-top: 3.5rem;
  display: flex;
  justify-content: space-evenly;
`;

export const Image = styled.div`
  margin: 3rem 0;
  margin-left: 2rem;
  height: 45rem;
`;

export const Info = styled.div`
  margin: 3rem 0;
  width: 550px;
  height: 40rem;
`;

export const Picture = styled.img`
  top: 0;
  left: 0;
  height: 100%;
`;

export const Div = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  top: 100px;
`;

export const AddtoCartBtn = styled.button`
  background-color: white;
  color: black;
  border: 2px solid black;
  height: 50px;
  width: 450px;
  cursor: pointer;
  border-radius: 25px;
  transition: 1s ease;
  &:hover {
    background-color: black;
    color: white;
    transition: 1s ease;
  }
  &:focus {
    outline: none;
  }
  font-size: 20px;
`;

export const BuyToBtn = styled.button`
  background-color: white;
  color: black;
  border: 2px solid black;
  height: 50px;
  width: 450px;
  cursor: pointer;
  border-radius: 2em;
  transition: 1s ease;
  &:hover {
    background-color: black;
    color: white;
    transition: 1s ease;
  }
  &:focus {
    outline: none;
  }
  font-size: 20px;
`;

export const P = styled.p`
  color: green;
`;
export const Error = styled.p`
  color: red;
`;
