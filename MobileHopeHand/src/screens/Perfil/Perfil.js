import {
  Container,
  ContainerMargin,
  ContainerScroll,
} from "../../components/Container/Style";
import { PerfilImageWhite } from "../../components/Perfil/ImagePerfil";
import { ButtonUploadImage } from "../../components/Botao/Style";
import { useEffect, useState } from "react";
import { Input } from "../../components/Input/Index";
import { CardLocalizacao } from "../../components/CardLocalizacao/Index";
import {
  SubtitleCard,
  TitleCard,
} from "../../components/CardLocalizacao/Style";
import { Botao } from "./../../components/Botao/Index";
import { Group } from "../../components/Group/Index";
import { ViewImageCircle } from "../../components/Perfil/ImagePerfil";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BotaoVoltar } from "../../components/BotaoVoltar/Index";
import { CameraModal } from "../../components/Camera/CameraModal";
import { ModalPhoto } from "../../components/Camera/ModalPhoto/ModalPhoto";
import { userDecodeToken } from "../../utils/Auth";
import { ActivityIndicator, FlatList } from "react-native";
import api from "../../service/Service";
import { Titulo } from "../../components/Titulo/Index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayModal } from "./../../components/Modal/PayModal/PayModal";

// Verificação de Inputs
const verificarInputs = (inputs) => {
  if (inputs.name.trim().length < 2 || inputs.name.trim().length > 40) {
    return "O Nome deve ter entre 2 e 40 caracteres!";
  }
  if (inputs.cnpj.trim().length !== 14) {
    return "O CNPJ deve conter 14 caracteres!";
  }
  // if (inputs.link.trim().length < 2 || inputs.link.trim().length > 40) {
  //   return "O Link deve ter entre 2 e 40 caracteres!";
  // }
  // if (inputs.description.trim().length < 2 || inputs.description.trim().length > 500) {
  //   return "A Descrição deve ter entre 2 e 500 caracteres!";
  // }
  return "";
};

export const Perfil = ({ navigation, route }) => {
  const [logado, setLogado] = useState(false); // Exibe a Tela de Acordo com o Usuário
  const [edit, setEdit] = useState(false); // Muda os Inputs Caso sejam editaveis ou não
  const [carregando, setCarregando] = useState(false); // ativa o spinner do botão
  const [erro, setErro] = useState(false); // muda a cor dos inputs quando dá algum erro
  const [erroTexto, setErroTexto] = useState(""); // diz qual é o erro que está ocorrendo
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [photo, setPhoto] = useState(null); // Armazena a Foto
  const [showCamera, setShowCamera] = useState(false); // Abre o Modal de Camera
  const [modalOpen, setModalOpen] = useState(false); // Muda a visibilidade do Modal de Camera
  // Armazena os Dados
  const [inputs, setInputs] = useState({
    name: "",
    cnpj: "",
    link: "",
    description: "",
  });

  const [locais, setLocais] = useState([]);

  // Função de Verificação
  const handleVerifyInputs = () => {
    const error = verificarInputs(inputs);
    if (error) {
      setErro(true);
      setErroTexto(error);
      return false;
    }
    setErro(false);
    setErroTexto("");
    return true;
  };

  // Carrega e Armazena os dados da API
  async function profileLoad() {
    if ((await AsyncStorage.getItem("token")) != null) {
      setLogado(true);
    } else {
      setLogado(false);
    }
  }

  // Buscar Dados da Ong Pelo ID
  async function GetOng() {
    let ongId;
    if ((await AsyncStorage.getItem("token")) == null) {
      ongId = route.params.ongId;
    } else {
      const token = await userDecodeToken();
      ongId = token.ongId;
    }
    try {
      const response = await api.get(`Ong/BuscarPorId?id=${ongId}`);
      setInputs(response.data.ong);
      setPhoto(response.data.ong.photo); // Atualiza a URL da foto
    } catch (error) {
      console.log(error);
      console.log("Deu Catch, falha na Get Ong (Perfil.js)");
    }
  }

  // Edita os Dados Recebidos da Ong
  async function PutOng() {
    if (!handleVerifyInputs()) {
      return;
    }

    try {
      const token = await userDecodeToken();
      await api.put(
        `Ong/Editar`,
        {
          id: token.ongId,
          name: inputs.name,
          cnpj: inputs.cnpj,
          link: inputs.link,
          description: inputs.description,
        },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      GetOng();
    } catch (error) {
      console.log(error);
      console.log("Deu Catch, falha na Put Ong (Perfil.js)");
    }
  }

  async function userTokenLogout() {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Inicio");
  }

  // Altera a Photo no Blob Storage
  async function OngPhoto() {
    const token = await userDecodeToken();
    try {
      const ongId = token.ongId;

      const formData = new FormData();
      formData.append("IdOng", ongId);
      formData.append("Arquivo", {
        name: `image.${photo.split(".")[1]}`,
        type: `image/${photo.split(".")[1]}`,
        uri: photo,
      });

      await api.put(`/Ong/AlterarFoto`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token.token}`,
        },
      });

      GetOng();
    } catch (error) {
      console.error("Deu Catch, falha na Ong Photo (Perfil.js)", error);
    }
  }

  useEffect(() => {
    profileLoad();
    GetOng();
    getLocais();
  }, []);

  //buscar locais da ong
  async function getLocais() {
    if ((await AsyncStorage.getItem("token")) != null) {
      return;
    }
    try {
      const ongId = route.params.ongId;

      const response = await api.get(`/Endereco/ListarPorOng?idOng=${ongId}`);
      setLocais(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return showCamera ? (
    <CameraModal
      photo={photo}
      setModalOpen={setModalOpen}
      setPhoto={setPhoto}
      getMediaLibrary={true}
      visible={showCamera}
      inCamera={showCamera}
      setInCamera={setShowCamera}
    />
  ) : logado ? (
    <ContainerScroll style={{ paddingTop: 20 }}>
      <BotaoVoltar
        onPress={() => (!logado ? navigation.goBack() : navigation.goBack())}
      />

      <ViewImageCircle style={{ borderColor: erro ? "#E34949" : "#3FA7E4" }}>
        <PerfilImageWhite source={{ uri: photo }} />
      </ViewImageCircle>
      <ButtonUploadImage onPress={() => setShowCamera(true)}>
        <MaterialCommunityIcons name="camera-enhance" size={22} color="white" />
      </ButtonUploadImage>
      <TitleCard>
        {inputs && inputs.name ? inputs.name : "Nome não encontrado!"}
      </TitleCard>
      <ContainerMargin style={{ paddingBottom: 30 }}>
        <SubtitleCard>
          {inputs.description != ""
            ? inputs.description
            : "Descrição Indefinida!"}
        </SubtitleCard>

        {inputs != null ? (
          <>
            <Group>
              {erro && (
                <Titulo
                  text={erroTexto}
                  color={"#E34949"}
                  textAlign={"center"}
                />
              )}

              <Input
                value={inputs.name}
                placeholder={"Nome Indefinido!"}
                onChangeText={(txt) => setInputs({ ...inputs, name: txt })}
                color={edit ? "black" : "gray"}
                editable={edit}
                width="100%"
                border={edit}
                height={65}
                erro={erro}
              />

              <Input
                value={inputs.cnpj}
                placeholder={"CNPJ Indefinido!"}
                onChangeText={(txt) => setInputs({ ...inputs, cnpj: txt })}
                color={edit ? "black" : "gray"}
                editable={edit}
                width="100%"
                border={edit}
                height={65}
                erro={erro}
              />

              <Input
                value={inputs.link}
                placeholder={"Link Indefinido"}
                onChangeText={(txt) => setInputs({ ...inputs, link: txt })}
                color={edit ? "black" : "gray"}
                editable={edit}
                width="100%"
                border={edit}
                height={75}
                erro={erro}
              />
              <Input
                value={inputs.description}
                placeholder={"Descrição Indefinida"}
                onChangeText={(txt) =>
                  setInputs({ ...inputs, description: txt })
                }
                color={edit ? "black" : "gray"}
                editable={edit}
                width="100%"
                border={edit}
                height={100}
                erro={erro}
              />
            </Group>
            <Group>
              <Botao
                width="100%"
                text={"Editar"}
                bgColor={"#7BCAF7"}
                onPress={() => {
                  setEdit(!edit);
                  edit ? PutOng() : null;
                }}
                carregando={carregando}
              />

              <Botao
                width="100%"
                text={"Sair da Conta"}
                bgColor={"#7BCAF7"}
                onPress={() => {
                  userTokenLogout();
                  navigation.replace("Login"); // Deve Voltar a Página de Login
                }}
              />
            </Group>
          </>
        ) : (
          <ActivityIndicator style={{ height: 200 }} />
        )}
      </ContainerMargin>
      <ModalPhoto
        photo={photo}
        OngPhoto={OngPhoto}
        setInCamera={setShowCamera}
        visible={modalOpen}
        setOpenModal={setModalOpen}
        carregando={carregando}
      />
    </ContainerScroll>
  ) : (
    <Container>
      <BotaoVoltar onPress={() => navigation.goBack()} />

      <ViewImageCircle style={{ borderColor: erro ? "#E34949" : "#3FA7E4" }}>
        <PerfilImageWhite source={{ uri: photo }} />
      </ViewImageCircle>

      <TitleCard>
        {inputs && inputs.name ? inputs.name : "Nome não encontrado!"}
      </TitleCard>
      <ContainerMargin style={{ paddingBottom: 30 }}>
        <SubtitleCard>
          {inputs.description != ""
            ? inputs.description
            : "Descrição Indefinida!"}
        </SubtitleCard>
      </ContainerMargin>
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
          <CardLocalizacao
            local={item}
            onPress={() =>
              navigation.replace("Mapa", {
                local: item,
                ongId: route.params.ongId,
              })
            }
          />
        )}
      />
      <Botao text={"Doar"} onPress={() => setShowModalPayment(true)} />
      <PayModal
        navigation={navigation}
        visible={showModalPayment}
        setShowInformationModal={setShowModalPayment}
      />
    </Container>
  );
};
