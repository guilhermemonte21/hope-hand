import { BackHandler, Image } from "react-native";
import { Botao } from "../../components/Botao/Index";
import { Container } from "../../components/Container/Style";
import { Group } from "../../components/Group/Index";

export const Inicio = ({ navigation }) => {
  return (
    <Container style={{ justifyContent: "space-between" }}>
      <Image
        source={require("../../assets/images/logo-whand.png")}
        style={{ width: 200, height: 100 }}
      />

      <Group gap={20}>
        <Botao
          height={80}
          text={"Entrar como ONG"}
          onPress={() => navigation.replace("Login")}
        />

        <Botao
          height={80}
          text={"Entrar como Doador"}
          onPress={() => navigation.replace("Home")}
        />
      </Group>

      <Botao
        text={"Sair do aplicativo"}
        bgColor="transparent"
        textColor="#7bcaf7"
        onPress={() => BackHandler.exitApp()}
      />
    </Container>
  );
};
