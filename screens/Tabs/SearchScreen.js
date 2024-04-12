import { Text, View, TextInput } from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import HomeScreen from "../dashboard/HomeScreen";
import CrLogo from "../../assets/images/cr_logo.png";
import InputFeild from "../../components/ui/InputFeild";
import IcSearch from "../../assets/icons/ic_search.svg";

const SearchScreen = () => {
  return (
    <Screen>
      <TopBar logo={CrLogo} />
      <View className="flex justify-center  pl-6">
        <Text className="text-sm my-2 text-gray-600">Search</Text>
        <View className="p-2 m-0 py-2 bg-white border w-full border-blue-200 rounded-lg flex flex-row gap-x-3 items-center ">
            <IcSearch/>
            <TextInput placeholder="Search" className="w-full"/>
        </View>
      </View>
    </Screen>
  );
};

export default SearchScreen;
