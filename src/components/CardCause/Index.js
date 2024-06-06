import React, { useState } from "react";
import { InformationModal } from "../Modal/InformationModal/InformationModal";
import { ButtonStyled, ContainerCard, TextButton, TitleCard } from "./Style";

export const CardCause = ({ navigation }) => {
  const [showModalInformation, setShowModalInformation] = useState(false);

  return (
    <>
      <ContainerCard>
        <TitleCard>Rio Grande do Sul</TitleCard>
        <ButtonStyled onPress={() => setShowModalInformation(true)}>
          <TextButton>Ver Detalhes</TextButton>
        </ButtonStyled>
      </ContainerCard>

      <InformationModal
        navigation={navigation}
        visible={showModalInformation}
        setShowInformationModal={setShowModalInformation}
      />
    </>
  );
};
