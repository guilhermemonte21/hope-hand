import { Container } from "../../components/Container/Style";
import { Titulo } from "./../../components/Titulo/Index";
import { CardOng } from "./../../components/CardOng/Index";
import { ActivityIndicator, FlatList } from "react-native";
import { useState } from "react";

const listaOngs = [
  {
    nome: "ONG 1",
    image: require("../../assets/images/logo-whand.png"),
  },
  {
    nome: "ONG 2",
    image: require("../../assets/images/logo-whand.png"),
  },
  {
    nome: "ONG 3",
    image: require("../../assets/images/logo-whand.png"),
  },
];

export const ListaOngs = ({ navigation }) => {
  const [carregando, setCarregando] = useState(true);

  const [ongs, setOngs] = useState();

  async function getOngs() {
    try {
    } catch (error) {}
    setCarregando(false);
  }

  return (
    <Container>
      <Titulo text={"Escolha uma ONG para doar"} fontSize={20} />

      {carregando ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={{
            gap: 20,
            alignItems: "center",
            width: "100%",
            padding: "5%",
          }}
          data={listaOngs}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <CardOng
              navigation={navigation}
              nome={item.nome}
              image={item.image}
            />
          )}
        />
      )}
    </Container>
  );
};
