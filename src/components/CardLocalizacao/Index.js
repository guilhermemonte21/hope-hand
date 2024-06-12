import React from "react";
import { ButtonStyled, ContainerCard, TextButton, TitleCard } from "./Style";
import { Titulo } from "./../Titulo/Index";
import { Group } from "./../Group/Index";
import { Botao } from "../Botao/Index";

export const CardLocalizacao = ({ onPress, local }) => {
  return (
    <ContainerCard>
      <Group alignItems="start" gap={0}>
        <TitleCard>{local.city}</TitleCard>
        <Titulo color={"gray"} text={local.state} fontSize={12} />
      </Group>
      <Botao text={"Ver Local"}  width="50%" onPress={onPress}/>
    </ContainerCard>
  );
};
