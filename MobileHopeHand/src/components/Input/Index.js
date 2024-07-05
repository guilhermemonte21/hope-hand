import { Titulo } from "../Titulo/Index";
import { BoxInput, InputStyled } from "./Style";

// COMPONENTE INPUT DINAMICO COM PROPS PARA ESTILIZAR
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
  color = "rgba(50,48,48, 1)",
  autoCapitalize,
  erro,
  secureTextEntry = false,
  label = "",
  keyboardType,
  maxLength,
  onFocus,
}) => {
  return (
    <BoxInput style={{ height: label != "" ? height + 10 : height }}>
      {label != "" && (
        <Titulo text={label} fontSize={14} alignSelf={"flex-start"} />
      )}
      <InputStyled
      secureTextEntry={secureTextEntry}
        style={{
          maxWidth: width,
          minHeight: height,
          maxHeight: height,
          alignSelf: "center",
          backgroundColor: border ? "transparent" : "#E8E8E8",
          color: color,
          fontFamily: fontFamily,
          borderColor: erro ? "#E34949" : border ? "#7ccfff" : "transparent",
        }}
        placeholder={placeholder}
        editable={editable}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        onFocus={onFocus}
      />
    </BoxInput>
  );
};
