import { View, Button } from "react-native";

export const Navigation = ({ navigation }) => {
  //TELA DE NAVEGACAO PARA TESTES
  return (
    <View>
      <Button
        title="Inicio"
        onPress={() => navigation.navigate("Inicio")}
      />

      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />

      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
      />

      <Button
        title="ListaOngs"
        onPress={() => navigation.navigate("ListaOngs")}
      />

      <Button
        title="RecuperarSenha"
        onPress={() => navigation.navigate("RecuperarSenha")}
      />

      <Button
        title="VerificarCodigo"
        onPress={() => navigation.navigate("VerificarCodigo")}
      />

      <Button
        title="AlterarSenha"
        onPress={() => navigation.navigate("AlterarSenha")}
      />

      <Button
        title="Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />


      <Button
        title="Perfil"
        onPress={() => navigation.navigate("Perfil")}
      />

      <Button
        title="Mapa"
        onPress={() => navigation.navigate("Mapa")}
      />
      <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />

      <Button
        title="ConfirmarPagamento"
        onPress={() => navigation.navigate("ConfirmarPagamento")}
      />
    </View>
  );
};
