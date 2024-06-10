import styled from "styled-components/native";

export const PerfilImageWhite = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px; /* metade da largura e altura */
`;

export const ViewImageCircle = styled.View`
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px;
  border-radius: 100px; /* metade da largura e altura */
  border: 2px solid #3FA7E4;
  overflow: hidden; /* para garantir que a imagem não transborde */
  backgroundColor: transparent;
`;
