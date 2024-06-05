import { ButtonStyled, TextButton } from "./Style";

export const Botao = ({
  text,
  onPress,
  bgColor = "#7bcaf7",
  radius = 12,
  width = "85%",
  height = 45,
  textColor = "white",
}) => {
  return (
    <ButtonStyled
      style={{
        backgroundColor: bgColor,
        borderRadius: radius,
        maxWidth: width,
        minHeight: height,
        maxHeight: height,
      }}
      onPress={onPress}
    >
      <TextButton style={{ color: textColor }}>{text}</TextButton>
    </ButtonStyled>
  );
};
