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
      <View className="bg-white border-b-[0.8px] border-x-[0.8px] border-gray-300 rounded-xl rounded-t-none mt-8 shadow-md py-6">
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