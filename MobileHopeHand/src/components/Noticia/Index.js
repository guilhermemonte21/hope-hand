import { Alert, Linking } from "react-native";
import {
  NoticiaBlur,
  NoticiaImage,
  NoticiaStyled,
  NoticiaTitle,
} from "./Style";
import { useCallback } from "react";

export const Noticia = ({
  image,
  title = "",
  link,
  width = "100%",
  height = 100,
}) => {
  const openLink = useCallback(async () => {
    const supported = await Linking.canOpenURL(link);

    if (supported) {
      await Linking.openURL(link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return (
    <NoticiaStyled
      onPress={() => openLink()}
      style={{ width: width, height: height }}
    >
      <NoticiaImage source={image} />
      <NoticiaBlur />
      {title != "" && (
        <NoticiaTitle numberOfLines={2} textBreakStrategy="balanced">
          {title}
        </NoticiaTitle>
      )}
    </NoticiaStyled>
  );
};
