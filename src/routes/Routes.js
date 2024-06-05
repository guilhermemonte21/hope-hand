// imports vitais
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// imports de componentes
import { Login } from "../screens/Login/Login";

import { Cadastro } from "../screens/Cadastro/Cadastro";
import { RecuperarSenha } from "../screens/RecuperarSenha/RecuperarSenha";
import { VerificarCodigo } from "../screens/VerificarCodigo/VerificarCodigo";
import { Navigation } from "../screens/Navigation/Navigation";
import { Home } from "../screens/Home/Home";
import { Inicio } from './../screens/Inicio/Inicio';
import { ListaOngs } from "../screens/ListaOngs/ListaOngs";

//instância do StackNavigator
const Stack = createNativeStackNavigator();

export const Route = () => {
  {/* TELA DE NAVEGACAO PARA TESTES */}
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

        
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="ListaOngs" component={ListaOngs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
