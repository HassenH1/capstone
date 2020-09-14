import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
`;

export const Image = styled.img`
  height: 186.664‬px;
  width: 261.5px;
`;
export const NLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  opacity: 0.5;
  transition: 1s ease;
  &:hover {
    opacity: 1;
    transition: 1s ease;
  }
`;
export const Btn = styled.button`
  position: relative;
  right: 0.5rem;
  margin: 0 auto 5px auto;
  background-color: Transparent;
  color: black;
  border: 2px solid Black;
  height: 38px;
  width: 150px;
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
