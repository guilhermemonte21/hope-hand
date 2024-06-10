import { Image } from "react-native";
import { Container } from "../../components/Container/Style";
import { Titulo } from "./../../components/Titulo/Index";
import { ContainerMargin } from "./../../components/Container/Style";
import { Rodape } from "./../../components/Rodape/Index";
import { BotaoVoltar } from './../../components/BotaoVoltar/Index';

export const Sobre = ({ navigation }) => {
  return (
    <Container>
      <BotaoVoltar onPress={() => navigation.goBack()} />
      <Image
        source={require("../../assets/images/logo-whand.png")}
        style={{ width: 70, height: 35 }}
      />
      <Image
        source={require("../../assets/images/sobre.jpg")}
        style={{ width: "90%", height: 250, borderRadius: 20 }}
      />
      <ContainerMargin>
        <Titulo text={"Sobre"} fontSize={20} alignSelf={"flex-start"} />

        <Titulo
          text={
            "A Hope Hand é uma organização não governamental dedicada a transformar vidas e construir um futuro melhor para comunidades carentes ao redor do mundo. Fundada em 2023, nossa missão é promover o desenvolvimento sustentável, a inclusão social e a dignidade humana através de projetos focados em educação, saúde, empoderamento comunitário e assistência emergencial."
          }
        />

        <Titulo text={"Contato"} fontSize={20} alignSelf={"flex-start"} />

        <Titulo
          text={
            "Email: contato@hopehand.org\nTelefone: +55 (XX) XXXX-XXXX\nEndereço: Rua Exemplo, 123, Bairro, Cidade, Estado."
          }
          alignSelf={"flex-start"}
        />

      </ContainerMargin>
      <Rodape />
    </Container>
  );
};
