import {
  NoticiaBlur,
  NoticiaImage,
  NoticiaStyled,
  NoticiaTitle,
} from "./Style";

export const Noticia = ({
  image,
  title = "",
  width = "100%",
  height = 100,
}) => {
  return (
    <NoticiaStyled style={{ width: width, height: height }}>
      <NoticiaImage style={{ width: width, height: height }} source={image} />
      <NoticiaBlur />
      {title != "" && <NoticiaTitle>{title}</NoticiaTitle>}
    </NoticiaStyled>
  );
};
