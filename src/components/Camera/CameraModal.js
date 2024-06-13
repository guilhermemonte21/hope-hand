import { CameraType, Camera } from "expo-camera/legacy";

import { useEffect, useRef, useState } from "react";

import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components/native";
import {
  AntDesign,
  Ionicons,
  FontAwesome6,
  FontAwesome,
} from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  PinchGestureHandler,
} from "react-native-gesture-handler";
import { ActivityIndicator, Image, Modal, View } from "react-native";

const CloseCamera = styled(AntDesign)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  marginTop: 10px;
`;

const ToggleCamera = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  marginTop: 10px;
`;

const TakePhoto = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -25px;
  z-index: 10;
`;
const FlashIcon = styled(Ionicons)`
  left: 50%;
  top: 10px;
  margin-left: -20px;
  z-index: 10;
  marginTop: 10px;
`;

const LastPhoto = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 10;
`;

export const CameraModal = ({
  navigation,
  setIsPhotoSaved = () => { },
  setPhoto,
  photo,
  setModalOpen,
  setInCamera,
  inCamera,
  getMediaLibrary = false,

}) => {
  const cameraRef = useRef(null);

  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  const [zoom, setZoom] = useState(0);

  const [type, setType] = useState(CameraType.back);

  const [lastPhoto, setLastPhoto] = useState(null);

  const [carregando, setCarregando] = useState(false); // ativa o spinner do botão

  useEffect(() => {
    setPhoto(null);

    if (getMediaLibrary) {
      GetLatestPhoto();
    }
  }, [inCamera]);

  async function GetLatestPhoto() {
    const { assets } = await MediaLibrary.getAssetsAsync({
      sortBy: [[MediaLibrary.SortBy.creationTime, false]],
      first: 1,
    });

    if (assets.length > 0) {
      setLastPhoto(assets[0].uri);
    }

  }

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();

      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  async function CapturePhoto() {
    if (cameraRef) {
      const options = {
        quality: 1,
        isImageMirror: false,
      };

      const fotoTirada = await cameraRef.current.takePictureAsync(options);
      await setPhoto(fotoTirada.uri);
      console.log(photo);
      setInCamera(false)
      setModalOpen(true);
      setCarregando(false);

      scrollTo(750, 0);
    }
  }


  async function SelectImageGallery() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);

      setInCamera(false);
    }
  }

  const changeZoom = (event) => {
    if (event.nativeEvent.scale > 1 && zoom < 1) {
      setZoom(zoom + 0.1);
    }
    if (event.nativeEvent.scale < 1 && zoom > 0) {
      setZoom(zoom - 0.1);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PinchGestureHandler onGestureEvent={(event) => changeZoom(event)}>
        <Camera
          autoFocus={Camera.Constants.AutoFocus.on}
          zoom={zoom}
          flashMode={flash}
          isIma
          ref={cameraRef}
          type={type}
          ratio="15:9"
          style={{
            flex: 1,
          }}
        >
          <CloseCamera
            name="closecircle"
            size={30}
            color="#3FA7E4"
            onPress={() => {
              setInCamera(false);
            }}
          />
          <ToggleCamera
            onPress={() =>
              setType(
                type === CameraType.front ? CameraType.back : CameraType.front
              )
            }
          >
            <FontAwesome6 name="camera-rotate" size={30} color="#3FA7E4" />
          </ToggleCamera>
          <FlashIcon
            onPress={() =>
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : flash === Camera.Constants.FlashMode.on
                    ? Camera.Constants.FlashMode.torch
                    : Camera.Constants.FlashMode.off
              )
            }
            name={
              flash === Camera.Constants.FlashMode.off
                ? "flash-off"
                : flash === Camera.Constants.FlashMode.torch
                  ? "flashlight"
                  : "flash"
            }
            size={30}
            color="#3FA7E4"
          />
          <TakePhoto
            onPress={() => {
              setCarregando(true);
              CapturePhoto();
              setIsPhotoSaved(false);
            }}
          // carregando={carregando}
          >
            {
              carregando ?
                <ActivityIndicator
                  color={"#3FA7E4"}
                  size={24}
                />
                :
                <FontAwesome name="camera" size={50} color="#3FA7E4" />
            }
          </TakePhoto>
          {lastPhoto != null ? (
            <LastPhoto onPress={() => SelectImageGallery()}>
              <Image
                borderRadius={5}
                width={60}
                height={60}
                marginBottom={20}
                source={{ uri: lastPhoto }}
              />
            </LastPhoto>
          ) : null}
        </Camera>
      </PinchGestureHandler>
    </GestureHandlerRootView>

  );
};