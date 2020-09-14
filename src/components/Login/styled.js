import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 3rem;
  margin: 0;
  background-color: whitesmoke;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const oldDiv = styled.div`
  width: 900px;
  height: 300px;
  position: absolute;
  left: 20%;
  top: 30%;
  text-align: center;
  z-index: 1px;
  border: 1px solid purple;
`;
