import { useState } from "react"
import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style"
import { Titulo } from "../../components/Titulo/Index"

export const Cadastro = ({
    navigation
}) => {
    // CONSTS
    const [carregando, setCarregando] = useState(false);


    // FUNCTIONS
    const Cadastrar = () => {
        setCarregando(true);

        setTimeout(() => {
            setCarregando(false)

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
                text={"Cadastro"}
                fontSize={18}
                textTransform={"uppercase"}
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
                text={"Cadastrar"}
                bgColor={"#7BCAF7"}
                onPress={() => Cadastrar()}
                carregando={carregando}
            />
        </Container>
    )
}