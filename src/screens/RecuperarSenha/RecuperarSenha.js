import { useState } from "react"
import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style.js"
import { Subtitulo } from "../../components/Subtitulo/Index.js"
import { Titulo } from "../../components/Titulo/Index"
import api from "../../service/Service.js"

export const RecuperarSenha = ({
    navigation
}) => {
    // CONSTS
    const [carregando, setCarregando] = useState(false);
    const [email, setEmail] = useState("")


    // FUNTIONS
    async function RecuperarSenha() {
        setCarregando(true);
        try {
            await api.post(`/RecuperarSenha?email=${email}`)
            navigation.replace("VerificarCodigo", { email: email })
        } catch (error) {
            console.log(error);
        }

        setCarregando(false)

    }

    // EFFECTS



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
                textTransform={"uppercase"}
            />

            <Subtitulo
                text={"Digite seu email para a recuperação de senha"}
            />

            <Input
                placeholder={"Email"} value={email} onChangeText={(txt) => setEmail(txt)}
            />

            <Botao
                text={"Continuar"}
                bgColor={"#7BCAF7"}
                onPress={() => RecuperarSenha()}
                carregando={carregando}
            />
        </Container>
    )
}