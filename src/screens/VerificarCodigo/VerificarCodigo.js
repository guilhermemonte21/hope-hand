import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container } from "../../components/Container/Style"
import { InputCode } from "../../components/InputCode/Index"
import { Logo } from "../../components/Logo/Style"
import { Subtitulo } from "../../components/Subtitulo/Index"
import { Titulo } from "../../components/Titulo/Index"

export const VerificarCodigo = ({
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
                text={"Verificar Código"}
                fontSize={18}
                textTransform={"uppercase"}
            />

            <Subtitulo
                text={"Digite o código enviado no seu Email"}
            />

            <InputCode />

            <Botao
                route={"Login"}
                text={"Confirmar"}
                bgColor={"#7BCAF7"}
                onPress={() => navigation.replace("AlterarSenha")}
            />

            <Botao
                text={"Reenviar Código"}
                bgColor={"#B0B0B0"}
            />
        </Container>
    )
}