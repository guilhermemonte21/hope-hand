import { TituloStyled } from "./Style";

export const Titulo = ({
  text,
  fontSize,
  textTransform,
  color
}) => {
  return (
    <TituloStyled
      style={{
        fontSize: fontSize,
        textTransform: textTransform,
        color: color
      }}
    >
      {text}
    </TituloStyled>
  );
};
