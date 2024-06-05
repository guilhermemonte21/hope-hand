import { TituloStyled } from "./Style";

export const Titulo = ({ text, fontSize }) => {
  return (
    <TituloStyled
      style={{
        fontSize: fontSize,
      }}
    >
      {text}
    </TituloStyled>
  );
};
