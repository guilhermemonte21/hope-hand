import styled from "styled-components/native";

const ContainersStyle = `
  flex-basis: auto;

  gap: 20px;
  background-color: white;
`;

export const Container = styled.SafeAreaView`
  ${ContainersStyle}
  flex: 1;

  padding: 30px 0 30px 0;
  align-items: center;
  justify-content: center;
`;

export const ContainerScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between"
  },
})`
  ${ContainersStyle}
`;

export const ContainerMargin = styled.View`
  ${ContainersStyle}
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  margin: 0 auto;
  width: 85%;
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
justify-content: center;
align-items: center;
`;

export const ViewEnd = styled.View.attrs({
}
)`
gap: 20px;
width: 100%;
top: 160px;
bottom: 0px;
align-items: center;
justify-content: center;
`;
