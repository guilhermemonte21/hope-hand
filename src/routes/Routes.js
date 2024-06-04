// imports vitais
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// imports de componentes
import { Perfil } from "../screens/Perfil/Perfil";
import { Login } from "../screens/Login/Login";

//instância do StackNavigator
const Stack = createNativeStackNavigator();

export const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Perfil"
                    component={Perfil}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}