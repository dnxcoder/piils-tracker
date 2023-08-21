import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ButtonDate = styled.button`
  width: 90%;
  height: 60px;
  background-color: orange;
  margin-top: 5px;
`;

export const DateLabel = styled.label`
  font-size: 2rem;
  color: #222;
`;

export const FloatButton = styled.button`
  border-radius: 100px;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 90%;
  right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
