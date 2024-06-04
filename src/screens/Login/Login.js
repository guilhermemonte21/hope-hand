import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Styles";
import { Titulo } from "../../components/Titulo/Index";

export const Login = ({ navigation }) => {
    return (
        <Container>
            <Logo
                // source={require("../../assets/images/logo-whand.png")}
            />

            <Titulo
                text={"LOGIN"}
                fontSize={18}
            />
        </Container>
    );
}