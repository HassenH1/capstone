import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 3rem;
  margin: 0;
  background-color: whitesmoke;
  padding: 0;
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

export const InputField = styled.input`
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  boxsizing: border-box;
  &:focus {
    border: 3px solid #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
  }
`;

export const InputBtn = styled.input`
  width: 10rem;
  height: 3rem;
  transition-duration: 0.4s;
  font-size: 18px;
  background-color: #ff7b00;

  color: white;
  border: 0.6px solid #ff7b00;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    color: #ff7b00;
    background-color: white;
  }
`;
