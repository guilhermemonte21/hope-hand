// import de componentes
import { useState } from "react"
import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style"
import { Titulo } from "../../components/Titulo/Index"

export const CadastroOng = ({
    navigation
}) => {
    // CONSTS
    const [erro, setErro] = useState(false);
    const [carregando, setCarregando] = useState(false);



    return (
        <Container>
            <BotaoVoltar
                onPress={() => navigation.replace("Login")}
            />

            <Logo
                source={require("../../assets/images/logo-whand.png")}
            />

            <Titulo
                text={"Cadastro - ong"}
                fontSize={18}
                textTransform={"uppercase"}
            />

            <Input
                placeholder={"Email:"}
                autoCapitalize={"none"}
                erro={erro}
                onChangeText={(txt) => setEmail(txt)}
            />

            <Input
                placeholder={"Senha:"}
                autoCapitalize={"none"}
                erro={erro}
                onChangeText={(txt) => setSenha(txt)}
            />

            <Input
                placeholder={"Confirme a senha:"}
                autoCapitalize={"none"}
                erro={erro}
                onChangeText={(txt) => setConfirmaSenha(txt)}
            />

            <Botao
                text={"Cadastrar"}
                bgColor={"#7BCAF7"}
                onPress={() => Cadastrar()}
                carregando={carregando}
            />
        </Container>
    )
}