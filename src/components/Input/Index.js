import {
    BoxInput,
    InputStyled
} from "./Style"

export const Input = ({
    placeholder,
    width,
    height,
    border = true,
}) => {
    return (
        <BoxInput style={{ maxWidth: width, minHeight: height, maxHeight: height, backgroundColor: border ? "transparent" : "#E8E8E8", borderColor: border ? "#7ccfff" : "transparent"}}>
            <InputStyled
                placeholder={placeholder}
            />
        </BoxInput>
    )
}