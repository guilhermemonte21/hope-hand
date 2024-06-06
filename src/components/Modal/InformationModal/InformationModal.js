import { Modal } from "react-native";
import { Container, ContainerMargin } from "../../Container/Style";
import { TituloStyled } from "../../Titulo/Style";
import { BotaoVoltar } from "../../BotaoVoltar/Index";
import { InfoModal, ModalForm } from "./Style"
import { SubtitleCard, TitleCard } from "../../CardCause/Style";
import { Botao } from "../../Botao/Index";
import { useState } from "react";
import { PayModal } from "../PayModal/PayModal";

export const InformationModal = ({
    navigation,
    visible,
    setShowInformationModal = null,
    ...rest
}) => {

    const [showModalPay, setShowModalPay] = useState(false);

    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <InfoModal>
                <ModalForm>
                    <ContainerMargin>

                    <TitleCard>Nome da ONG</TitleCard>
                    <SubtitleCard>Após as enchentes no Rio Grande do Sul, a ONG Hope Hand mobilizou-se para ajudar as comunidades afetadas. Distribuíram suprimentos essenciais, forneceram atendimento médico e apoio emocional, e iniciaram programas de reconstrução de casas e infraestrutura. Agricultores receberam sementes e ferramentas, enquanto pequenos empresários obtiveram microcréditos. Espaços temporários de aprendizado garantiram a continuidade da educação infantil.
                    A solidariedade inspirou a comunidade local a se unir e reconstruir, transformando a tragédia em uma oportunidade de renovação e crescimento. Com a ajuda da Hope Hand e da sociedade, o Rio Grande do Sul demonstrou que a união é capaz de superar qualquer desafio.
                    </SubtitleCard>

                    <Botao
                    onPress={() => setShowModalPay(true)}
                    width="100%"
                    text={"Doar"}
                    bgColor={"#7BCAF7"}
                    />

                    <PayModal
                    navigation={navigation}
                    visible={showModalPay}
                    setShowInformationModal={setShowModalPay}
                    />

                    <Botao
                    width="100%"
                    text={"Ver Localização"}
                    bgColor={"#7BCAF7"}
                    />
                    </ContainerMargin>
                </ModalForm>

                <BotaoVoltar
                onPress={() => setShowInformationModal(false)}
                />
            </InfoModal>
        </Modal>
    );
};