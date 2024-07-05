import { Icon, IconBox } from "./Style";

export const BotaoVoltar = ({
    onPress,
    top = 50
}) => {
    return (
        <IconBox style={{top: top}} onPress={onPress}>
            <Icon
                source={require("../../assets/images/btvoltar.png")}
            />
        </IconBox>
    )
}

