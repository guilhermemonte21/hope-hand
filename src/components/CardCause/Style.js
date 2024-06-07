import styled from "styled-components/native";

export const ContainerCard = styled.View.attrs({
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  })`
    backgroundColor: #E8E8E8;
    padding: 15px;
    borderRadius: 12px;
    width: 100%;
    height: 75px;
    gap: 0px;
  `;

  export const TitleCard = styled.Text`
  margin: 10px;
  color: #323030;
  fontSize: 16px;
  font-family: "Kanit_400Regular";
`

  export const TitleSpace = styled.Text`
  margin: 10px;
  color: #323030;
  fontSize: 16px;
  font-family: "Kanit_400Regular";
  marginTop: 20px;
  marginBottom: 20px;
`

export const SubtitleCard = styled.Text`
    lineHeight: 18px;
    text-align: justify;
    color: #323030;
    font-family: "Kanit_300Light";
`

export const TextButton = styled.Text`
  color: #FFFFFF;
  font-size: 14px;
  font-family: "Kanit_400Regular";
`;

export const ButtonStyled = styled.TouchableOpacity`
  margin: 5px;
  width: 30%;
  height: 40px;
  backgroundColor: #7BCAF7;
  borderRadius: 20px;
  justify-content: center;
  align-items: center;

`;
