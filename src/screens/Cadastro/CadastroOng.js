// import de componentes
import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container, ContainerMargin, ContainerScroll } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style"
import { Titulo } from "../../components/Titulo/Index"
import { Group } from "../../components/Group/Index"
import Toast from "react-native-toast-message"

// imports importantes
import { useEffect, useState } from "react"

// api importada
import api from "../../service/Service"
import { ShowToastStyled } from "../../components/Toast/ToastStyled"

export const CadastroOng = ({
    navigation,
    route
}) => {
    // CONSTS
    const [nomeOng, setNomeOng] = useState(""); // nome da ong
    const [cnpj, setCnpj] = useState(""); // cnpj da ong
    const [numero, setNumero] = useState(""); // número do local
    const [cep, setCep] = useState(""); // cep do local
    const [cidade, setCidade] = useState(""); // cidade do lugar
    const [uf, setUf] = useState(""); // estado do lugar
    const [carregando, setCarregando] = useState(false); // ativa o spinner do botão
    const [erro, setErro] = useState(false); // muda a cor dos inputs quando dá algum erro
    const [erroTexto, setErroTexto] = useState(""); // diz qual é o erro que está ocorrendo

    const nome = route.params.nome; // nome do usuário
    const dataNascimento = route.params.dataNascimento; // data de nascimento do usuário
    const cpf = route.params.cpf; // cpf do usuário
    const rg = route.params.rg; // rg do usuário
    const email = route.params.email; // email do usuário
    const senha = route.params.senha; // senha do usuário



    // FUNCTIONS
    const Cadastrar = async () => {
        setCarregando(true);

        if (nomeOng == "") {
            setErro(true);

            ShowToastStyled({
                type: "error",
                text1: "ONG sem nome",
                text1Style: {
                    color: "#E34949"
                },
                text2: "Dê um nome para sua ONG",
            });

            setErroTexto("ONG sem nome");

            setCarregando(false);
        }
        else if (cnpj.length != 14) {
            setErro(true);

            ShowToastStyled({
                type: "error",
                text1: "CNPJ incompleto",
                text1Style: {
                    color: "#E34949"
                },
                text2: "O CNPJ completo da ONG é obrigatório",
            });

            setErroTexto("CNPJ incompleto");

            setCarregando(false);
        }
        else if (cep.length != 8) {
            setErro(true);

            ShowToastStyled({
                type: "error",
                text1: "CEP inválido",
                text1Style: {
                    color: "#E34949"
                },
                text2: "Insira um CEP válido",
            });

            setErroTexto("CEP inválido");

            setCarregando(false);
        }
        else if (numero == "") {
            setErro(true);

            ShowToastStyled({
                type: "error",
                text1: "Número obrigatório",
                text1Style: {
                    color: "#E34949"
                },
                text2: "Informe o número do local da ONG",
            });

            setErroTexto("Número obrigatório");

            setCarregando(false);
        }
        else {
            try {
                await api.post("/Usuario/CriarConta", {
                    "name": nome,
                    "birth": dataNascimento,
                    "cpf": cpf,
                    "rg": rg,
                    "email": email,
                    "password": senha,
                    "codRecupSenha": 0
                }).then(async response => {
                    try {
                        await api.post("Ong/CadastrarOng", {
                            "name": nomeOng,
                            "cnpj": cnpj,
                            "userId": response.data.id,
                            "number": numero,
                            "cep": cep,
                            "address": "string"
                        })
                            .then(() => {
                                setErro(false);

                                ShowToastStyled({
                                    type: "success",
                                    text1: "Usuário cadastrado com sucesso!",
                                    text1Style: {
                                        color: "#7BCAF7"
                                    },
                                    swipeable: false,
                                    visibilityTime: 3000
                                });

                                setTimeout(() => {
                                    setCarregando(false);

                                    navigation.replace("Login");
                                }, 3000);
                            })
                    } catch (error) {
                        setErro(true);

                        ShowToastStyled({
                            type: "error",
                            text1: "Redirecionando para cadastro de usuário",
                            text1Style: {
                                color: "#E34949"
                            },
                        });

                        setErroTexto("Cadastro inválido");

                        setTimeout(() => {
                            setCarregando(false);

                            navigation.replace("CadastroUsuario");
                        }, 3000);
                    }
                })
            } catch (error) {
                setErro(true);

                ShowToastStyled({
                    type: "error",
                    text1: "Redirecionando para cadastro de usuário",
                    text1Style: {
                        color: "#E34949"
                    },
                });

                setErroTexto("Cadastro inválido");

                setTimeout(() => {
                    setCarregando(false);

                    navigation.replace("CadastroUsuario");
                }, 3000);
            }
        }
    }

    const AddressPicker = async () => {
        if (cep.length == 8) {
            await api.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => {
                    setCidade(response.data.localidade);

                    setUf(response.data.uf)
                })
        }
    }



    // EFFECTS
    useEffect(() => {
        AddressPicker();
    }, [cep])



    return (
        <Container>
            <ContainerScroll
                style={{
                    width: "100%",
                    paddingTop: 50
                }}
                showsVerticalScrollIndicator={false}
            >
                <BotaoVoltar
                    onPress={() => navigation.replace("CadastroUsuario")}
                />

                <Logo
                    source={require("../../assets/images/logo-whand.png")}
                />

                <Titulo
                    text={"Cadastrar ong"}
                    fontSize={18}
                    textTransform={"uppercase"}
                />

                <ContainerMargin>
                    <Input
                        width="100%"
                        placeholder={"Nome da ONG:"}
                        erro={erro}
                        onChangeText={(txt) => setNomeOng(txt)}
                        value={nomeOng}
                    />

                    <Input
                        width="100%"
                        placeholder={"CNPJ:"}
                        autoCapitalize={"none"}
                        erro={erro}
                        onChangeText={(txt) => setCnpj(txt)}
                        value={cnpj}
                        maxLength={14}
                    />

                    <Group
                        row
                        justifyContent="space-between"
                    >
                        <Input
                            placeholder={"CEP:"}
                            maxLength={8}
                            keyboardType={"number-pad"}
                            width="45%"
                            value={cep}
                            erro={erro}
                            onChangeText={(txt) => setCep(txt)}
                        />

                        <Input
                            placeholder={"Número:"}
                            width="45%"
                            value={numero}
                            erro={erro}
                            onChangeText={(txt) => setNumero(txt)}
                        />
                    </Group>

                    <Group
                        row
                        justifyContent="space-between"
                    >
                        <Input
                            placeholder={"Cidade:"}
                            width="60%"
                            value={cidade}
                            border={false}
                            editable={false}
                        />

                        <Input
                            placeholder={"UF:"}
                            width="35%"
                            editable={false}
                            border={false}
                            value={uf}
                        />
                    </Group>

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
                        text={"Cadastrar"}
                        bgColor={"#7BCAF7"}
                        onPress={() => Cadastrar()}
                        carregando={carregando}
                    />
                </ContainerMargin>
            </ContainerScroll>

            <Toast />
        </Container>
    )
}