import { useState } from "react"
import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style.js"
import { Subtitulo } from "../../components/Subtitulo/Index.js"
import { Titulo } from "../../components/Titulo/Index"
import api from "../../service/Service.js"
import { ShowToastStyled } from "../../components/Toast/ToastStyled.js"
import Toast from "react-native-toast-message"

export const RecuperarSenha = ({
    navigation
}) => {
    // CONSTS
    const [carregando, setCarregando] = useState(false); // ativa o spinner do botão
    const [email, setEmail] = useState(""); // email do usuário
    const [erro, setErro] = useState(false); // muda a cor dos inputs quando dá algum erro
    const [erroTexto, setErroTexto] = useState(""); // diz qual é o erro que está ocorrendo

    const [contaErroToast, setContaErroToast] = useState(0); // seta se a notificação
    const [indexErro, setIndexErro] = useState(0); // index da mensagem de erro


    // FUNTIONS
    async function RecuperarSenha() {
        setCarregando(true);
        try {
            setErro(false);

            await api.post(`/RecuperarSenha?email=${email}`)
                .then(() => {
                    setCarregando(false);

                    navigation.replace("VerificarCodigo", { email: email })
                });
        } catch (error) {
            setErro(true);

            if (contaErroToast == 3) {
                setContaErroToast(0)

                // array com uma respota simples, apenas para mais interação
                let subtext = [
                    "Talvez seu email é inexistente, cadastre-se nesse caso!",
                    "Insira um email que já foi cadastrado!"
                ]

                return (
                    // função para ativar a notificação toast e customizar ela;
                    // caso o usuário não consiga logar;
                    // caso o usuário tente se logar várias vezes sem parar
                    ShowToastStyled({
                        type: "error", // seta como estado de erro
                        text1: "Email inválido", // título da notificação
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
                );
            }

            setContaErroToast(contaErroToast + 1);

            // função para ativar a notificação toast e customizar ela;
            // caso o usuário não consiga logar
            ShowToastStyled({
                type: "error",
                text1: "Email inválido",
                text1Style: {
                    color: "#E34949"
                },
                text2: "Verifique se o email está correto"
            });

            setErroTexto("Email inválido");

            setCarregando(false);
        }
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
                text={"Recuperar Senha"}
                fontSize={18}
                textTransform={"uppercase"}
            />

            <Subtitulo
                text={"Digite seu email para a recuperação de senha"}
            />

            <Input
                placeholder={"Email"}
                value={email}
                onChangeText={(txt) => setEmail(txt)}
                erro={erro}
                autoCapitalize={"none"}
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
                text={"Continuar"}
                bgColor={"#7BCAF7"}
                onPress={() => RecuperarSenha()}
                carregando={carregando}
            />

            <Toast />
        </Container>
    )
}