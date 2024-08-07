import styled from "styled-components/native";

export const ButtonStyled = styled.TouchableOpacity`
  flex-grow: 1;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

// BOTAO MENOR
export const ButtonShort = styled(ButtonStyled)`
  width: 30%;
`;

// BOTAO UPLOAD
export const ButtonUploadImage = styled(ButtonStyled)`
  border: 1px solid #3FA7E4;
  padding: 10px;
  z-index: 2;
  alignItems: flex-start;
  justifyContent: center;
  position: absolute;
  top: 20%;
  left: 90%;
  borderTopLeftRadius: 12px;
  borderBottomLeftRadius: 12px;
  width: 15%;
  height: 45;
  backgroundColor: #7BCAF7;
`;

//TEXTO DO BOTAO
export const TextButton = styled.Text`
  font-size: 14px;
  font-family: "Kanit_400Regular";
`;
