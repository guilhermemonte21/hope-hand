import styled from "styled-components/native";

const ContainersStyle = `
  flex: 1;
  flex-basis: auto;


gap: 20px;
background-color: white;

`;

export const Container = styled.SafeAreaView`
  ${ContainersStyle}
  align-items: center;
  padding: 20px 0 20px 0;
  alignItems: center;
`;

export const ContainerScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: "center",
    gap: 20,
    alignItems: "center"
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

export const ViewRow = styled.View.attrs({
}
)`
  border: 1px solid red;
  width: 80%;
  height: 75px;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const ViewCenter = styled.View.attrs({
}
)`
margin: 160px;
justifyContent: center;
alignItems: center;
`;

export const ViewEnd = styled.View.attrs({
}
)`
gap: 20px;
width: 100%;
top: 160px;
bottom: 0px;
alignItems: center;
justifyContent: center;
`;
