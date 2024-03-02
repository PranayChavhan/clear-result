import { View, Text } from "react-native";
import React, { useState } from "react";
import InputFeild from "./InputFeild";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  return (
    <View>
      <View>
        <Text className="text-[14px] font-medium text-[#828282] mb-2">
          Card Number
        </Text>
        <InputFeild
          placeholder="Enter the card number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          keyboardType="phone-pad"

        />
      </View>
    </View>
  );
};

export default CreditCard;
