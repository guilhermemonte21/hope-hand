import { Container, ContainerCard, ContainerMargin, ViewRow } from "../../components/Container/Style";
import { SubtitleStyled, TituloStyled } from "../../components/Titulo/Style";
import { PerfilImageWhite } from "../../components/Perfil/Perfil";
import {
  ButtonShort,
  ButtonStyled,
  TextButton,
} from "../../components/Botao/Style";
import { useState } from "react";
import { InformationModal } from "../../components/Modal/InformationModal/InformationModal";
import { InputLong, PerfilInput } from "../../components/Input/Style";
import { Input } from "../../components/Input/Index";
import { CardCause } from "../../components/CardCause/Index";
import { SubtitleCard, TitleCard } from "../../components/CardCause/Style";
import { Botao } from "./../../components/Botao/Index";
import { Group } from "../../components/Group/Index"

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
      <TitleCard>Nome da ONG</TitleCard>

      {/* Subtitullo da Ong */}
      <ContainerMargin>
      <SubtitleCard>
        Acreditamos que todos merecem a chance de viver uma vida plena e digna.
        Trabalhamos incansavelmente para criar oportunidades que permitam que
        indivíduos e comunidades superem desafios e alcancem seu potencial
        máximo. Através de nossas iniciativas, buscamos reduzir a desigualdade,
        promover a justiça social e garantir que cada pessoa tenha acesso aos
        recursos necessários para uma vida digna e saudável.
      </SubtitleCard>

      <InformationModal
        navigation={navigation}
        visible={showInformationModal}
        setShowModalStethoscope={setShowInformationModal}
        />

      {logado == false ? (
        <>
          <CardCause />
          <CardCause />
          <CardCause />
        </>
      ) : (
        <Group>
          <Input placeholder="Nome: " border={false} height={65} />
          <Input placeholder="CNPJ: " border={false} height={65} />

          <Group row >
            <Input placeholder="CEP: " border={false} height={75} />
            <Input placeholder="UF: " border={false} height={75} />
          </Group>

          <Botao
            // navigation={navigation}
            // route={"Login"}
            width="100%"
            text={"Editar"}
            bgColor={"#7BCAF7"}
            />

          <Botao
            // navigation={navigation}
            // route={"Login"}
            width="100%"
            text={"Sair da Conta"}
            bgColor={"#7BCAF7"}
            />


        </Group>
      )}

      </ContainerMargin> 
    </Container>
  );
};
