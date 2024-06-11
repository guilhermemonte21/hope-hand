import React from "react";
import { ButtonStyled, ContainerCard, TextButton, TitleCard } from "./Style";

export const CardCause = ({ onPress }) => {
  return (
    <ContainerCard>
      <TitleCard>Rio Grande do Sul</TitleCard>
      <ButtonStyled onPress={onPress}>
        <TextButton>Ver Detalhes</TextButton>
      </ButtonStyled>
    </ContainerCard>
  );
};
