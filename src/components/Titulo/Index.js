import { TituloStyled } from "./Style";

export const Titulo = ({
  text,
  fontSize,
  textTransform,
  color,
  alignSelf,
  bold = false,
  textAlign
}) => {

  return (
    <TituloStyled
      style={{
        fontSize: fontSize,
        textTransform: textTransform,
        color: color,
        alignSelf: alignSelf,
        fontWeight: bold ? "bold" : "normal",
        textAlign: textAlign
      }}
    >
      {text}
    </TituloStyled>
  );
};
