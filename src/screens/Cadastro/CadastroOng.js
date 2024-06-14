// import de componentes
import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container, ContainerMargin, ContainerScroll } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style"
import { Titulo } from "../../components/Titulo/Index"
import { Group } from "../../components/Group/Index"

// imports importantes
import { useEffect, useState } from "react"

// api importada
import api from "../../service/Service"

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

            setErroTexto("ONG precisa de um nome")
        }
        else if (cnpj.length != 14) {
            setErro(true);

            setErroTexto("O CNPJ completo é obrigatório, tente novamente")
        }
        else if (cep.length != 8) {
            setErro(true);

            setErroTexto("CEP inválido, tente novamente")
        }
        else if (numero == "") {
            setErro(true);

            setErroTexto("Informe o número do local da ONG")
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
                    setErro(false);

                    console.log(response.data.id);
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

                                console.log("Sucesso!");

                                navigation.replace("Login");
                            })
                    } catch (error) {
                        setErro(true);

                        setErroTexto("Erro ao cadastrar, tente novamente");

                        console.log(error);
                    }
                })
            } catch (error) {
                console.log(error);

                setErro(true);

                setErroTexto("Informações do usuário inválidas, tente cadastrar novamente");
            }
        }

        setCarregando(false);
    }

    const AddressPicker = async () => {
        if (cep.length == 8) {
            await api.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => {
                    console.log(response.data);

                    setCidade(response.data.localidade);

                    setUf(response.data.uf)
                })
        }
    }



    // EFFECTS
    useEffect(() => {
        AddressPicker();
    }, [cep])

    useEffect(() => {
        console.log(
            cpf,
            dataNascimento,
            email,
            nome,
            rg,
            senha
        );
    }, [])


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
        </Container>
    )
}