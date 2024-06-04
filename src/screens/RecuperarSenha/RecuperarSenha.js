import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style.js"
import { Subtitulo } from "../../components/Subtitulo/Index.js"
import { Titulo } from "../../components/Titulo/Index"

export const RecuperarSenha = ({
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
                text={"Recuperar Senha"}
                fontSize={18}
            />

            <Subtitulo
                text={"Digite seu email para a recuperação de senha"}
            />

            <Input
                placeholder={"Email"}
            />

            <Botao
                navigation={navigation}
                route={"VerificarCodigo"}
                text={"Continuar"}
                bgColor={"#7BCAF7"}
            />
        </Container>
    )
}