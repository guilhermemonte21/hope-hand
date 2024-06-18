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
import { useState } from "react";

// importe da api
import { Group } from "../../components/Group/Index";

import Toast from "react-native-toast-message";
import { ShowToastStyled } from "../../components/Toast/ToastStyled";

import { mask, unmask } from "remask";

import { DateInputModal } from "../../components/Modal/DateInputModal/DateInputModal";

export const CadastroUsuario = ({ navigation }) => {
  // CONSTS
  const [rg, setRg] = useState("432435345"); // rg do usuário
  const [cpf, setCpf] = useState("12123123124"); // cpf do usuário
  const [nome, setNome] = useState("teste"); // nome do usuário
  const [email, setEmail] = useState("gabrielsampaio1216@gmail.com"); // email do usuário
  const [senha, setSenha] = useState("teste123"); // senha do usuário
  const [dataNascimento, setDataNascimento] = useState(
    new Date(
      new Date().getFullYear() - 16,
      new Date().getMonth(),
      new Date().getDate()
    ).toISOString().split("T")[0].split("-").reverse().join("/")
  ); // data de nascimento do usuário
  const [confirmaSenha, setConfirmaSenha] = useState("teste123"); // confirmação de senha
  const [carregando, setCarregando] = useState(false); // ativa o spinner do botão
  const [erro, setErro] = useState(false); // muda a cor dos inputs quando dá algum erro
  const [erroTexto, setErroTexto] = useState(""); // diz qual é o erro que está ocorrendo

  const mascaras = ["99.999.999-S", "999.999.999-99", "99/99/9999"]; // máscaras para formatação de informações

  // FUNCTIONS
  const Cadastrar = async () => {
    setCarregando(true);

    if (rg.length != 9) {
      // se o rg não tiver 9 dígitos (conta a pontuação)
      setErro(true);

      ShowToastStyled({
        type: "error",
        text1: "RG incompleto",
        text1Style: {
          color: "#E34949",
        },
        text2: "Complete o RG e tente novamente",
      }),
        setErroTexto("RG incompleto");

      setCarregando(false);
    } else if (cpf.length != 11) {
      // e se o cpf não tiver 11 dígitos (também conta pontuação)
      setErro(true);

      ShowToastStyled({
        type: "error",
        text1: "CPF incompleto",
        text1Style: {
          color: "#E34949",
        },
        text2: "Complete o CPF e tente novamente",
      });

      setErroTexto("CPF incompleto");

      setCarregando(false);
    } else if (nome == "") {
      // e se o nome estiver vazio
      setErro(true);

      ShowToastStyled({
        type: "error",
        text1: "Usuário sem nome",
        text1Style: {
          color: "#E34949",
        },
        text2: "Insira o nome de usuário e tente novamente",
      });

      setErroTexto("Usuário sem nome");

      setCarregando(false);
    } else if (dataNascimento.length != 10) {
      // e se a data não tiver os dígitos necessários
      setErro(true);

      ShowToastStyled({
        type: "error",
        text1: "Data de nascimento incompleta",
        text1Style: {
          color: "#E34949",
        },
        text2: "Insira a data completa (dd/mm/aaaa)",
      });

      setErroTexto("Data de nascimento incompleta");

      setCarregando(false);
    } else if (email == "") {
      // e se o email estiver vazio
      setErro(true);

      ShowToastStyled({
        type: "error",
        text1: "Email inválido",
        text1Style: {
          color: "#E34949",
        },
        text2: "Insira um email válido!",
      });

      setErroTexto("Email inválido");

      setCarregando(false);
    } else if (senha.length < 6 || senha.length > 16) {
      // e se senha não tiver o mínimo ou o máximo de dígitos
      setErro(true);

      ShowToastStyled({
        type: "error",
        text1: "Senha não aceita",
        text1Style: {
          color: "#E34949",
        },
        text2: "A senha deve conter 6 a 16 dígitos. Tente novamente",
      });

      setErroTexto("Senha não aceita");

      setCarregando(false);
    } else if (senha != confirmaSenha) {
      // e se senha e confirmar senha não estiverem iguais
      setErro(true);

      ShowToastStyled({
        type: "error",
        text1: "Confirmação de senha inválida",
        text1Style: {
          color: "#E34949",
        },
        text2: "Verifique se as senhas estão iguais e tente novamente",
      });

      setErroTexto("Confirmação de senha inválida");

      setCarregando(false);
    } else {
      // caso não haja nenhum problema com nada disso, prossiga
      setErro(false);

      ShowToastStyled({
        type: "success", // seta como estado de sucesso
        text1: "Redirecionando para cadastro de ong", // título da notificação
        text1Style: {
          color: "#7bcaf7",
        }, // estiliza o título da notificação
        visibilityTime: 3000, // tempo de exibição da notificação
        swipeable: false, // seta se a funcionalidade de mexer a notificação funciona
      });

      setTimeout(() => {
        setCarregando(false);

        navigation.replace("CadastroOng", {
          nome: nome,
          dataNascimento: dataNascimento.split("/").reverse().join("-"),
          cpf: cpf.split(".").join("").split("-").join(""),
          rg: rg.split(".").join("").split("-").join(""),
          email: email,
          senha: senha,
        });
      }, 3000);
    }
  }; // deixa o usuário pronto para ser cadastrado

  const [open, setOpen] = useState(false); // Abre/fecha o modal do calendário

  function handleOnPress() {
    setOpen(!open);
  }

  function handleChange(propDate) {
    // 2024/06/26
    // 26062024
    const x = propDate.split("/");
    const dateFormated = `${x[2]}/${x[1]}/${x[0]}`;
    setDataNascimento(mask(dateFormated, mascaras[2]));
  }

  return (
    <Container>
      <BotaoVoltar onPress={() => navigation.replace("Login")} />
      <ContainerScroll
        style={{
          width: "100%",
          paddingTop: 60
        }}
        showsVerticalScrollIndicator={false}
      >

        <Logo source={require("../../assets/images/logo-whand.png")} />

        <Titulo
          text={"Cadastrar usuário"}
          fontSize={18}
          textTransform={"uppercase"}
        />
        <ContainerMargin>
          <Group row justifyContent="space-between">
            <Input
              placeholder={"RG:"}
              erro={erro}
              value={mask(rg, mascaras[0])}
              onChangeText={(txt) => setRg(unmask(txt))}
              width="100%"
              maxLength={12}
            />

            <Input
              placeholder={"CPF:"}
              erro={erro}
              value={mask(cpf, mascaras[1])}
              maxLength={14}
              onChangeText={(txt) => setCpf(unmask(txt))}
              width="100%"
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

          {/* Data de nascimento INPUT e MODAL */}
          <Input
            placeholder={"Data de nascimento:"}
            width="100%"
            value={mask(dataNascimento, mascaras[2])}
            onChangeText={(txt) => setDataNascimento(txt)}
            erro={erro}
            maxLength={10}
            onFocus={handleOnPress}
          />
          <DateInputModal
            dataNascimento={dataNascimento}
            open={open}
            handleChange={handleChange}
            handleOnPress={handleOnPress}
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

      <Toast />
    </Container>
  );
};
