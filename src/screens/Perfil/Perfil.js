import { ContainerMargin, ContainerScroll } from "../../components/Container/Style";
import { PerfilImageWhite } from "../../components/Perfil/ImagePerfil";
import { ButtonUploadImage } from "../../components/Botao/Style";
import { useEffect, useState } from "react";
import { InformationModal } from "../../components/Modal/InformationModal/InformationModal";
import { Input } from "../../components/Input/Index";
import { CardLocalizacao } from "../../components/CardLocalizacao/Index";
import {
  SubtitleCard,
  TitleCard,
} from "../../components/CardLocalizacao/Style";
import { Botao } from "./../../components/Botao/Index";
import { Group } from "../../components/Group/Index"
import { ViewImageCircle } from "../../components/Perfil/ImagePerfil";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BotaoVoltar } from "../../components/BotaoVoltar/Index";
import { CameraModal } from "../../components/Camera/CameraModal";
import { ModalPhoto } from "../../components/Camera/ModalPhoto/ModalPhoto";
import { userDecodeToken } from "../../utils/Auth";
import { FlatList } from "react-native";
import api from "../../service/Service";

export const Perfil = ({ navigation, route }) => {
  const [logado, setLogado] = useState(false);
  const [edit, setEdit] = useState(false);
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [uriCameraCapture, setUriCameraCapture] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [getOng, setGetOng] = useState({});
  const [putOng, setPutOng] = useState({});


  const [ong, setOng] = useState({});

  // Carrega e Armazena os dados da API
  async function profileLoad() {
    const token = await userDecodeToken();

    if (token != null) {
      setOng(token);
      setLogado(true)
    }
    else {
      console.log("Falha na Profile Load (Perfil.js)")
    }
  }

  // Buscar Dados da Ong Pelo ID
  async function GetOng() {
    const token = await userDecodeToken();
    try {
      if (token.role != null) {
        const response = await api.get(`Ong/BuscarPorId?id=${token.id}`);
        setGetOng(response.data)
      } else {
        console.log("Deu Else, falha na Get Ong (Perfil.js)")
      }
    } catch (error) {
      console.log("Deu Catch, falha na Get Ong (Perfil.js)")
    }
  }

  // Edita os Dados Recebidos da Ong
  async function PutOng() {
    const token = await userDecodeToken();

    try {
      if (token.role != null) {
        const response = await api.put(`Ong/Editar?id=${token.id}`);
        setPutOng(response.data)
      } else {
        console.log("Deu Else, falha na Put Ong (Perfil.js)")
      }
    } catch (error) {
      console.log("Deu Catch, falha na Put Ong (Perfil.js)")
    }
  }

  // Altera a Photo no Blob Storage
  async function OngPhoto() {
    const formData = new FormData();
    formData.append("Arquivo", {
      uri: uriCameraCapture,
      name: `image.${uriCameraCapture.split(".")[1]}`,
      type: `image/${uriCameraCapture.split(".")[1]}`,
    });
    await api.put(`/Ong/AlterarFoto?id=${ong.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(async response => {
      console.log(response)
      await setOng({
        ...ong,
        foto: uriCameraCapture
      })
    }).catch(error => {
      console.log(error, "Deu Catch, falha na Ong Photo (Perfil.js)");
    });
  }


  useEffect(() => {
    profileLoad();
    GetOng();
  }, []);

  useEffect(() => {
    console.log(ong)
  }, [ong]);

  const [locais, setLocais] = useState([]);

  const ongId = route.params.ongId;

  async function getLocais() {
    try {
      const response = await api.get(`/Endereco/ListarPorOng?idOng=${ongId}`);
      console.log(response.data);
      setLocais(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLocais();
  }, []);

  return showCamera ? (
    <CameraModal
      photo={photo}
      setModalOpen={setModalOpen}
      setPhoto={setPhoto}
      getMediaLibrary={true}
      visible={showCamera}
      inCamera={showCamera}
      setUriCameraCapture={setUriCameraCapture}
      setInCamera={setShowCamera}
    />
  ) : (
    <ContainerScroll>
      <BotaoVoltar onPress={() => navigation.replace("Home")} />

      <ViewImageCircle>
        {photo != null ? (
          <PerfilImageWhite source={{ uri: photo }} />
        ) : (
          <PerfilImageWhite
            source={require("../../assets/images/Perfil-White.png")}
          />
        )}
      </ViewImageCircle>

      <ButtonUploadImage onPress={() => setShowCamera(true)}>
        <MaterialCommunityIcons name="camera-enhance" size={22} color="white" />
      </ButtonUploadImage>
      <TitleCard>Nome da ONG</TitleCard>
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
          <FlatList
            contentContainerStyle={{
              gap: 20,
              alignItems: "center",
              width: "100%",
              padding: "5%",
            }}
            data={locais}
            key={(item) => item.id}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <CardLocalizacao local={item} onPress={() => navigation.replace("Mapa", { local: item })} />
            )}
          />
        ) : (
          
           
              <Group>
                <Input placeholder="Nome:" editable={false} width="100%" border={edit} height={65} />
                <Input placeholder="CNPJ: " editable={false} width="100%" border={edit} height={65} />
                <Group row>
                  <Input placeholder="CEP: " editable={false} width="100%" border={edit} height={75} />
                  <Input placeholder="UF: " editable={false} width="100%" border={edit} height={75} />
                </Group>
              </Group>
            
        )}
        <Group>

          <Botao
            width="100%"
            text={"Editar"}
            bgColor={"#7BCAF7"}
            onPress={() => { setEdit(!edit), PutOng(); }} // Deve Mudar os inputs e Editar os Dados do Usuário
          />

          <Botao
            width="100%"
            text={"Sair da Conta"}
            bgColor={"#7BCAF7"}
            onPress={() => {
              // userTokenLogout(); Deve Deslogar
              navigation.replace("Login"); // Deve Voltar a Página de Login
            }}
          />

        </Group>
      </ContainerMargin>
      <InformationModal
        navigation={navigation}
        visible={showInformationModal}
        setShowModalStethoscope={setShowInformationModal}
      />
      <ModalPhoto
        photo={photo}
        setInCamera={setShowCamera}
        visible={modalOpen}
        setOpenModal={setModalOpen}
      />
    </ContainerScroll>
  );
};
