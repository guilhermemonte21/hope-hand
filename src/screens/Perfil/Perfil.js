import { ContainerMargin, ContainerScroll } from "../../components/Container/Style";
import { PerfilImageWhite } from "../../components/Perfil/ImagePerfil";
import { ButtonUploadImage } from "../../components/Botao/Style";
import { useEffect, useState } from "react";
import { InformationModal } from "../../components/Modal/InformationModal/InformationModal";
import { Input } from "../../components/Input/Index";
import { CardLocalizacao } from "../../components/CardLocalizacao/Index";
import { SubtitleCard, TitleCard } from "../../components/CardLocalizacao/Style";
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
import { Titulo } from "../../components/Titulo/Index";

export const Perfil = ({ navigation, route }) => {
  const [nome, setNome] = useState(""); // Exibe a Tela de Acordo com o Usuário
  const [logado, setLogado] = useState(false); // Exibe a Tela de Acordo com o Usuário
  const [edit, setEdit] = useState(false); // Muda os Inputs Caso sejam editaveis ou não
  const [carregando, setCarregando] = useState(false); // ativa o spinner do botão
  const [erro, setErro] = useState(false); // muda a cor dos inputs quando dá algum erro
  const [erroTexto, setErroTexto] = useState(""); // diz qual é o erro que está ocorrendo

  const [showInformationModal, setShowInformationModal] = useState(false); // Abre o modal de informações
  const [photo, setPhoto] = useState(null); // Armazena a Foto 
  const [showCamera, setShowCamera] = useState(false); // Abre o Modal de Camera
  const [modalOpen, setModalOpen] = useState(false); // Muda a visibilidade do Modal de Camera
  // Armazena os Dados
  const [inputs, setInputs] = useState({
    name: "",
    cnpj: "",
    link: "",
    description: ""
  });

  const [locais, setLocais] = useState([]);
  const [ong, setOng] = useState(null);

  const ongId = route.params.ongId;

  // Função de Verificação
  const verificarInputs = () => {
    if (inputs.name.trim().length < 2 || inputs.name.trim().length > 40) {
      setErro(true);
      setErroTexto("O Nome deve ter entre 2 e 40 caracteres!");
      return false;
    }
    else if (inputs.cnpj.trim().length < 14) {
      setErro(true);
      setErroTexto("O CNPJ deve Conter 14 caracteres!");
      return false;
    }
    else if (inputs.link.trim().length < 2 || inputs.link.trim().length > 40) {
      setErro(true);
      setErroTexto("O Link deve ter entre 2 e 40 caracteres");
      return false;
    }
    else if (inputs.description.trim().length < 2 || inputs.description.trim().length > 500) {
      setErro(true);
      setErroTexto("A Descrição deve ter entre 2 e 500 caracteres");
      return false;
    }

    // Adicione outras verificações conforme necessário
    // ...
    setCarregando(false);
    setErro(false);
    return true;
  }

  // Buscar Dados da Ong Pelo ID
  async function GetOng() {
    try {
      const response = await api.get(`Ong/BuscarPorId?id=${ongId}`);
      console.log(response.data);
      setInputs(response.data.ong);
      setPhoto(response.data.ong.photo); // Atualiza a URL da foto
    } catch (error) {
      console.log("Deu Catch, falha na Get Ong (Perfil.js)");
    }
  }

  // Edita os Dados Recebidos da Ong
  async function PutOng() {
    if (!verificarInputs()) {
      return;
    }

    const token = await userDecodeToken();

    try {
      await api.put(`/Ong/Editar`, {
        id: ongId,
        name: inputs.name,
        cnpj: inputs.cnpj,
        link: inputs.link,
        description: inputs.description,
      }, {
        headers: {
          'Authorization': `Bearer ${token.token}`
        }
      });
      GetOng();
    } catch (error) {
      console.log(error);
      console.log("Deu Catch, falha na Put Ong (Perfil.js)");
    }
  }

  // Altera a Photo no Blob Storage
  async function OngPhoto() {
    const token = await userDecodeToken();
    try {
      const formData = new FormData();
      formData.append("IdOng", ongId)
      formData.append("Arquivo", {
        name: `image.${photo.split(".")[1]}`,
        type: `image/${photo.split(".")[1]}`,
        uri: photo,
      });

      await api.put(`/Ong/AlterarFoto`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token.token}`
        }
      });

      GetOng()

    } catch (error) {
      console.error("Deu Catch, falha na Ong Photo (Perfil.js)", error);
    }
  }

  useEffect(() => {
    GetOng();
  }, []);

  async function getLocais() {
    try {
      const response = await api.get(`/Endereco/ListarPorOng?idOng=${ongId}`);
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
      setInCamera={setShowCamera}
    />
  ) : (
    <ContainerScroll>
      <BotaoVoltar onPress={() => navigation.replace("Home")} />

      <ViewImageCircle style={{ borderColor: erro ? "#E34949" : "#3FA7E4" }}>
        {photo ? (
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
      <TitleCard>{inputs && inputs.name ? inputs.name : 'Nome não encontrado!'}</TitleCard>
      <ContainerMargin>
        <SubtitleCard>
          Acreditamos que todos merecem a chance de viver uma vida plena e digna.
          Trabalhamos incansavelmente para criar oportunidades que permitam que
          indivíduos e comunidades superem desafios e alcancem seu potencial
          máximo. Através de nossas iniciativas, buscamos reduzir a desigualdade,
          promover a justiça social e garantir que cada pessoa tenha acesso aos
          recursos necessários para uma vida digna e saudável.
        </SubtitleCard>

        {logado ? (
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

          inputs ? (
            <Group>

              {
                erro ?
                  <Titulo
                    text={erroTexto}
                    color={"#E34949"}
                    textAlign={"center"}
                  />
                  :
                  null
              }

              <Input
                placeholder={inputs.name || "Nome Indefinido!"}
                value={inputs.name} 
                onChangeText={(txt) => setInputs({ ...inputs, name: txt })}
                color={edit ? "black" : "gray"}
                editable={edit}
                width="100%"
                border={edit}
                height={65}
                erro={erro}
              />

              <Input
                value={inputs.cnpj || "CNPJ Indefinido!"}
                onChangeText={(txt) => setInputs({ ...inputs, cnpj: txt })}
                color={edit ? "black" : "gray"}
                editable={edit}
                width="100%"
                border={edit}
                height={65}
                erro={erro}
              />

              <Input
                value={inputs.link || "Link Indefinido"}
                onChangeText={(txt) => setInputs({ ...inputs, link: txt })}
                color={edit ? "black" : "gray"}
                editable={edit}
                width="100%"
                border={edit}
                height={75}
                erro={erro}
              />
              <Input
                value={inputs.description || "Descrição Indefinida"}
                onChangeText={(txt) => setInputs({ ...inputs, description: txt })}
                color={edit ? "black" : "gray"}
                editable={edit}
                width="100%"
                border={edit}
                height={100}
                erro={erro}
              />
            </Group>
          ) : <ActivityIndicator style={{ height: 200 }} />

        }
        <Group>
          <Botao
            width="100%"
            text={"Editar"}
            bgColor={"#7BCAF7"}
            onPress={() => { setEdit(!edit); edit ? PutOng() : null }} // Deve Mudar os inputs e Editar os Dados do Usuário
            carregando={carregando}
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
        carregando={carregando}
      />
      <ModalPhoto
        photo={photo}
        OngPhoto={OngPhoto}
        setInCamera={setShowCamera}
        visible={modalOpen}
        setOpenModal={setModalOpen}
        carregando={carregando}
      />
    </ContainerScroll>
  );
};
