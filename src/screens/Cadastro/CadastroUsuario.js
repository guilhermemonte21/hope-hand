// imports de componentes
import { Botao } from "../../components/Botao/Index";
import { BotaoVoltar } from "../../components/BotaoVoltar/Index";
import {
  Container,
  ContainerMargin,
  ContainerScroll,
} from "../../components/Container/Style";
import { Input } from "../../components/Input/Index";
import { Logo } from "../../components/Logo/Style";
import { Titulo } from "../../components/Titulo/Index";
import { useEffect, useState } from "react";

// importe da api
import { Group } from "../../components/Group/Index";
import { mask } from "remask";

export const CadastroUsuario = ({ navigation }) => {
  // CONSTS
  const [rg, setRg] = useState(""); // rg do usuário
  const [cpf, setCpf] = useState(""); // cpf do usuário
  const [nome, setNome] = useState(""); // nome do usuário
  const [email, setEmail] = useState(""); // email do usuário
  const [senha, setSenha] = useState(""); // senha do usuário
  const [dataNascimento, setDataNascimento] = useState(""); // data de nascimento do usuário
  const [confirmaSenha, setConfirmaSenha] = useState(""); // confirmação de senha
  const [carregando, setCarregando] = useState(false); // ativa o spinner do botão
  const [erro, setErro] = useState(false); // muda a cor dos inputs quando dá algum erro
  const [erroTexto, setErroTexto] = useState(""); // diz qual é o erro que está ocorrendo

  const mascaras = ["99.999.999-9", "999.999.999-99", "99/99/9999"];

  // FUNCTIONS
  const Cadastrar = async () => {
    setCarregando(true);

    if (rg.length != 9) {
      setErro(true);

      setErroTexto("RG incompleto, tente novamente");
    } else if (cpf.length != 11) {
      setErro(true);

      setErroTexto("CPF incompleto, tente novamente");
    } else if (nome == "") {
      setErro(true);

      setErroTexto("Usuário deve conter um nome");
    } else if (dataNascimento == "") {
      setErro(true);

      setErroTexto("Insira sua data de nascimento e tente novamente");
    } else if (email == "") {
      setErro(true);

      setErroTexto("Insira um email válido!");
    } else if (senha.length < 6 || senha.length > 16) {
      setErro(true);

      setErroTexto("Senha deve conter 6 a 16 dígitos!");
    } else if (senha != confirmaSenha) {
      setErro(true);

      setErroTexto("As senhas devem ser iguais, tente novamente");
    } else {
      navigation.replace("CadastroOng", {
        nome: nome,
        dataNascimento: dataNascimento.split("/").reverse().join("-"),
        cpf: cpf,
        rg: rg,
        email: email,
        senha: senha,
      });
    }

    setCarregando(false);
  };

  // EFFECTS
  
  return (
    <Container>
      <ContainerScroll
        style={{
          width: "100%",
        }}
        showsVerticalScrollIndicator={false}
      >
        <BotaoVoltar onPress={() => navigation.replace("Login")} />

        <Logo source={require("../../assets/images/logo-whand.png")} />

        <Titulo
          text={"Cadastro - usuário"}
          fontSize={18}
          textTransform={"uppercase"}
        />
        <ContainerMargin>
          <Group row justifyContent="space-between">
            <Input
              placeholder={"RG:"}
              erro={erro}
              value={mask(rg, mascaras[0])}
              onChangeText={(txt) => setRg(txt)}
              width="45%"
              maxLength={12}
            />

            <Input
              placeholder={"CPF:"}
              erro={erro}
              value={mask(cpf, mascaras[1])}
              maxLength={14}
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
            keyboardType={"numeric"}
            value={mask(dataNascimento, mascaras[2])}
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

          {erro ? (
            <Titulo text={erroTexto} color={"#E34949"} textAlign={"center"} />
          ) : null}

          <Botao
            text={"Prosseguir"}
            bgColor={"#7BCAF7"}
            onPress={() => Cadastrar()}
            carregando={carregando}
          />
        </ContainerMargin>
      </ContainerScroll>
    </Container>
  );
};
