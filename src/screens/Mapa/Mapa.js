import { Container, ContainerMargin } from "../../components/Container/Style";
import { Group } from "../../components/Group/Index";
import { Input } from "../../components/Input/Index";
import { Titulo } from "../../components/Titulo/Index";
import { Botao } from "../../components/Botao/Index";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { BotaoVoltar } from "../../components/BotaoVoltar/Index";
import { useEffect, useRef, useState } from "react";
import {
  LocationAccuracy,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import { mapskey } from "../../utils/MapsKey";

export const Mapa = ({ navigation, route }) => {
  // CONSTS
  const mapReference = useRef(null);
  const [initialPosition, setInitialPosition] = useState(null);

  // FUNCTIONS
  const CapturarLocalizacao = async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();

      setInitialPosition(currentPosition);
      RecarregarVisualizacaoMapa();
    }

  };

  const RecarregarVisualizacaoMapa = async () => {
    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [
          {
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
          },
          {
            latitude: route.params.local.latitude,
            longitude: route.params.local.longitude,
          },
        ],
        {
          edgePadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
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
  }, [initialPosition]);

  return (
    <Container
      style={{
        paddingTop: 0,
      }}
    >
      {initialPosition != null ? (
        <MapView
          ref={mapReference}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -23.6151292,
            longitude: -46.5711113,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: -23.6151292,
              longitude: -46.5711113,
            }}
            title="Localização atual"
            description="Você está aqui"
          />

          <Marker
            coordinate={{
              latitude: -23.6151392,
              longitude: -46.6713113,
            }}
            title="Localização atual"
            description="Você está aqui"
          />

          <MapViewDirections
            origin={initialPosition.coords}
            destination={{
              latitude: -23.6151392,
              longitude: -46.6713113,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            apikey={mapskey}
            strokeWidth={5}
            strokeColor="red"
          />
        </MapView>
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
            placeholder={"CEP: #####-###"}
            fontFamily={"Kanit_400Regular"}
          />

          <Input
            width="100%"
            editable={false}
            placeholder={"UF: ##"}
            fontFamily={"Kanit_400Regular"}
          />
        </Group>

        <Input
          width="100%"
          editable={false}
          placeholder={"Cidade:"}
          fontFamily={"Kanit_400Regular"}
        />

        <Input
          width="100%"
          editable={false}
          placeholder={"Logradouro"}
          fontFamily={"Kanit_400Regular"}
        />

        <Botao width="100%" radius={20} text={"Doar"} />

        <Botao
          onPress={() => {
            navigation.replace("Perfil");
          }}
          width="50%"
          text={"Voltar"}
          bgColor="#B0B0B0"
          radius={20}
        />
      </ContainerMargin>
    </Container>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 271,
  },

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
