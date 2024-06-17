import { ActivityIndicator } from "react-native";
import {
  ContainerMargin,
  ContainerScroll,
} from "./../../components/Container/Style";
import { Noticia } from "./../../components/Noticia/Index";
import { Botao } from "./../../components/Botao/Index";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Titulo } from "./../../components/Titulo/Index";

import Ionicons from "@expo/vector-icons/Ionicons";

import { Group } from "./../../components/Group/Index";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Index";
import { userDecodeToken } from "../../utils/Auth";

export const Home = ({ navigation }) => {
  const [noticias, setNoticias] = useState([]);

  const [logado, setLogado] = useState(false);

  // Carrega e Armazena os dados da API
  async function profileLoad() {
    const token = await userDecodeToken();

    console.log("teste");
    if (token != null) {
      setLogado(true);
    } else {
      console.log("Falha na Profile Load (Perfil.js)");
    }
  }

  //OBTEM NOTICIA PELA API GRATUITA DO IBGE
  async function getNoticias() {
    try {
      const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=5"
      );
      setNoticias(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNoticias();
    profileLoad();
  }, []);

  return (
    <>
      <Header navigation={navigation} />
      <ContainerScroll>
        <ContainerMargin>
          {/* NOTICIA MOCKADA SOBRE O RIO GRANDE DO SUL */}
          <Noticia
            link={"https://sosenchentes.rs.gov.br/inicial"}
            height={200}
            title={"Rio Grande do Sul - Clique para ajudar"}
            image={require("../../assets/images/rs.png")}
          />
          <Group row>
            {logado ? (
              <Group>
                <Botao
                  width={80}
                  height={80}
                  radius={30}
                  onPress={() => navigation.navigate("Perfil")}
                  text={<Ionicons name="business" size={24} color="white" />}
                />
                <Titulo fontSize={12} text={"Perfil ONG"} />
              </Group>
            ) : (
              <Group>
                <Botao
                  width={80}
                  height={80}
                  onPress={() => navigation.navigate("ListaOngs")}
                  radius={30}
                  text={<FontAwesome name="list-ul" size={24} color="white" />}
                />
                <Titulo fontSize={12} text={"ONGs"} />
              </Group>
            )}
            <Group>
              <Botao
                width={80}
                height={80}
                radius={30}
                onPress={() => navigation.navigate("Sobre")}
                text={<AntDesign name="appstore1" size={24} color="white" />}
              />
              <Titulo fontSize={12} text={"Sobre"} />
            </Group>
          </Group>
          <Titulo bold fontSize={20} text={"Notícias IBGE"} />
          {noticias.length > 0 ? (
            <Group>
              {noticias.map((noticia) => (
                <Noticia
                  key={noticia.id}
                  link={noticia.link}
                  title={noticia.titulo}
                  height={150}
                  image={{
                    uri: `https://agenciadenoticias.ibge.gov.br/${
                      JSON.parse(noticia.imagens).image_intro
                    }`,
                  }}
                />
              ))}
            </Group>
          ) : (
            <ActivityIndicator style={{ height: 200 }} color={"#7bcaf7"} />
          )}
        </ContainerMargin>
      </ContainerScroll>
    </>
  );
};
