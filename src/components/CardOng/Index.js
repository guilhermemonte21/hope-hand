import { CardStyled, CardImage, CardTitle } from "./Style";
import { Botao } from "./../Botao/Index";

import { Group } from "../Group/Index";
import { Titulo } from "./../Titulo/Index";

export const CardOng = ({ ong, navigation }) => {
  return (
    <CardStyled>
      <CardImage source={{ uri: ong.photo }} />
      <Group>
        <CardTitle>{ong.name}</CardTitle>
        <Botao
          onPress={() => navigation.navigate("Perfil", { ongId: ong.id })}
          text={"Ver mais"}
          radius={20}
        />
      </Group>
    </CardStyled>
  );
};
