import { Botao } from "../../components/Botao/Index";
import { BotaoVoltar } from "../../components/BotaoVoltar/Index";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Index";
import { Link } from "../../components/Link/Index";
import { Logo } from "../../components/Logo/Style";
import { Titulo } from "../../components/Titulo/Index";

export const Login = ({
    navigation
}) => {
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
                text={"Login"}
                fontSize={18}
            />

            <Input
                placeholder={"Email:"}
            />

            <Input
                placeholder={"Senha:"}
            />

            <Link
                color={"#323030"}
                text={"Esqueceu a senha?"}
                navigation={navigation}
                route={"RecuperarSenha"}
            />

            <Botao
                navigation={navigation}
                route={"Login"}
                text={"Entrar"}
                bgColor={"#7BCAF7"}
            />

            <Link
                color={"#7BCAF7"}
                text={"Não tem conta? Crie uma agora mesmo!"}
                navigation={navigation}
                route={"Cadastro"}
            />
        </Container>
    );
}