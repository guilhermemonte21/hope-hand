import {
    BoxInput,
    InputStyled
} from "./Style"

export const Input = ({
    placeholder,
    width = "85%",
  height = 45,
    editable,
    fontFamily = "Poppins_400Regular"
}) => {
    return (
        <BoxInput
            style={{
                maxWidth: width, minHeight: height, maxHeight: height, backgroundColor: border ? "transparent" : "#E8E8E8", borderColor: border ? "#7ccfff" : "transparent"
                fontFamily: fontFamily
            }}
        >

            <InputStyled
                placeholder={placeholder}
                editable={editable}
            />
        </BoxInput>
    )
}