import { TituloStyled } from "./Style";

export const Titulo = ({ text, fontSize, alignSelf }) => {
  return (
    <TituloStyled
      style={{
        fontSize: fontSize,
        alignSelf: alignSelf,
      }}
    >
      {text}
    </TituloStyled>
  );
};
