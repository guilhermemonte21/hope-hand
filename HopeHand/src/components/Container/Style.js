// imports
import styled from 'styled-components/native';
import React, { useContext } from 'react';


// container - mostrao conteúdo numa área segura ao dispositivo
export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#000000')}; // tema == cor de fundo
`