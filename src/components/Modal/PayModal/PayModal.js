import { Modal } from "react-native";
import { InfoModal, ModalForm } from "./Style"
import { TitleCard, TitleSpace } from "../../CardCause/Style";
import { BotaoVoltar } from "../../BotaoVoltar/Index";
import { Input } from "../../Input/Index";
import { Group } from "../../Group/Index";
import { Botao } from "../../Botao/Index";
import { BotaoPay } from "../../BotaoPay/Index";
import { ViewEnd } from "../../Container/Style";

export const PayModal = ({
    navigation,
    visible,
    setShowInformationModal = null,
    ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <InfoModal>
                <ModalForm>
                    <TitleSpace>Nome da ONG</TitleSpace>

                    <Group gap={20}>
                        <Input
                            width={"90%"}
                            height={50}
                            placeholder={"Nome Completo:"}
                            placeholderTextColor="#3FA7E4"
                        />

                        <Input
                            width={"90%"}
                            height={50}
                            placeholder={"RG:"}
                            placeholderTextColor="#3FA7E4"
                        />

                        <BotaoPay />

                        <Input
                            width={"90%"}
                            height={50}
                            placeholder={"Valor:"}
                            placeholderTextColor="#3FA7E4"
                        />

                        <ViewEnd>
                        <Botao
                            width="90%"
                            text={"Confirmar Doação"}
                            bgColor={"#7BCAF7"}
                            onPress={() => navigation.replace("ConfirmarPagamento")}
                        />
                        </ViewEnd>
                    </Group>



                </ModalForm>
                <BotaoVoltar
                    onPress={() => setShowInformationModal(false)}
                />
            </InfoModal>
        </Modal>
    );
};