// imports de componentes
import { Botao } from "../../components/Botao/Index";
import { BotaoVoltar } from "../../components/BotaoVoltar/Index";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Index";
import { Link } from "../../components/Link/Index";
import { Logo } from "../../components/Logo/Style";
import { Titulo } from "../../components/Titulo/Index";

// imports importantes
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import da api
import api from "../../service/Service";

export const Login = ({
    navigation
}) => {
    // CONSTS
    const [email, setEmail] = useState(""); // email do usuário
    const [senha, setSenha] = useState(""); // senha do usuário
    const [carregando, setCarregando] = useState(false); // ativa o spinner do botão
    const [erro, setErro] = useState(false); // muda a cor dos inputs quando dá algum erro


    // FUNCTIONS
    const Login = async () => {
        setCarregando(true);

        try {
            await api.post("/Login", {
                email: email,
                password: senha
            }).then(async response => {
                setErro(false);

                await AsyncStorage.setItem("token", JSON.stringify(response.data));

                navigation.replace("Home");
            })
        } catch (error) {
            setErro(true);

            console.log(error);
        }

        setCarregando(false);
    }



    return (
        <Container>
            <BotaoVoltar
                onPress={() => navigation.replace("Inicio")}
            />

            <Logo
                source={require("../../assets/images/logo-whand.png")}
            />

            <Titulo
                text={"Login"}
                fontSize={18}
                textTransform={"uppercase"}
            />

            <Input
                placeholder={"Email:"}
                value={email}
                onChangeText={(txt) => setEmail(txt)}
                autoCapitalize={"none"}
                erro={erro}
            />

            <Input
                placeholder={"Senha:"}
                value={senha}
                onChangeText={(txt) => setSenha(txt)}
                autoCapitalize={"none"}
                erro={erro}
            />

            <Link
                color={"#323030"}
                text={"Esqueceu a senha?"}
                navigation={navigation}
                route={"RecuperarSenha"}
            />

            <Botao
                text={"Entrar"}
                bgColor={"#7BCAF7"}
                onPress={() => Login()}
                carregando={carregando}
            />

            <Link
                color={"#7BCAF7"}
                text={"Não tem conta? Crie uma agora mesmo!"}
                navigation={navigation}
                route={"Cadastro"}
            />
        </Container>
    );
}