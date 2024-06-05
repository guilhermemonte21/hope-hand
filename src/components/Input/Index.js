import {
    BoxInput,
    InputStyled
} from "./Style"

export const Input = ({
    placeholder,
    
}) => {
    return (
        <BoxInput>
            <InputStyled
                placeholder={placeholder}
            />
        </BoxInput>
    )
}