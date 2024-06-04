import { Icon, IconBox } from "./Style"

export const BotaoVoltar = ({
    navigation,
    route,
}) => {
    return (
        <IconBox onPress={() => navigation.replace(route)}>
            <Icon
                source={require("../../assets/images/btvoltar.png")}
            />
        </IconBox>
    )
}