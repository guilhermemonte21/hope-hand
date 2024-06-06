import {
    BoxInput,
    InputStyled
} from "./Style"

export const Input = ({
    placeholder,
    width = "85%",
    editable,
    fontFamily = "Poppins_400Regular"
}) => {
    return (
        <BoxInput
            style={{
                width: width,
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