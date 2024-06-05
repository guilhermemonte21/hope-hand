import { Modal } from "react-native";
import { InfoModal, ModalForm } from "./Style"
import { TitleCard } from "../../CardCause/Style";
import { BotaoVoltar } from "../../BotaoVoltar/Index";
import { Input } from "../../Input/Index";
import { Group } from "../../Group/Index";
import { Botao } from "../../Botao/Index";

export const PayModal = ({
    navigation,
    visible,
    setShowInformationModal = null,
    ...rest
}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <InfoModal>
                <ModalForm>
                    <TitleCard>Nome da ONG</TitleCard>

                    <Group>
                    <Input
                    width={"90%"}
                    height={50}
                    placeholder={"Nome Completo:"}
                    />

                    <Input
                    width={"90%"}
                    height={50}
                    placeholder={"RG:"}
                    />  
                    </Group>

                    <Botao
                    width="90%"
                    text={"Confirmar Doação"}
                    bgColor={"#7BCAF7"}
                    />

                </ModalForm>
                <BotaoVoltar
                navigation={navigation}
                route={"Perfil"}
                />
            </InfoModal>
        </Modal>
    );
};