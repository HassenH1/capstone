import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 3rem;
  margin: 0;
`;

export const Div = styled.div`
  padding-top: 3rem;
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
