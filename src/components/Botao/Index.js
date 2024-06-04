import { ButtonStyled, TextButton } from "./Style"


export const Botao = ({
    text,
    onPress
}) => {
    return (
        <ButtonStyled>
            <TextButton>{text}</TextButton>
        </ButtonStyled>
    )
}