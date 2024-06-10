import { ButtonStyled, TextButton } from "../../components/CardCause/Style";
import { Container, ViewCenter, ViewEnd } from "../../components/Container/Style";
import { Titulo } from "./../../components/Titulo/Index";
import { FontAwesome5 } from '@expo/vector-icons';

export const ConfirmarPagamento = ({ navigation }) => {
    return(
        <Container>
        <Titulo text={"Doação Confirmada"} fontSize={20} alignSelf={"center"} color={"#3FA7E4"}/>

        <Titulo text={"Agradecemos a sua contribuição"} />

        <ViewCenter>
        <FontAwesome5 name="check-circle" size={90} color="#3FA7E4" />
        </ViewCenter>

        <ButtonStyled onPress={() => navigation.replace("Home")}>
        <TextButton>Voltar</TextButton>
        </ButtonStyled>
        </Container>
    );
};