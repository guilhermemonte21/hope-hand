import styled from "styled-components/native";

export const BoxInput = styled.View`
    width: 85%;
    height: 45px;

    justify-content: center;
    padding: 10px;

    border: 1px solid #7CCFFF;
    border-radius: 12px;
`

export const InputStyled = styled.TextInput.attrs({
    placeholderTextColor: "rgba(50,48,48, 0.5)"
})`
    text-align: start;
    font-size: 13px;
    font-family: "Poppins_400Regular";
`