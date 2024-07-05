import styled from "styled-components/native";

export const BottomBox = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border: 1px solid #7bcaf7;
  border-radius: 12px;
  flex-direction: row;
  overflow: hidden;
`;

export const ButtonTree = styled.Pressable`
  flex-grow: 1;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isSelected ? "#3FA7E4" : "#FFFFFF")};
  border-right-width: 1px;
  border-right-color: #7bcaf7;
  border-right-style: solid;
`;
