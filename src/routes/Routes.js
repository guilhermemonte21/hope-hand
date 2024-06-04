// imports vitais
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// imports de componentes
import { Login } from "../screens/Login/Login";
import { Cadastro } from "../screens/Cadastro/Cadastro";
import { RecuperarSenha } from "../screens/RecuperarSenha/RecuperarSenha";
import { VerificarCodigo } from "../screens/VerificarCodigo/VerificarCodigo";

//instância do StackNavigator
const Stack = createNativeStackNavigator();

export const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                animation: "fade_from_bottom"
            }}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                />

                <Stack.Screen
                    name="RecuperarSenha"
                    component={RecuperarSenha}
                />

                <Stack.Screen
                    name="VerificarCodigo"
                    component={VerificarCodigo}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}