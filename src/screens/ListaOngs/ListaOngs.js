import { Container } from "../../components/Container/Style";
import { Titulo } from "./../../components/Titulo/Index";
import { CardOng } from "./../../components/CardOng/Index";
import { ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";
import api from "./../../service/Service";
import { ContainerMargin } from "./../../components/Container/Style";

export const ListaOngs = ({ navigation }) => {
  const [carregando, setCarregando] = useState(false);

  const [ongs, setOngs] = useState();

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

  return (
    <Container>
      <ContainerMargin>
        <Titulo text={"Escolha uma ONG para doar"} fontSize={20} />
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
          data={ongs}
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
