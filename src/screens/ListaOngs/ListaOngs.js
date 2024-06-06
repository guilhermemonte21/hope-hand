import { Container } from "../../components/Container/Style";
import { Titulo } from "./../../components/Titulo/Index";
import { CardOng } from "./../../components/CardOng/Index";
import { ContainerMargin } from "./../../components/Container/Style";
import { FlatList } from "react-native";

const ongs = [
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
  return (
    <Container>
      <Titulo
        text={"Lista de ongs"}
        fontSize={20}
        textTransform={"uppercase"}
      />

      <FlatList
        contentContainerStyle={{ gap: 20, alignItems: "center", width: "100%", padding: "5%" }}
        data={ongs}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <CardOng nome={item.nome} image={item.image} />
        )}
      />
    </Container>
  );
};
