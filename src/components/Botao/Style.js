import styled from "styled-components/native";

// Base button style
export const ButtonStyled = styled.TouchableOpacity`
    width: 85%;
    height: 45px;
    justify-content: center;
    align-items: center;
    background-color: #7BCAF7;
    border-radius: 12px;
`;

// Extended button style for a shorter button
export const ButtonShort = styled(ButtonStyled)`
    width: 30%;
`;

// Text style for the button
export const TextButton = styled.Text`
    color: #FFF;
    font-size: 14px;
    font-family: "Kanit_400Regular";
`;
