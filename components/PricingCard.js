import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";

const PricingCard = ({ title, description, price, onPress }) => {
  return (
    <View className="bg-white border-0.5 shadow-lg m-2 border-gray-300 shadow-gray-400 rounded-xl  mt-8  py-6">
      <Text className="text-[14px] font-semibold px-4">{title}</Text>

      <Text className="text-[12px] text-gray-500 text-wrap pr-20 my-2 px-4">
        {description}
      </Text>

      <View className="bg-gray-200 p-4 flex flex-row items-center mb-4">
        <Text className="text-[26px] font-[900]">{price}</Text>
        <Text className="text-[26px] text-gray-500 font-semibold">
          {" "}
          / month
        </Text>
      </View>

      <TouchableOpacity
        onPress={onPress}
        className={`py-3   bg-[#2F80ED]  rounded-lg mx-4`}
      >
        <Text className="text-[16px] font-semibold text-center text-white">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PricingCard;
