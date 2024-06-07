import { Container } from "../../components/Container/Style"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Logo } from "../../components/Logo/Style"
import { Titulo } from "../../components/Titulo/Index"
import { Input } from "../../components/Input/Index"
import { Botao } from "../../components/Botao/Index"
import { useState } from "react"

export const AlterarSenha = ({
    navigation
}) => {
    // CONSTS
    const [carregando, setCarregando] = useState(false);


    // FUNCTIONS
    const AlterarSenha = () => {
        setCarregando(true);

        setTimeout(() => {
            setCarregando(false);

            navigation.replace("Login");
        }, 1000);
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
                text={"Continuar"}
                bgColor={"#7BCAF7"}
                onPress={() => AlterarSenha()}
                carregando={carregando}
            />
        </Container>
    )
}