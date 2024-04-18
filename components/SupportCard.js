import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import IcMinusBlue from "../assets/icons/ic_minus_blue.svg";
import IcPlusGray from "../assets/icons/ic_plus_gray.svg";

const SupportCard = ({index, question, answer, open, handleClick}) => {
    
  return (
    <View className="p-2 px-4 mt-3">
    <View className="p-4 rounded-2xl bg-white shadow-md border-0.5 border-gray-100 shadow-gray-400 h-auto flex flex-col overflow-hidden">
       <View className="felx flex-row items-center justify-between">
       <Text className="text-sm flex-1">{question}</Text>
       <TouchableOpacity onPress={handleClick}>
        {
            open ? <IcMinusBlue /> : <IcPlusGray />
        
        }
         </TouchableOpacity>
       </View>
        <View className={`pt-4 ${open?"":"hidden"}`}>
            <Text className="text-gray-500 text-xs ">{answer}</Text>
        </View>
    </View>
    </View>
  );
};

export default SupportCard;

