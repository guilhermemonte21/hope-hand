import { Modal } from "react-native";
import { Container } from "../Container/Style";
import { TituloStyled } from "../Titulo/Style";
import { BotaoVoltar } from "../BotaoVoltar/Index";
import { InfoModal, ModalForm } from "../../components/Modal/Style"

export const InformationModal = ({
    navigation,
    visible,
    setShowInformationModal = null,
    ...rest
}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <InfoModal>
            <ModalForm>
                <TituloStyled>Nome da ONG</TituloStyled>
            </ModalForm>
            <BotaoVoltar
                onPressCancel={() => setShowInformationModal(false)}
                text={"Cancelar"}
            />
            </InfoModal>
        </Modal>
    );
};