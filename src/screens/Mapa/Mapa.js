import { Container, ContainerMargin } from "../../components/Container/Style";
import { Group } from "../../components/Group/Index";
import { Input } from "../../components/Input/Index";
import { Titulo } from "../../components/Titulo/Index";
import { Botao } from "../../components/Botao/Index";
import { useEffect, useRef, useState } from "react";
import {
  LocationAccuracy,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import {
  ActivityIndicator,
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MapComponent } from "../../components/MapComponent/MapComponent";
import { PayModal } from './../../components/Modal/PayModal/PayModal';

// TELA DE LOCALIZACAO
export const Mapa = ({ navigation, route }) => {

  const [showModal, setShowModal] = useState(false);
  // CONSTS
  const [initialPosition, setInitialPosition] = useState(null);

  // LOCAL DA ONG PEGO PELO ROUTE PARAMS
  const finalPosition = {
    latitude: Number(route.params.local.latitude),
    longitude: Number(route.params.local.longitude),
  };

  // FUNCTIONS
  const CapturarLocalizacao = async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();

      setInitialPosition(currentPosition);
      RecarregarVisualizacaoMapa();
    }
  };

  // CARREGA O MAPA PROPORCIONANDO ENCAIXE DOS DOIS MARCADORES DE LOCAL 
  const RecarregarVisualizacaoMapa = async () => {
    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [
          {
            latitude: finalPosition.latitude,
            longitude: finalPosition.longitude,
          },
          {
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
          },
        ],
        {
          edgePadding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
            animated: true,
          },
        }
      );
    }
  };

  // EFFECTS
  useEffect(() => {
    CapturarLocalizacao();

    watchPositionAsync(
      {
        accuracy: LocationAccuracy.High,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      async (response) => {
        setInitialPosition(response);

        mapReference.current?.animateCamera({
          pitch: 0,
          center: response.coords,
        });
      }
    );

    RecarregarVisualizacaoMapa();
  }, []);

  useEffect(() => {
    RecarregarVisualizacaoMapa();
  }, []);

  return (
    <Container
      style={{
        paddingTop: 0,
      }}
    >
      {initialPosition != null ? (
        <MapComponent initialPosition={initialPosition} finalPosition={finalPosition} />
      ) : (
        <View style={styles.nonMap}>
          <Text style={styles.nonMapText}>Carregando mapa...</Text>

          <ActivityIndicator color="#FFF" size={25} />
        </View>
      )}

      <Titulo
        text={"Ong"}
        textTransform={"uppercase"}
        color={"#7BCAF7"}
        fontSize={20}
      />

      <ContainerMargin>
        <Group row justifyContent="space-between">
          <Input
            width="100%"
            editable={false}
            value={route.params.local.cep}
            fontFamily={"Kanit_400Regular"}
          />

          <Input
            width="100%"
            editable={false}
            value={route.params.local.number.toString()}
            fontFamily={"Kanit_400Regular"}
          />
        </Group>
        <Input
          width="100%"
          editable={false}
          value={route.params.local.state}
          fontFamily={"Kanit_400Regular"}
        />

        <Input
          width="100%"
          editable={false}
          value={route.params.local.city}
          fontFamily={"Kanit_400Regular"}
        />

        <Input
          width="100%"
          editable={false}
          value={route.params.local.address}
          fontFamily={"Kanit_400Regular"}
        />

        <Botao width="100%" radius={20} text={"Doar"} />

        <Group row>
          <Botao
            onPress={() => navigation.replace("Perfil", { ongId: route.params.ongId})}
            width="50%"
            text={"Voltar"}
            bgColor="#B0B0B0"
            radius={20}
          />
          <Botao
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps/place/${finalPosition.latitude}, ${finalPosition.longitude}

                `
              )
            }
            width="50%"
            text={"Abrir Maps"}
            radius={20}
          />
        </Group>
      </ContainerMargin>
      <PayModal setShowInformationModal={setShowModal} visible={showModal}/> 
    </Container>
  );
};

const styles = StyleSheet.create({

  nonMap: {
    width: "100%",
    height: 271,

    alignItems: "center",
    justifyContent: "center",
    gap: 20,

    backgroundColor: "#B0B0B0",
  },

  nonMapText: {
    color: "#FFF",
    textTransform: "uppercase",
    fontFamily: "Kanit_400Regular",
  },
});