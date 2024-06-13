// imports vitais
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// imports de componentes
import { Perfil } from "../screens/Perfil/Perfil";
import { Login } from "../screens/Login/Login";

import { CadastroUsuario } from "../screens/Cadastro/CadastroUsuario";
import { RecuperarSenha } from "../screens/RecuperarSenha/RecuperarSenha";
import { VerificarCodigo } from "../screens/VerificarCodigo/VerificarCodigo";
import { Navigation } from "../screens/Navigation/Navigation";
import { Home } from "../screens/Home/Home";
import { Inicio } from "./../screens/Inicio/Inicio";
import { ListaOngs } from "../screens/ListaOngs/ListaOngs";

import { AlterarSenha } from "../screens/AlterarSenha/AlterarSenha";
import { Mapa } from "../screens/Mapa/Mapa";

import { Sobre } from "../screens/Sobre/Sobre";
import { ConfirmarPagamento } from "../screens/ConfirmarPagamento/ConfirmarPagamento";
import { CadastroOng } from "../screens/Cadastro/CadastroOng";


//instância do StackNavigator
const Stack = createNativeStackNavigator();

export const Route = () => {
  {
    /* TELA DE NAVEGACAO PARA TESTES */
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerShown: false,
          animation: "fade_from_bottom",
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Navigation"
          component={Navigation}
        />

        <Stack.Screen
          name="Inicio"
          component={Inicio}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="CadastroUsuario"
          component={CadastroUsuario}
        />

        <Stack.Screen
          name="CadastroOng"
          component={CadastroOng}
        />

        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
        />

        <Stack.Screen
          name="VerificarCodigo"
          component={VerificarCodigo}
        />

        <Stack.Screen
          name="AlterarSenha"
          component={AlterarSenha}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Perfil"
          component={Perfil}
        />

        <Stack.Screen
          name="ListaOngs"
          component={ListaOngs}
        />

        <Stack.Screen
          name="Mapa"
          component={Mapa}
        />

        <Stack.Screen
          name="ConfirmarPagamento"
          component={ConfirmarPagamento}
        />

        <Stack.Screen
          name="Sobre"
          component={Sobre}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
