// imports de componentes
import { Botao } from "../../components/Botao/Index"
import { BotaoVoltar } from "../../components/BotaoVoltar/Index"
import { Container, ContainerMargin, ContainerScroll } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style"
import { Titulo } from "../../components/Titulo/Index"

// imports importantes
import { useState } from "react"
// import DatePicker from 'react-native-date-picker';

// importe da api
import api from "../../service/Service"
import { Group } from "../../components/Group/Index"

export const CadastroUsuario = ({
    navigation
}) => {
    // CONSTS
    const [rg, setRg] = useState(""); // rg do usuário
    const [cpf, setCpf] = useState(""); // cpf do usuário
    const [nome, setNome] = useState(""); // nome do usuário
    const [email, setEmail] = useState(""); // email do usuário
    const [senha, setSenha] = useState(""); // senha do usuário
    const [dataNascimento, setDataNascimento] = useState(new Date()); // data de nascimento do usuário
    const [confirmaSenha, setConfirmaSenha] = useState(""); // confirmação de senha
    const [carregando, setCarregando] = useState(false); // ativa o spinner do botão
    const [erro, setErro] = useState(false); // muda a cor dos inputs quando dá algum erro



    // FUNCTIONS
    const Cadastrar = async () => {
        setCarregando(true);

        if (senha == confirmaSenha) {
            try {
                await api.post("/Usuario/CriarConta", {
                    email: email,
                    password: senha
                })
            } catch (error) {
                setErro(true);

                console.log(error);
            }
        } else {

        }

        setCarregando(false);
    }

    const HandleDateChange = (selectedDate) => {
        // Formata a data no formato YYYY-MM-DD
        const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
        setDate(formattedDate);
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
                            autoCapitalize={"none"}
                            erro={erro}
                            value={rg}
                            onChangeText={(txt) => setRg(txt)}
                            width="45%"
                            keyboardType={"phone-pad"}
                        />

                        <Input
                            placeholder={"CPF:"}
                            autoCapitalize={"none"}
                            erro={erro}
                            value={cpf}
                            onChangeText={(txt) => setCpf(txt)}
                            width="45%"
                            keyboardType={"phone-pad"}
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

                    <DatePicker
                        date={dataNascimento}
                        mode="date"
                        onDateChange={HandleDateChange}
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