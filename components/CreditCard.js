import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputFeild from "./ui/InputFeild";
import { useNavigation } from "@react-navigation/native";

const CreditCard = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState("");
  return (
    <View>
      <View className="mb-3">
        <Text className="text-[14px] font-medium text-[#828282] my-2">
          Card Number
        </Text>
        <InputFeild
          placeholder="Enter the card number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          keyboardType="phone-pad"
        />
      </View>

      <View className="mb-3">
        <Text className="text-[14px] font-medium text-[#828282] my-2">
          Name (as appear on the card)
        </Text>
        <InputFeild
          placeholder="Enter the name as on the card"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          keyboardType="phone-pad"
        />
      </View>

      <View className="mb-3 flex flex-row items-center justify-between ">
        <View className="w-[46%]">
          <Text className="text-[14px] font-medium text-[#828282] my-2">
            Expiry Date
          </Text>
          <InputFeild
            placeholder="MM/DD"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
            keyboardType="phone-pad"
          />
        </View>

        <View className="w-[46%]">
          <Text className="text-[14px] font-medium text-[#828282] my-2">
            CVV
          </Text>
          <InputFeild
            placeholder="Enter the CVV"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <View className="mb-3">
        <Text className="text-[14px] font-medium text-[#828282] my-2">
          Company/Organisation (Optional)
        </Text>
        <InputFeild
          placeholder="Enter the name as on the card"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          keyboardType="phone-pad"
        />
      </View>

      <View className="mb-3">
        <Text className="text-[14px] font-medium text-[#828282] my-2">
          GST Number (Optional)
        </Text>
        <InputFeild
          placeholder="Enter the GST number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          keyboardType="phone-pad"
        />
      </View>

      <View className="mb-3">
        <Text className="text-[14px] font-medium text-[#828282] my-2">
          Address
        </Text>
        <InputFeild
          placeholder="Enter the address"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          keyboardType="phone-pad"
        />
      </View>

      <View className="mb-3 flex flex-row items-center justify-between ">
        <View className="w-[46%]">
          <Text className="text-[14px] font-medium text-[#828282] my-2">
            City
          </Text>
          <InputFeild
            placeholder="Enter the city"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
            keyboardType="phone-pad"
          />
        </View>

        <View className="w-[46%]">
          <Text className="text-[14px] font-medium text-[#828282] my-2">
            ZIP Code
          </Text>
          <InputFeild
            placeholder="Enter the code"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <View className="mb-3 flex flex-row items-center justify-between ">
        <View className="w-[46%]">
          <Text className="text-[14px] font-medium text-[#828282] my-2">
            State
          </Text>
          <InputFeild
            placeholder="Enter the state"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
            keyboardType="phone-pad"
          />
        </View>

        <View className="w-[46%]">
          <Text className="text-[14px] font-medium text-[#828282] my-2">
            Country
          </Text>
          <InputFeild
            placeholder="Enter the country"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <View className="my-4 mb-80...0 flex flex-row items-center justify-between">
        <TouchableOpacity
          className={`py-3 bg-white border-[1px] w-[48%] border-[#2F80ED]  rounded-xl`}
        >
          <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
            Discard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
          }}
          className={`py-3  w-[48%]  bg-[#2F80ED]  rounded-xl`}
        >
          <Text className="text-[16px] font-semibold text-center text-white">
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreditCard;
