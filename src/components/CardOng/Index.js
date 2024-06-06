import { CardStyled, CardImage, CardTitle } from "./Style";
import { Botao } from "./../Botao/Index";
import { Group } from "./../Group/Index";


export const CardOng = ({ nome, image }) => {
  return (
    <CardStyled>
      <CardImage source={image} />
      <Group>
        <CardTitle>{nome}</CardTitle>
        <Botao text={"Ver mais"} radius={20} />
      </Group>
    </CardStyled>
  );
};
