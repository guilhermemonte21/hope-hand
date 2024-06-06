import React, { useState } from "react";
import { Text, View } from "react-native";
import { BottomBox, ButtonTree } from "./Style";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const BotaoPay = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (index) => {
    setSelectedButton(index);
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1, margin: 20 }}>
      <BottomBox>
        <ButtonTree
          isSelected={selectedButton === 0}
          onPress={() => handleButtonPress(0)}
        >
          <FontAwesome
            name="credit-card"
            size={20}
            color={selectedButton === 0 ? "#FFFFFF" : "#3FA7E4"}
          />
        </ButtonTree>
        <ButtonTree
          isSelected={selectedButton === 1}
          onPress={() => handleButtonPress(1)}
        >
          <FontAwesome5
            name="money-bill"
            size={20}
            color={selectedButton === 1 ? "#FFFFFF" : "#3FA7E4"}
          />
        </ButtonTree>
        <ButtonTree
          isSelected={selectedButton === 2}
          onPress={() => handleButtonPress(2)}
        >
          <Ionicons
            name="qr-code-sharp"
            size={20}
            color={selectedButton === 2 ? "#FFFFFF" : "#3FA7E4"}
          />
        </ButtonTree>
      </BottomBox>
    </View>
  );
};

export default BotaoPay;
