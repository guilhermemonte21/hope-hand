import Toast from "react-native-toast-message"

export const ShowToastStyled = ({
    type,
    visibilityTime = 3000,
    text1,
    text1Style = {
        color: "#323030"
    },
    text2,
    text2Style = {
        color: "#323030",
        fontFamily: "Poppins_400Regular"
    },
    swipeable,
}) => {
    Toast.show({
        type: type,
        visibilityTime: visibilityTime,
        text1: text1,
        text1Style: text1Style,
        text2: text2,
        text2Style: text2Style,
        swipeable: swipeable
    })
}