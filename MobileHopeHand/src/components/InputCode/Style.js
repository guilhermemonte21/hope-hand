import { StyleSheet } from "react-native"
import styled from "styled-components/native";

export const Styles = StyleSheet.create({
    focusCell: {
        borderColor: '#137DBB',
    },
});

export const MainBox = styled.View`
    width: 70%;

    padding: 20px;
    margin-top: 0%
`

export const Number = styled.Text`
    width: 40px;
    height: 40px;

    border: 1px solid #7CCFFF;
    border-radius: 12px;

    text-align: center;
    color: #323030;
    font-size: 24px;
    font-family: "Poppins_400Regular";
`