import { Image } from "react-native";
import { HeaderStyled } from "./Style";
import { Botao } from "../Botao/Index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

// HEADER FIXADO NO TOPO PARA A PAGINA HOME
export const Header = ({ navigation }) => {
  const [logado, setLogado] = useState(false);

  async function profileLoad() {
    if ((await AsyncStorage.getItem("token")) != null) {
      setLogado(true);
    } else {
      setLogado(false);
    }

    console.log(await AsyncStorage.getItem("token"));
  }

  useEffect(() => {
    profileLoad();
  }, []);

  return (
    <HeaderStyled>
      <Image
        source={require("../../assets/images/logo-whand.png")}
        style={{ width: 80, height: 40, alignSelf: "flex-start" }}
      />

      <Botao
        onPress={() => {
          logado
            ? (navigation.navigate("Inicio"), AsyncStorage.removeItem("token"))
            : navigation.navigate("ListaOngs");
        }}
        width={100}
        text={logado ? "SAIR" : "DOAR"}
      />
    </HeaderStyled>
  );
};
