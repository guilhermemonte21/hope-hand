// import de componentes
import { useState } from "react"
import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container, ContainerMargin, ContainerScroll } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style"
import { Titulo } from "../../components/Titulo/Index"
import { Group } from "../../components/Group/Index"
import { Circle } from "react-native-maps"
import api from "../../service/Service"

export const CadastroOng = ({
    navigation,
    route
}) => {
    // CONSTS
    const [nome, setNome] = useState(""); // nome da ong
    const [cnpj, setCnpj] = useState(""); // cnpj da ong
    const [numero, setNumero] = useState(""); // número do local
    const [cep, setCep] = useState(""); // cep do local
    const [cidade, setCidade] = useState(""); // cidade do lugar
    const [uf, setUf] = useState(""); // estado do lugar
    const [carregando, setCarregando] = useState(false); // ativa o spinner do botão
    const [erro, setErro] = useState(false); // muda a cor dos inputs quando dá algum erro
    const [erroTexto, setErroTexto] = useState(""); // diz qual é o erro que está ocorrendo



    // FUNCTIONS
    const Cadastrar = async () => {
        setCarregando(true);

        var form = new FormData();
        form.append("Name", nome);
        form.append("Cnpj", cnpj);
        form.append("Number", numero);
        form.append("Cep", cep);
        form.append("UserId", "1D4A3206-2538-471D-ADD1-255DF7A48295");

        try {
            await api.post("Ong/CadastrarOng", form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
                .then(() => {
                    console.log("Sucesso!");
                })
        } catch (error) {
            setErro(true);

            setErroTexto("Erro ao cadastrar, tente novamente");

            console.log(error);
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
                    text={"Cadastro - ong"}
                    fontSize={18}
                    textTransform={"uppercase"}
                />

                <ContainerMargin>
                    <Input
                        width="100%"
                        placeholder={"Nome da ong:"}
                        erro={erro}
                        onChangeText={(txt) => setNome(txt)}
                        value={nome}
                    />

                    <Input
                        width="100%"
                        placeholder={"CNPJ:"}
                        autoCapitalize={"none"}
                        erro={erro}
                        onChangeText={(txt) => setCnpj(txt)}
                        value={cnpj}
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
                            maxLength={8}
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