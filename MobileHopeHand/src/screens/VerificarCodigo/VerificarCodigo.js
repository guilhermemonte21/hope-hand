import { useEffect, useRef, useState } from "react";
import { Botao } from "../../components/Botao/Index";
import { BotaoVoltar } from "../../components/BotaoVoltar/Index";
import { Container } from "../../components/Container/Style";
import { InputCode } from "../../components/InputCode/Index";
import { Logo } from "../../components/Logo/Style";
import { Subtitulo } from "../../components/Subtitulo/Index";
import { Titulo } from "../../components/Titulo/Index";
import api from "../../service/Service";
import { useInsertionEffect } from "react/cjs/react.development";
import { ShowToastStyled } from "../../components/Toast/ToastStyled";
import Toast from "react-native-toast-message";

export const VerificarCodigo = ({ navigation, route }) => {
  // CONSTS
  const [carregando, setCarregando] = useState(false);
  const [code, setCode] = useState("");

  // FUNTIONS
  async function VerificarCodigo() {
    try {
      await api.post(
        `RecuperarSenha/ValidarCodigoRecuperacaoSenha?email=${route.params.email}&code=${code}`
      );
      navigation.replace("AlterarSenha", { email: route.params.email });
    } catch (error) {
      console.log(error);
      return ShowToastStyled({
        type: "error",
        text1: "Erro",
        text2: "Código Incorreto",
      });
    }

    setCarregando(true);

    setTimeout(() => {
      setCarregando(false);
    }, 1000);
  }

  // EFFECTS

  return (
    <Container>
      <Toast/>  

      <BotaoVoltar onPress={() => navigation.replace("Login")} />

      <Logo source={require("../../assets/images/logo-whand.png")} />

      <Titulo
        text={"Verificar Código"}
        fontSize={18}
        textTransform={"uppercase"}
      />

      <Subtitulo text={"Digite o código enviado no seu Email"} />

      <InputCode value={code} setValue={setCode} />

      <Botao
        route={"Login"}
        text={"Confirmar"}
        bgColor={"#7BCAF7"}
        onPress={() => VerificarCodigo()}
        carregando={carregando}
      />

      <Botao text={"Reenviar Código"} bgColor={"#B0B0B0"} />
    </Container>
  );
};
