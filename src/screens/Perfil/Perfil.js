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
import { ActivityIndicator, FlatList } from "react-native";
import api from "../../service/Service";

export const Perfil = ({ navigation, route }) => {
  const [logado, setLogado] = useState(false);
  const [edit, setEdit] = useState(false);
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [uriCameraCapture, setUriCameraCapture] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    cnpj: "",
    link: "",
    description: ""
  })

  const [locais, setLocais] = useState([]);

  const [ong, setOng] = useState(null);

  const ongId = route.params.ongId;

  // Carrega e Armazena os dados da API
  // async function profileLoad() {
  //   const token = await userDecodeToken();

  //   if (token != null) {
  //     setOng(token);
  //     setLogado(true)
  //   }
  //   else {
  //     console.log("Falha na Profile Load (Perfil.js)")
  //   }
  // }

  // Buscar Dados da Ong Pelo ID
  async function GetOng() {
    try {
      const response = await api.get(`Ong/BuscarPorId?id=${ongId}`);
      console.log(response.data);
      setInputs(response.data.ong)
    } catch (error) {
      console.log("Deu Catch, falha na Get Ong (Perfil.js)")
    }
  }

  // Edita os Dados Recebidos da Ong
  async function PutOng() {
    const token = await userDecodeToken();

    try {
      await api.put(`Ong/Editar`, {
        ong: {

          id: ongId,
          name: inputs.name,
          cnpj: inputs.cnpj,
          link: inputs.link,
          descripition: inputs.description,
        }
      }, {
        headers: {
          'Authorization': `Bearer ${token.token}`
        }
      });
      GetOng()
    } catch (error) {
      console.log(error);
      console.log("Deu Catch, falha na Put Ong (Perfil.js)")
    }
  }

  // Altera a Photo no Blob Storage
  // async function OngPhoto() {
  //   const formData = new FormData();
  //   formData.append("Arquivo", {
  //     uri: uriCameraCapture,
  //     name: `image.${uriCameraCapture.split(".")[1]}`,
  //     type: `image/${uriCameraCapture.split(".")[1]}`,
  //   });
  //   await api.put(`/Ong/AlterarFoto?id=${ongId}`, formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     }
  //   }).then(async response => {
  //     console.log(response)
  //     setOng({
  //       ...ong,
  //       foto: uriCameraCapture
  //     })
  //   }).catch(error => {
  //     console.log(error, "Deu Catch, falha na Ong Photo (Perfil.js)");
  //   });
  // }


  useEffect(() => {
    // profileLoad();
    GetOng();
  }, []);


  async function getLocais() {
    try {
      const response = await api.get(`/Endereco/ListarPorOng?idOng=${ongId}`);
      // console.log(response.data);
      setLocais(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // getLocais();
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
      <TitleCard>{inputs != null && inputs.name}</TitleCard>
      <ContainerMargin>
        <SubtitleCard>
          Acreditamos que todos merecem a chance de viver uma vida plena e digna.
          Trabalhamos incansavelmente para criar oportunidades que permitam que
          indivíduos e comunidades superem desafios e alcancem seu potencial
          máximo. Através de nossas iniciativas, buscamos reduzir a desigualdade,
          promover a justiça social e garantir que cada pessoa tenha acesso aos
          recursos necessários para uma vida digna e saudável.
        </SubtitleCard>

        {logado == true ? (
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
            renderItem={({ item }) => (
              <CardLocalizacao local={item} onPress={() => navigation.replace("Mapa", { local: item })} />
            )}
          />
        ) :

          inputs != null ? (<Group>
            <Input value={inputs.name} onChangeText={(txt) => setInputs({ ...inputs, name: txt })} color={edit ? "black" : "gray"} editable={edit} width="100%" border={edit} height={65} />
            <Input value={inputs.cnpj} onChangeText={(txt) => setInputs({ ...inputs, cnpj: txt })} color={edit ? "black" : "gray"} editable={edit} width="100%" border={edit} height={65} />
            <Input value={inputs.link} onChangeText={(txt) => setInputs({ ...inputs, link: txt })} color={edit ? "black" : "gray"} editable={edit} width="100%" border={edit} height={75} />
            <Input value={inputs.description} onChangeText={(txt) => setInputs({ ...inputs, description: txt })} color={edit ? "black" : "gray"} editable={edit} width="100%" border={edit} height={150} />
          </Group>) : <ActivityIndicator style={{ height: 200 }} />



        }
        <Group>

          <Botao
            width="100%"
            text={"Editar"}
            bgColor={"#7BCAF7"}
            onPress={() => { setEdit(!edit); edit ? PutOng() : null }} // Deve Mudar os inputs e Editar os Dados do Usuário
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
