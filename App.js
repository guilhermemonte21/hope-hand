// imports
import { StatusBar } from 'react-native';
import { Route } from './src/routes/Routes';

// fontes
import {
  useFonts,
  Kanit_400Regular
} from "@expo-google-fonts/kanit";
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Kanit_400Regular,
    Poppins_400Regular
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />

      <Route />
    </>
  );
}
