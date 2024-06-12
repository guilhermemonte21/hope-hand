import styled from "styled-components/native";

export const ButtonStyled = styled.TouchableOpacity`
  flex-grow: 1;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

// Extended button style for a shorter button
export const ButtonShort = styled(ButtonStyled)`
  width: 30%;
`;

export const ButtonUploadImage = styled(ButtonStyled)`
  border: 1px solid #3FA7E4;
  padding: 10px;
  alignItems: flex-start;
  justifyContent: center;
  position: absolute;
  top: 25%;
  left: 90%;
  borderTopLeftRadius: 12px;
  borderBottomLeftRadius: 12px;
  width: 15%;
  height: 45;
  backgroundColor: #7BCAF7;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-family: "Kanit_400Regular";
`;
