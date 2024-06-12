import { useState } from "react";
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
  color = "rgba(50,48,48, 1)",
  autoCapitalize,
  erro,
  keyboardType,
  maxLength
}) => {
  return (
    <BoxInput
      style={{
        maxWidth: width,
        minHeight: height,
        maxHeight: height,
        backgroundColor: border ? "transparent" : "#E8E8E8",
        borderColor: erro ? "#E34949" : border ? "#7ccfff" : "transparent",
        color: color,
        fontFamily: fontFamily,
      }}
    >
      <InputStyled
        placeholder={placeholder}
        editable={editable}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
      />
    </BoxInput>
  );
};