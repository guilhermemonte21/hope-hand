// imports de componentes
import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container, ContainerMargin, ContainerScroll } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style"
import { Titulo } from "../../components/Titulo/Index"

// imports importantes
import { useEffect, useState } from "react"

// importe da api
import api from "../../service/Service"
import { Group } from "../../components/Group/Index"
import { Text } from "react-native"

export const CadastroUsuario = ({
    navigation
}) => {
    // CONSTS
    const [rg, setRg] = useState(""); // rg do usuário
    const [cpf, setCpf] = useState(""); // cpf do usuário
    const [nome, setNome] = useState(""); // nome do usuário
    const [email, setEmail] = useState(""); // email do usuário
    const [senha, setSenha] = useState(""); // senha do usuário
    const [dataNascimento, setDataNascimento] = useState(); // data de nascimento do usuário
    const [confirmaSenha, setConfirmaSenha] = useState(""); // confirmação de senha
    const [carregando, setCarregando] = useState(false); // ativa o spinner do botão
    const [erro, setErro] = useState(false); // muda a cor dos inputs quando dá algum erro
    const [erroTexto, setErroTexto] = useState(""); // diz qual é o erro que está ocorrendo



    // FUNCTIONS
    const Cadastrar = async () => {
        setCarregando(true);

        if (senha.length >= 5) {
            if (senha == confirmaSenha) {
                try {
                    await api.post("/Usuario/CriarConta", {
                        name: nome,
                        birth: "2005-10-17",
                        cpf: cpf,
                        rg: rg,
                        email: email,
                        password: senha,
                        codRecupSenha: 0
                    })
                        .then(response => {
                            setErro(false);

                            navigation.replace("CadastroOng", {

                            })
                        })
                } catch (error) {
                    setErro(true);

                    setErroTexto("Falha no cadastro, verifique se as informações estão preenchidas corretamente e tente novamente")

                    console.log(error);
                }
            } else {
                setErro(true);

                setErroTexto("As senhas devem ser iguais, tente novamente")
            }
        } else {
            setErro(true);

            setErroTexto("Senha deve ter mais de 5 dígitos")
        }

        setCarregando(false);
    }

    // EFFECTS

    return (
        <Container>
            <ContainerScroll
                style={{
                    width: "100%"
                }}
                showsVerticalScrollIndicator={false}
            >
                <BotaoVoltar
                    onPress={() => navigation.replace("Login")}
                />

                <Logo
                    source={require("../../assets/images/logo-whand.png")}
                />

                <Titulo
                    text={"Cadastro - usuário"}
                    fontSize={18}
                    textTransform={"uppercase"}
                />
                <ContainerMargin>
                    <Group
                        row
                        justifyContent="space-between"
                    >
                        <Input
                            placeholder={"RG:"}
                            erro={erro}
                            value={rg}
                            onChangeText={(txt) => setRg(txt)}
                            width="45%"
                            keyboardType={"number-pad"}
                        />

                        <Input
                            placeholder={"CPF:"}
                            erro={erro}
                            value={cpf}
                            onChangeText={(txt) => setCpf(txt)}
                            width="45%"
                            keyboardType={"number-pad"}
                        />
                    </Group>

                    <Input
                        placeholder={"Nome:"}
                        autoCapitalize={"none"}
                        erro={erro}
                        value={nome}
                        onChangeText={(txt) => setNome(txt)}
                        width="100%"
                    />

                    <Input
                        placeholder={"Data de nascimento:"}
                        width="100%"
                        value={dataNascimento}
                        onChangeText={(txt) => setDataNascimento(txt)}
                        erro={erro}
                        maxLength={10}
                    />

                    <Input
                        placeholder={"Email:"}
                        autoCapitalize={"none"}
                        erro={erro}
                        value={email}
                        onChangeText={(txt) => setEmail(txt)}
                        width="100%"
                        keyboardType={"email-address"}
                    />

                    <Input
                        placeholder={"Senha:"}
                        autoCapitalize={"none"}
                        erro={erro}
                        value={senha}
                        onChangeText={(txt) => setSenha(txt)}
                        width="100%"
                    />

                    <Input
                        placeholder={"Confirme a senha:"}
                        autoCapitalize={"none"}
                        erro={erro}
                        value={confirmaSenha}
                        onChangeText={(txt) => setConfirmaSenha(txt)}
                        width="100%"
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
                        text={"Prosseguir"}
                        bgColor={"#7BCAF7"}
                        onPress={() => Cadastrar()}
                        carregando={carregando}
                    />
                </ContainerMargin>
            </ContainerScroll>
        </Container>

    )
}