import { Image } from "react-native";
import { HeaderStyled } from "./Style";
import { Botao } from "../Botao/Index";

export const Header = ({ navigation }) => {
  return (
    <HeaderStyled>
      <Image
        source={require("../../assets/images/logo-whand.png")}
        style={{ width: 80, height: 40, alignSelf: "flex-start" }}
      />

      <Botao
        onPress={() => navigation.navigate("ListaOngs")}
        width={100}
        text={"DOAR"}
      />
    </HeaderStyled>
  );
};
