import styled from "styled-components";

export const NoticiaStyled = styled.TouchableOpacity`
  border-radius: 18px;
  flex-grow: 1;
`;

export const NoticiaBlur = styled.View`
  border-radius: 18px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const NoticiaTitle = styled.Text`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 16px;
  color: white;
  font-family: "Kanit_400Regular";
  text-shadow: 1px 1px 5px black;
`;

export const NoticiaImage = styled.Image`
  border-radius: 18px;
  width: 100%;
  height: 100%;
`;
