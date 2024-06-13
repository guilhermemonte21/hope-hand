import { useState } from "react"
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
    // CONSTS
    const [carregando, setCarregando] = useState(false);
    const [code, setCode] = useState("")



    // FUNTIONS
    const VerificarCodigo = () => {
        async function ValidateCode() {
            await api.post(`/RecuperarSenha/ValidarCodigoRecuperacaoSenha?email=${route.params.email}&code=${code}`)
        }
        setCarregando(true);

        setTimeout(() => {
            setCarregando(false)

            navigation.replace("AlterarSenha")
        }, 1000);
    }


    // EFFECTS



    return (
        <Container>
            <BotaoVoltar
                onPress={() => navigation.replace("Login")}
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
                onPress={() => VerificarCodigo()}
                carregando={carregando}
            />

            <Botao
                text={"Reenviar Código"}
                bgColor={"#B0B0B0"}
            />
        </Container>
    )
}