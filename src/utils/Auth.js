import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { encode, decode } from "base-64";
import api from "../service/Service";

if (!global.atob) {
  global.atob = decode;
}

if (!global.btoa) {
  global.btoa = encode;
}

export const userDecodeToken = async () => {
  const user = JSON.parse(await AsyncStorage.getItem("token")).token;

  if (user === null) {
    return null;
  }

  //Decodifica o token recebido
  const decoded = jwtDecode(user);

  let fotoUsuario;

  try {
    const response = await api.get(`/Usuario/BuscarPorId?id=${decoded.jti}`);
    //PARA ATUALIZAR A FOTO E O NOME DO USER
    fotoUsuario = response.data.foto;
    decoded.name = response.data.nome;
  } catch (error) {
    console.log(error);
  }

  let ongId;
  //busca a ong do administrador
  try {
    const response = await api.post("/Ong/BuscarPorIdUsuario", {
      id: decoded.jti,
    });

    ongId = response.data.id;
  } catch (error) {
    console.log(error);
  }

  return {
    id: decoded.jti,
    email: decoded.email,
    token: user,
    foto: fotoUsuario,
    ongId: ongId,
  };
};
