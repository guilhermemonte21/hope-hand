import { ActivityIndicator } from "react-native";
import { ButtonStyled, TextButton } from "./Style";

//COMPONENTE BOTAO DINAMICO COM PROPS PARA ESTILIZAÇÃO
export const Botao = ({
  text,
  onPress,
  bgColor = "#7bcaf7",
  radius = 12,
  width = "85%",
  height = 45,
  textColor = "white",
  carregando = false
}) => {
  return (
    <ButtonStyled
      disabled={carregando}
      style={{
        backgroundColor: bgColor,
        borderRadius: radius,
        maxWidth: width,
        minHeight: height,
        maxHeight: height,
      }}
      onPress={onPress}
    >
      <TextButton style={{ color: textColor }}>
        {
          carregando ?
            <ActivityIndicator
              color={"#FFF"}
              size={24}
            />
            :
            text
        }
      </TextButton>
    </ButtonStyled>
  );
};
