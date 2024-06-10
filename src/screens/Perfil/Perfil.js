import { ContainerMargin, ContainerScroll } from "../../components/Container/Style";
import { PerfilImageWhite } from "../../components/Perfil/ImagePerfil";
import { ButtonUploadImage } from "../../components/Botao/Style";
import { useState } from "react";
import { InformationModal } from "../../components/Modal/InformationModal/InformationModal";
import { Input } from "../../components/Input/Index";
import { CardCause } from "../../components/CardCause/Index";
import { SubtitleCard, TitleCard } from "../../components/CardCause/Style";
import { Botao } from "./../../components/Botao/Index";
import { Group } from "../../components/Group/Index"
import { ViewImageCircle } from "../../components/Perfil/ImagePerfil";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BotaoVoltar } from "../../components/BotaoVoltar/Index";
import { CameraModal } from "../../components/Camera/CameraModal";

export const Perfil = ({ navigation }) => {
  const [logado, setLogado] = useState(false);
  const [showInformationModal, setShowInformationModal] = useState(false);

  const [photo, setPhoto] = useState(null)

  const [uriCameraCapture, setUriCameraCapture] = useState("");
  const [showCameraModal, setShowCameraModal] = useState(false);

  return (
    <ContainerScroll>

      {/* Botão */}
      <BotaoVoltar
        onPress={() => navigation.replace("Home")}
      />

      {/* Imagem da Ong */}
      <ViewImageCircle>
        <PerfilImageWhite source={require("../../assets/images/Perfil-White.png")} />
      </ViewImageCircle>

      <ButtonUploadImage onPress={() => setShowCameraModal(true)}>
        <MaterialCommunityIcons name="camera-enhance" size={22} color="white" />
      </ButtonUploadImage>

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



        {logado == false ? (
          <Group>
            <CardCause />
            <CardCause />
            <CardCause />
          </Group>
        ) : (
          <Group>
            <Input placeholder="Nome: " width="100%" border={false} height={65} />
            <Input placeholder="CNPJ: " width="100%" border={false} height={65} />

            <Group row >
              <Input placeholder="CEP: " width="100%" border={false} height={75} />
              <Input placeholder="UF: " width="100%" border={false} height={75} />
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

      <InformationModal
        navigation={navigation}
        visible={showInformationModal}
        setShowModalStethoscope={setShowInformationModal}
      />

      <CameraModal
        setPhoto={setPhoto}
        getMediaLibrary={true}
        visible={showCameraModal}
        setUriCameraCapture={setUriCameraCapture}
        setShowModalCancel={setShowCameraModal}
      />
    </ContainerScroll>
  );
};
