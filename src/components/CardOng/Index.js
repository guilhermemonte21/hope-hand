import { CardStyled, CardImage, CardTitle } from "./Style";
import { Botao } from "./../Botao/Index";

import { Group } from "../Group/Index";

export const CardOng = ({ nome, image, navigation }) => {
  return (
    <CardStyled>
      <CardImage source={image} />
      <Group>
        <CardTitle>{nome}</CardTitle>
        <Botao onPress={() => navigation.navigate("Perfil")} text={"Ver mais"} radius={20} />
      </Group>
    </CardStyled>
  );
};
