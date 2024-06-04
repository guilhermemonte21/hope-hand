import { ButtonStyled, TextButton } from "./Style"


export const Botao = ({
    navigation,
    route,
    text,
    bgColor
}) => {
    return (
        <ButtonStyled
            style={{
                backgroundColor: bgColor
            }}
            onPress={() => navigation.replace(route)}>
            <TextButton>{text}</TextButton>
        </ButtonStyled>
    )
}