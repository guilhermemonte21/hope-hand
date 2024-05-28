// imports essenciais
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// imports de tela
import { Home } from "../screens/Home/Home";

// instância do StackNavigator
const Stack = createNativeStackNavigator();

// rotas
export const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    component={Home}
                    name="Home"
                />
            </ Stack.Navigator>
        </NavigationContainer>
    );
};