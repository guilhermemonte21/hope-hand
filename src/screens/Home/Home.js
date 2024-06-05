import { Image } from "react-native";
import { Container, ContainerMargin } from "./../../components/Container/Style";
import { Noticia } from "./../../components/Noticia/Index";
import { Botao } from "./../../components/Botao/Index";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Titulo } from "./../../components/Titulo/Index";
import { Group } from "../../components/Group/Index";

export const Home = ({ navigation }) => {
  return (
    <Container>
      <ContainerMargin>
        <Image
          source={require("../../assets/images/logo-whand.png")}
          style={{ width: 80, height: 40, alignSelf: "flex-start" }}
        />
        <Noticia
          height={200}
          title={"Noticia principal"}
          image={require("../../assets/images/logo-whand.png")}
        />
        <Group row>
          <Group>
            <Botao
              width={80}
              height={80}
              radius={30}
              text={<FontAwesome name="user" size={24} color="white" />}
            />
            <Titulo fontSize={12} text={"Perfil"} />
          </Group>
          <Group>
            <Botao
              width={80}
              height={80}
              radius={30}
              text={<FontAwesome name="map-marker" size={24} color="white" />}
            />
            <Titulo fontSize={12} text={"ONGs"} />
          </Group>
          <Group>
            <Botao
              width={80}
              height={80}
              radius={30}
              text={<AntDesign name="appstore1" size={24} color="white" />}
            />
            <Titulo fontSize={12} text={"Sobre"} />
          </Group>
        </Group>
        <Group row>
          <Noticia
            height={300}
            width={"50%"}
            image={require("../../assets/images/logo-whand.png")}
          />
          <Group>
            <Noticia image={require("../../assets/images/logo-whand.png")} />

            <Noticia image={require("../../assets/images/logo-whand.png")} />
          </Group>
        </Group>
      </ContainerMargin>
    </Container>
  );
};
