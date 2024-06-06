import { TituloStyled } from "./Style";

export const Titulo = ({
  text,
  fontSize,
  textTransform,
  color,
  alignSelf,
  bold = false,
}) => {

  return (
    <TituloStyled
      style={{
        fontSize: fontSize,
        textTransform: textTransform,
        color: color,
        alignSelf: alignSelf,
        fontWeight: bold ? "bold" : "normal"
      }}
    >
      {text}
    </TituloStyled>
  );
};
