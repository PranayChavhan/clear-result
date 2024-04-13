import { View, Text, Image } from "react-native";
import React from "react";
import Checkbox from "../ui/Checkbox";


const UserListItem = ({  imageSource, name, email, isChecked}) => {
  return (
    <View className="flex flex-row py-3 items-center justify-start mt-4 bg-white rounded-lg">
     {isChecked&& <Checkbox checked={isChecked} />}

      <Image className="rounded-full w-12 h-12 mx-4" source={imageSource} />

      <View>
        <Text className="text-[16px] font-[500]">{name}</Text>
        <Text className="text-[12px] text-gray-500">{email}</Text>
      </View>
    </View>
  );
};

export default UserListItem;
