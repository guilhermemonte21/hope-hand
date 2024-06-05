import styled from "styled-components/native";

const ContainersStyle = `
flex: 1;
flex-basis: auto;
background-color: white;
align-items: center;
gap: 20px;
`;

export const Container = styled.SafeAreaView`
  ${ContainersStyle}
  padding: 20px 0 20px 0;
`;

export const ContainerScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 20, 
    paddingTop: 20,
    gap: 20,
  },
})`
  ${ContainersStyle}
`;

export const ContainerMargin = styled.View`
  ${ContainersStyle}
  flex-shrink: 1;
  align-items: center;
  flex-grow: 0;
  margin: 0 auto;
  width: 90%;
  min-height: auto;
`;

export const ContainerCard = styled.View.attrs({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
})`
  backgroundColor: #E8E8E8;
  padding: 15px;
  borderRadius: 12px;
  width: 80%;
  height: 75px;
  gap: 0px;
`;


