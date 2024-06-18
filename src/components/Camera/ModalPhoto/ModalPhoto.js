import { Modal, Image } from "react-native";
import { ContainerMargin } from "../../Container/Style";
import { InfoModal, ModalForm } from "./Style";
import { Botao } from "../../Botao/Index";

export const ModalPhoto = ({ visible, photo, setInCamera, setOpenModal, OngPhoto, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <InfoModal>
                <ModalForm>
                    <ContainerMargin>
                        <Image source={{ uri: photo }} style={{ width: "70%", height: "70%", margin: 20 }} />
                        <Botao
                            width="100%"
                            text={"Confirmar"}
                            bgColor={"#7BCAF7"}
                            onPress={() => {setOpenModal(false); OngPhoto()}}
                        />
                        <Botao
                            width="100%"
                            text={"Cancelar"}
                            bgColor={"#7BCAF7"}
                            onPress={() => { setOpenModal(false); setInCamera(true) }}
                        />
                    </ContainerMargin>
                </ModalForm>
            </InfoModal>
        </Modal>
    );
};
