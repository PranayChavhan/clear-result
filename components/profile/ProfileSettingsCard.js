import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IcSettTheme from "../../assets/icons/ic_set_theme.svg";
import { useNavigation } from "@react-navigation/native";

const ProfileSettingsCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View className={`rounded-xl  sm flex flex-col p-4 shadow-md bg-white m-4`}>
      {data.map((d, i) => (
        <View key={i}>
          <TouchableOpacity
            onPress={() => navigation.navigate(d.nav)}
            key={i}
            className={` my-1 flex gap-x-4 flex-row justify-start items-center `}
          >
            <View className={`w-8`}>{d.icon ? d.icon : <IcSettTheme />}</View>
            <View className="">
              <Text className="font-medium text-sm">{d.title}</Text>
              <Text className="text-xs mt-1 text-gray-600">{d.desc}</Text>
            </View>
            
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ProfileSettingsCard;
