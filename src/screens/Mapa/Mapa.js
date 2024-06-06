import { Container } from "../../components/Container/Style";
import { Group } from "../../components/Group/Index";
import { Input } from "../../components/Input/Index";
import { Titulo } from "../../components/Titulo/Index";
import { Botao } from "../../components/Botao/Index";
import MapView from "react-native-maps";
import { BotaoVoltar } from "../../components/BotaoVoltar/Index";
import { useRef, useState } from "react";

export const Mapa = ({
    navigation
}) => {
    // CONSTS
    const mapReference = useRef(null);
    const [initialPosition, setInitialPosition] = useState(null);
    const [finalPosition, setFinalPosition] = useState(null);



    // FUNCTIONS



    // EFFECTS



    return (
        <Container>
            <BotaoVoltar
                navigation={navigation}
                route={"Home"}
            />

            <MapView

            />

            <Titulo
                text={"Ong"}
                textTransform={"uppercase"}
                color={"#7BCAF7"}
                fontSize={20}
            />

            <Group
                row
                justifyContent="space-between"
                maxWidth="85%"
            >
                <Input
                    width={"45%"}
                    editable={false}
                    placeholder={"CEP: #####-###"}
                    fontFamily={"Kanit_400Regular"}
                />

                <Input
                    width={"45%"}
                    editable={false}
                    placeholder={"UF: ##"}
                    fontFamily={"Kanit_400Regular"}
                />
            </Group>

            <Input
                editable={false}
                placeholder={"Cidade:"}
                fontFamily={"Kanit_400Regular"}
            />

            <Input
                editable={false}
                placeholder={"Logradouro"}
                fontFamily={"Kanit_400Regular"}
            />

            <Botao
                radius={20}
                text={"Doar"}
            />
        </Container>
    )
} 