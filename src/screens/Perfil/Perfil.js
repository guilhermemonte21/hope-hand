import { Container, ContainerCard } from "../../components/Container/Style";
import { SubtitleStyled, TituloStyled } from "../../components/Titulo/Style";
import { PerfilImageWhite } from "../../components/Perfil/Perfil";
import {
  ButtonShort,
  ButtonStyled,
  TextButton,
} from "../../components/Botao/Style";
import { useState } from "react";
import { InformationModal } from "../../components/Modal/InformationModal";
import { InputLong, PerfilInput } from "../../components/Input/Style";

export const Perfil = ({ navigation }) => {
  const [logado, setLogado] = useState(false);
  const [showInformationModal, setShowInformationModal] = useState(false);

  return (
    <Container>
      {/* Botão */}

      {/* Imagem da Ong */}
      <PerfilImageWhite
        source={require("../../assets/images/Perfil-White.png")}
      />
      {/* Nome da Ong */}
      <TituloStyled>Nome da ONG</TituloStyled>

      {/* Subtitullo da Ong */}
      <SubtitleStyled>
        Acreditamos que todos merecem a chance de viver uma vida plena e digna.
        Trabalhamos incansavelmente para criar oportunidades que permitam que
        indivíduos e comunidades superem desafios e alcancem seu potencial
        máximo. Através de nossas iniciativas, buscamos reduzir a desigualdade,
        promover a justiça social e garantir que cada pessoa tenha acesso aos
        recursos necessários para uma vida digna e saudável.
      </SubtitleStyled>

      <InformationModal
        navigation={navigation}
        visible={showInformationModal}
        setShowModalStethoscope={setShowInformationModal}
      />

      {logado == false ? (
        <>
        
          {/* TRANSFORMAR TODO ESSE CARD EM UM COMPONENTE UNICO, JA QUE VAI SE REPETIR */}

          {/* Causas da Ong */}
          <ContainerCard>
            {/* Titulo da Causa */}
            <TituloStyled>Rio Grande do Sul</TituloStyled>

            {/* Botão do Modal */}
            <ButtonShort onPress={() => setShowInformationModal(true)}>
              <TextButton>Ver Detalhes</TextButton>
            </ButtonShort>
          </ContainerCard>
        </>
      ) : (
        <>
          <InputLong placeholder="Nome: "></InputLong>
        </>
      )}
    </Container>
  );
};
