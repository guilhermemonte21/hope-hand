import styled from "styled-components/native";

const Modal = `
background-color: #D9D9D9;
align-items: center;
`;

export const ModalForm = styled.SafeAreaView`
  ${Modal}
  width: 90%;
  height: 80%;
  borderRadius: 20px;
  backgroundColor: #FFFFFF;
`;

export const InfoModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.30);
`