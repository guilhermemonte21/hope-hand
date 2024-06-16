import { Modal } from 'react-native';
import React from 'react';
import { Botao } from '../../Botao/Index';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { DateContainer } from './Style';

export const DateInputModal = ({ open, dataNascimento, handleChange, handleOnPress }) => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 16);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={open}
        >
            <DateContainer>
                <DatePicker
                    mode="calendar"
                    selected={dataNascimento}
                    onDateChange={handleChange}
                    // Setta um limite de idade
                    maximumDate={getFormatedDate(today.setDate(today.getDate()))}
                />

                <Botao onPress={handleOnPress} text={"Fechar"} width="100%" />
            </DateContainer>
        </Modal>
    )
}