// imports
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// consts
const ThemeContext = createContext(); // criação do contexto

export const ThemeProvider = ({ children }) => {
    // CONSTS
    const [theme, setTheme] = useState('light'); // armazena o tema atual



    // FUNCTIONS
    const toggleTheme = async () => {
        // Alterna entre os temas 'light' e 'dark'
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        try {
            // Salva o novo tema no armazenamento local
            await AsyncStorage.setItem('theme', newTheme);
        } catch (error) {
            console.error('Error saving theme:', error);
        }
    }; // função de alternância de tema



    // EFFECTS
    useEffect(() => {
        const loadTheme = async () => {
            try {
                // Tentativa de carregar o tema salvo do armazenamento local
                const savedTheme = await AsyncStorage.getItem('theme');
                // Se houver um tema salvo, atualiza o estado com esse valor
                if (savedTheme !== null) {
                    setTheme(savedTheme);
                }
            } catch (error) {
                console.error('Error loading theme:', error);
            }
        };

        // Chamada da função de carregamento do tema ao montar o componente
        loadTheme();
    }, []); // carregar o tema salvo



    // fornecimento do contexto
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// exportação do contexto
export default ThemeContext;