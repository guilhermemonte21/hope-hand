import styled from "styled-components";

export const CardStyled = styled.View`
  border-radius: 16px;
  background-color: white;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100px;
  shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-offset: -2px 4px;
  shadow-radius: 25px;
  elevation: 5;
`;

export const CardImage = styled.Image`
  width: 50px;

  height: 50px;
  border-radius: 100px;
  background-color: white;

  border-color: #7ccfff;
  border-width: 1px;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-family: "Kanit_400Regular";
`;
