import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Checkbox from "../../components/ui/Checkbox";
import React, { useState } from "react";
import Screen from "../../components/ui/Screen";
import CrLogo from "../../assets/images/cr_logo.png";
import { useNavigation } from "@react-navigation/native";

import TopBar from "../../components/ui/TopBar";
import ScreenTitle from "../../components/ui/ScreenTitle";
import InputFeild from "../../components/ui/InputFeild";
import Button from "../../components/ui/Button";

const ReportFilterScreen = () => {
  const navigation = useNavigation();
  const types = ["Follow Up", "Pending Vists", "Sample Docs", "Sample Tasks"];
  const subTypes = [
    "Call",
    "Mail",
    "Message",
    "Brochure",
    "Catalogue",
    "Invites",
  ];

  const [lang, setLang] = useState(types[0]);

  const handleBack = () =>{
    navigation.navigate("Reports")
  }

  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />

      <ScrollView>
        <ScreenTitle>Task Completion Filter</ScreenTitle>

        <View className="px-4">
          <Text className=" text-sm text-gray-600 py-2">Search</Text>
          <InputFeild placeholder={"Search"} />
        </View>
        <View className="py-3 px-4">
          <Text className=" text-gray-500 font-medium">Types</Text>
        </View>
        <View className="flex flex-wrap justify-around gap-y-3 p-4 px-6">
          {/* Check box for typess */}
          {types.map((types, i) => (
            <TouchableWithoutFeedback key={i}>
              <View className="flex p-2 py-4 flex-row gap-3 ">
                <Checkbox
                  checked={lang === types}
                  label={types}
                  onChange={() => {
                    setLang(types);
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>

        <View className="py-3 px-4">
          <Text className=" text-gray-500 font-medium">Sub Types</Text>
        </View>
        <View className="flex flex-wrap justify-around gap-y-3 p-4 px-6">
          {/* Check box for typess */}
          {subTypes.map((types, i) => (
            <TouchableWithoutFeedback key={i}>
              <View className="flex p-2 py-4 flex-row gap-3 ">
                <Checkbox
                  checked={lang === types}
                  label={types}
                  onChange={() => {
                    setLang(types);
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>

        <View className="mt-4 flex flex-row items-center justify-between">
          <Button onPress={handleBack} varient="primary">Apply</Button>
          <Button onPress={handleBack} varient="outline">Discard</Button>
        </View>

        <View className="mb-32 mt-8">
          <Text className="text-gray-400 text-center italic text-sm text-light">
            Powered By ClearResult
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ReportFilterScreen;
