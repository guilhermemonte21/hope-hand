import styled from "styled-components/native";

export const LastPhoto = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const LastTouchable = styled.TouchableOpacity`
  width: 53px;
  height: 53px;
  border-radius: 5px;
  border: 2px solid #49b3ba;

  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const EndCamera = styled.Text`
  margin: 20px;
  font-size: 16px;
  font-family: "Poppins_400Regular";
  color: #c81d25;
`;

export const Flip = styled.Text`
  align-self: center;
  margin: 10px;
  font-size: 14px;
  font-family: "Poppins_400Regular";
  color: white;
`;

export const CaptureButtom = styled.TouchableOpacity.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
})`
  border: 2px solid #496bba;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  background-color: #49b3ba;

  justify-content: center;
  align-items: center;
`;
