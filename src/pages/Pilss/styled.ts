import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.main`
  display: flex;
  border-width: 2px;
  border-color: #ffbf00;
  //background-color: orange;
  width: 90%;
  justify-content: center;
  border-radius: 5px;
  flex-direction: column;
`;

export const Name = styled.label`
  color: #aaa;
  font-size: 16pt;
`;

export const Row = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

export const ButtonPlus = styled.button`
  background-color: antiquewhite;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

//export ListContainer =styled.
