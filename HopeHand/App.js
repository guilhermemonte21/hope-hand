// imports
import { StatusBar } from 'expo-status-bar';
import { Route } from './src/routes/Routes';
import { ThemeProvider } from './src/utils/ThemeContext';

// função app
export default function App() {
  return (
    <ThemeProvider>
      <StatusBar translucent backgroundColor='transparent' />

      <Route />
    </ThemeProvider>
  );
}