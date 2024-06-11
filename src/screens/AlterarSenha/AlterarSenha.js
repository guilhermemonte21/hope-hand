import { Container } from "../../components/Container/Style"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Logo } from "../../components/Logo/Style"
import { Titulo } from "../../components/Titulo/Index"
import { Input } from "../../components/Input/Index"
import { Botao } from "../../components/Botao/Index"
import { useState } from "react"
import api from "../../service/Service"

export const AlterarSenha = ({
    navigation,
    route
}) => {
    // CONSTS
    const [carregando, setCarregando] = useState(false);
    const [senha, setSenha] = useState(null);
    const [senhaConfirmacao, setSenhaConfirmacao] = useState(null);


    // FUNCTIONS
    const AlterarSenha = async () => {
        setCarregando(true);

        // Verifica se a senha e a confirmação de senha são iguais
        if (senha === senhaConfirmacao && senha != null && senhaConfirmacao != null) {
            // Verifica se a senha tem de 6 a 16 caracteres
            if (senha.length >= 6 && senha.length <= 16) {

                await api.put(`/Usuario/AlterarSenha?email=${route.params.email}&password=${senha}`)
                    .then((response) => {
                        // Se a senha for alterada com sucesso
                        if (response.status === 200) {
                            // retorna para a Login
                            setTimeout(() => {
                                setCarregando(false);

                                alert("FOI COM SUCESSO!");
                                navigation.replace("Login");
                            }, 1000);
                        }
                    })
                    .catch((erro) => {
                        console.log(erro);
                    });
            } else {
                alert("A senha deve conter de 6 a 16 caracteres.")
            }
        } else {
            alert("As senhas não coincidem!");
        }

        setCarregando(false);
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
                value={senha}
                onChangeText={(text) => {
                    setSenha(text);
                }}
            />

            <Input
                placeholder={"Confirme a senha:"}
                value={senhaConfirmacao}
                onChangeText={(text) => {
                    setSenhaConfirmacao(text);
                }}
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