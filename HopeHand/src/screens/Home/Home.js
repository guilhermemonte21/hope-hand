// imports
import Container from '../../components/Container/Style';
import { useContext } from 'react';
import ThemeContext from '../../utils/ThemeContext';
import Button from '../../components/Button/Style'



export const Home = () => {
    // CONSTS
    const { theme, toggleTheme } = useContext(ThemeContext); // altera o tema claro/escuro


    return (
        <Container>
            <Button onPress={toggleTheme}>

            </Button>
        </Container>
    )
}