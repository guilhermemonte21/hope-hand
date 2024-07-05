// imports
import { LogBox, StatusBar } from "react-native";
import { Route } from "./src/routes/Routes";

// fontes
import {
  useFonts,
  Kanit_300Light,
  Kanit_400Regular,
} from "@expo-google-fonts/kanit";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Kanit_400Regular,
    Kanit_300Light,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />

        <Route />
      </>
    );
  }
}
