import { Container } from "../../components/Container/Style"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Logo } from "../../components/Logo/Style"
import { Titulo } from "../../components/Titulo/Index"
import { Input } from "../../components/Input/Index"
import { Botao } from "../../components/Botao/Index"

export const AlterarSenha = ({
    navigation
}) => {
    return (
        <Container>
            <BotaoVoltar />

            <Logo
                source={require("../../assets/images/logo-whand.png")}
            />

            <Titulo
                text={"Alterar senha"}
                fontSize={18}
                textTransform={"uppercase"}
            />

            <Input
                placeholder={"Senha:"}
            />

            <Input
                placeholder={"Confirme a senha:"}
            />

            <Botao
                text={"Cadastrar"}
                bgColor={"#7BCAF7"}
                onPress={() => navigation.replace("Login")}
            />
        </Container>
    )
}