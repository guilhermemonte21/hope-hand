import { BoxInput, InputStyled } from "./Style";

export const Input = ({
  placeholder,
  width = "85%",
  height = 45,
  editable,
  onChangeText,
  value,
  border = true,
  fontFamily = "Poppins_400Regular",
  placeholderTextColor = "rgba(50,48,48, 0.5)",
}) => {
  return (
    <BoxInput
      style={{
        maxWidth: width,
        minHeight: height,
        maxHeight: height,
        backgroundColor: border ? "transparent" : "#E8E8E8",
        borderColor: border ? "#7ccfff" : "transparent",
        fontFamily: fontFamily,
      }}
    >
      <InputStyled
        onChangeText={onChangeText} value={value} placeholder={placeholder} editable={editable} placeholderTextColor={placeholderTextColor} />
    </BoxInput>
  );
};
