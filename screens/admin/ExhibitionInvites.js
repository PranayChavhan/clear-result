import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import UserListItem from "../../components/exhibition/UserListItem";
import { ScrollView } from "react-native";

const ExhibitionInvites = () => {
  return (
    <Screen className="bg-white">
      <ScrollView>
        <View className="px-4 mt-4">
          <View className="flex flex-row gap-x-4 items-center justify-between px-2">
            <View className="flex-1 bg-sky-100 p-2 rounded-md flex items-center justify-between">
              <Text className="text-xl font-semibold ">34</Text>
              <Text className="text-[12px] text-gray-500">Whatsapp</Text>
            </View>
            <View className="flex-1 bg-gray-100 p-2 rounded-md flex items-center justify-between">
              <Text className="text-xl font-semibold ">16</Text>
              <Text className="text-[12px] text-gray-500">Email</Text>
            </View>
          </View>

          <UserListItem
            imageSource={require("../../assets/images/profile1.png")}
            name="Praveen Sharma"
            email="praveens@gmail.com"
            isChecked={false}
          />

          <UserListItem
            imageSource={require("../../assets/images/profile2.png")}
            name="Ananya Gupta"
            email="agupta@gmail.com"
            isChecked={false}
          />

          <UserListItem
            imageSource={require("../../assets/images/profile3.png")}
            name="Rahul Shah"
            email="rahulshah@gmail.com"
            isChecked={false}
          />

          <UserListItem
            imageSource={require("../../assets/images/profile4.png")}
            name="Mohit Kale"
            email="kale.m@gmail.com"
            isChecked={false}
          />

          <UserListItem
            imageSource={require("../../assets/images/profile5.png")}
            name="Ritika Agrawal"
            email="agrawalriti@gmail.com"
            isChecked={false}
          />

          <UserListItem
            isChecked={false}
            imageSource={require("../../assets/images/profile6.png")}
            name="Reena Desai"
            email="agrawalriti@gmail.com"
          />

          <View className="flex flex-col items-center justify-center mt-4">
            <Text className="text-[12px] italic text-[#828282] mt-8">
              Powered by ClearResults
            </Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ExhibitionInvites;
