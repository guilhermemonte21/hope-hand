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
import Toast from "react-native-toast-message";
import { ShowToastStyled } from "../../components/Toast/ToastStyled";

export const Login = ({
    navigation
}) => {
    // CONSTS
    const [email, setEmail] = useState("baptista2017henrique@gmail.com"); // email do usuário
    const [senha, setSenha] = useState("henrique"); // senha do usuário
    const [carregando, setCarregando] = useState(false); // ativa o spinner do botão
    const [erro, setErro] = useState(false); // muda a cor dos inputs quando dá algum erro
    const [erroTexto, setErroTexto] = useState(""); // diz qual é o erro que está ocorrendo

    const [contaErroToast, setContaErroToast] = useState(0); // seta se a notificação é repetida demais
    const [indexErro, setIndexErro] = useState(0); // index da mensagem de erro


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

                // função para ativar a notificação toast e customizar ela;
                // caso o usuário consiga logar
                ShowToastStyled({
                    type: "success", // seta como estado de sucesso
                    text1: "Login realizado", // título da notificação
                    text1Style: {
                        color: "#7bcaf7"
                    }, // estiliza o título da notificação
                    text2: "Boas vindas!", // subttítulo da notificação
                    visibilityTime: 3000, // tempo de exibição da notificação
                    swipeable: false // seta se a funcionalidade de mexer a notificação funciona
                })

                setTimeout(() => {
                    setCarregando(false);

                    navigation.replace("Home");
                }, 3000)
            })
        } catch (error) {
            setErro(true);

            if (contaErroToast == 3) {
                setContaErroToast(0)

                // array com uma respota simples, apenas para mais interação
                let subtext = [
                    'Tente recuperar sua senha em "Esqueceu sua senha?"',
                    "Se você não tem uma conta, cadastre-se já!"
                ]

                return (
                    // função para ativar a notificação toast e customizar ela;
                    // caso o usuário não consiga logar;
                    // caso o usuário tente se logar várias vezes sem parar
                    ShowToastStyled({
                        type: "error", // seta como estado de erro
                        text1: "Login não realizado", // título da notificação
                        text1Style: {
                            color: "#E34949"
                        }, // estiliza o título da notificação
                        text2: subtext[indexErro], // subttítulo da notificação
                        visibilityTime: 5000, // tempo de exibição da notificação
                        swipeable: false // seta se a funcionalidade de mexer a notificação funciona
                    }),
                    indexErro == 0 ?
                        setIndexErro(1)
                        :
                        setIndexErro(0),
                    setTimeout(() => {
                        setCarregando(false)
                    }, 5000)
                )
            }

            setContaErroToast(contaErroToast + 1);

            // função para ativar a notificação toast e customizar ela;
            // caso o usuário não consiga logar
            ShowToastStyled({
                type: "error",
                text1: "Login não realizado",
                text1Style: {
                    color: "#E34949"
                },
                text2: "Verifique se o email e a senha estão corretos"
            });

            setErroTexto("Email ou senha incorretos");

            setCarregando(false);
        }
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

            {
                erro ?
                    <Titulo
                        text={erroTexto}
                        color={"#E34949"}
                        textAlign={"center"}
                    />
                    :
                    null
            }

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
                route={"CadastroUsuario"}
            />

            <Toast />
        </Container>
    );
}