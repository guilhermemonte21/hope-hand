import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style"
import { Titulo } from "../../components/Titulo/Index"

export const Cadastro = ({
    navigation
}) => {
    return (
        <Container>
            <BotaoVoltar
                navigation={navigation}
                route={"Login"}
            />

            <Logo
                source={require("../../assets/images/logo-whand.png")}
            />

            <Titulo
                text={"Cadastro"}
                fontSize={18}
            />

            <Input
                placeholder={"Email:"}
            />

            <Input
                placeholder={"Senha:"}
            />

            <Input
                placeholder={"Confirme a senha:"}
            />

            <Botao
                navigation={navigation}
                route={"Login"}
                text={"Cadastrar"}
                bgColor={"#7BCAF7"}
            />
        </Container>
    )
}