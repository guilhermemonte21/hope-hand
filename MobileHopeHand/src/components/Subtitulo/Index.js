import { Subtitle, TextBox } from "./Style"

export const Subtitulo = ({
    text
}) => {
    return (
        <TextBox>
            <Subtitle>{text}</Subtitle>
        </TextBox>
    )
}