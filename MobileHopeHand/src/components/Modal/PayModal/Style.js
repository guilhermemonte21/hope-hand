import styled from "styled-components/native";

const Modal = `
background-color: #D9D9D9;
align-items: center;
justifyContent: 'center';
`;

export const ModalForm = styled.SafeAreaView`
  ${Modal}
  gap: 20px;
  width: 90%;
  height: auto;
  padding: 25px;
  border-radius: 20px;
  background-color: #ffffff;
`;

export const InfoModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
