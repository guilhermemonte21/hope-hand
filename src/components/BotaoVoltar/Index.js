import { Icon, IconBox } from "./Style";

export const BotaoVoltar = ({
    onPress
}) => {
    return (

        <IconBox onPress={onPress}>
            <Icon
                source={require("../../assets/images/btvoltar.png")}
            />
        </IconBox>
    )
}

