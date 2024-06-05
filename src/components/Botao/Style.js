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

export const TextButton = styled.Text`
  font-size: 14px;
  font-family: "Kanit_400Regular";
  text-transform: uppercase;
`;
