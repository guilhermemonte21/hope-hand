import { Container } from "../../components/Container/Style";
import { Titulo } from "./../../components/Titulo/Index";
import { CardOng } from "./../../components/CardOng/Index";
import { ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";
import api from "./../../service/Service";
import { ContainerMargin } from "./../../components/Container/Style";
import { Input } from "../../components/Input/Index";

export const ListaOngs = ({ navigation }) => {
  const [carregando, setCarregando] = useState(false);

  const [ongs, setOngs] = useState();

  // Guarda o nome/cidade inserida no input de busca
  const [searchOngText, setSearchOngText] = useState();
  // ONGs retornadas pelo input de busca (nome/cidade)
  const [ongsSearched, setOngsSearched] = useState();

  async function getOngs() {
    try {
      const response = await api.get("/Ong/Listar");

      setOngs(response.data);
    } catch (error) {
      console.log(error);
    }
    setCarregando(false);
  }

  useEffect(() => {
    getOngs();
  }, []);

  // Busca as ONGs no banco pelo Nome ou Cidade dela, com base nos valores inseridos no input de busca
  function filterAndSearchOngs() {
    // Função para retirada de acentos dos textos
    const removeAccents = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (searchOngText != null && searchOngText != undefined) {

      setOngsSearched(
        ongs.filter(
          // Busca pelo nome das ONGs - sofre tratamento antes da pesquisa (deixa em minúsculo e retira acentos)
          (ong) =>
            ong.ong != null
              ? (
                removeAccents(ong.ong.name.toLowerCase()).includes(removeAccents(searchOngText.toLowerCase()))
              ) : null
                ||
                ong.endereco != null ?
                // Busca pela cidade das ONGs - sofre tratamento antes da pesquisa (deixa em minúsculo e retira acentos)
                removeAccents(ong.endereco.city.toLowerCase()).includes(
                  removeAccents(searchOngText.toLowerCase())
                ) : null
        )
      );


      // setOngsSearched(ongs.filter(
      //   // Busca pelo nome das ONGs - sofre tratamento antes da pesquisa (deixa em minúsculo e retira acentos)
      //   (ong) => removeAccents(ong.ong.name.toLowerCase()).includes(removeAccents(searchOngText.toLowerCase()))
      //     // Busca pela cidade das ONGs - sofre tratamento antes da pesquisa (deixa em minúsculo e retira acentos)
      //     || removeAccents(ong.endereco.city.toLowerCase()).includes(removeAccents(searchOngText.toLowerCase()))
      // ));
    }
  }

  // Executado toda vez que for alterado o valor do input de busca
  useEffect(() => {
    filterAndSearchOngs();
  }, [searchOngText])

  return (
    <Container>
      <ContainerMargin>
        <Titulo text={"Escolha uma ONG para doar"} fontSize={20} />

        <Input
          placeholder={"Insira o nome da ONG ou cidade..."}
          value={searchOngText}
          autoCapitalize={"none"}
          erro={""}
          onChangeText={(txt) => setSearchOngText(txt)}
        />

        <Titulo color={"gray"} textAlign={"center"}
          text={
            "Essas são as Ongs que optaram por usar o nosso aplicativo para impulsionar suas doações"
          }
          fontSize={14}
        />
      </ContainerMargin>

      {carregando ? (
        <ActivityIndicator style={{ flex: 1 }} />
      ) : (
        <FlatList
          contentContainerStyle={{
            gap: 20,
            alignItems: "center",
            width: "100%",
            padding: "5%",
          }}
          data={searchOngText == undefined || ongsSearched == [] ? ongs : ongsSearched}
          key={(item) => item.ong.id}
          keyExtractor={(item) => item.ong.id}
          renderItem={({ item }) => (
            <CardOng key={item.ong.id} navigation={navigation} ong={item.ong} />
          )}
        />
      )}
    </Container>
  );
};
