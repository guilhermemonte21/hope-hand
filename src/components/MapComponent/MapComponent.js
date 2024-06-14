import { useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { mapskey } from './../../utils/MapsKey';

// COMPONENTE DO MAPA 
export const MapComponent = ({ initialPosition, finalPosition }) => {
  
  const mapReference = useRef(null);

  return (
    <MapView
      ref={mapReference}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: initialPosition.coords.latitude,
        longitude: initialPosition.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{
          latitude: initialPosition.coords.latitude,
          longitude: initialPosition.coords.longitude,
        }}
        title="Localização atual"
        description="Você está aqui"
      />

      <Marker
        coordinate={{
          latitude: finalPosition.latitude,
          longitude: finalPosition.longitude,
        }}
        title="Localização atual"
        description="Você está aqui"
      />

      <MapViewDirections
        origin={initialPosition.coords}
        destination={{
          latitude: finalPosition.latitude,
          longitude: finalPosition.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        apikey={mapskey}
        strokeWidth={5}
        strokeColor="red"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 271,
  },
});
