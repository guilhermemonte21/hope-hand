import { TituloStyled } from "./Style";

export const Titulo = ({
  text,
  fontSize,
  textTransform,
  color,
  alignSelf
}) => {

  return (
    <TituloStyled
      style={{
        fontSize: fontSize,
        textTransform: textTransform,
        color: color,
        alignSelf: alignSelf,

      }}
    >
      {text}
    </TituloStyled>
  );
};
