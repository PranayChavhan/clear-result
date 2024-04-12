import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
    Dimensions,
  } from "react-native";
  import React, { useState } from "react";
  import TopBar from "../../components/ui/TopBar";
  import CrLogo from "../../assets/images/cr_logo.png";
  import IcFilter from "../../assets/icons/ic_filter.svg";
  import IcFilterDown from "../../assets/icons/ic_filter_down.svg";
  import Constants from "expo-constants";
  import TaskTopNavigation from "../../components/task/TaskTopNavigation";
  import IcSearch from "../../assets/icons/ic_search.svg";
  import Checkbox from "../../components/ui/Checkbox";
  import Screen from "../../components/ui/Screen";
  import ScreenTitle from "../../components/ui/ScreenTitle";
  import ReportsTopNavigation from "../../components/reports/ReportsTopNavigation";
  import Button from "../../components/ui/Button";
  
  import IcMultiPerson from "../../assets/icons/ic_multi_person.svg";
  import SalesRepresentativeCard from "../../components/SalesRepresentativeCard";
  
  const SalesRepresentative = ({route}) => {
  
    // const name = route.params.name;÷
    return (
      <>
        <Screen className="bg-white">
          <TopBar logo={CrLogo} />
  
          <ScrollView>
            
            <View className="px-4 mb-4">
                <Text className="text-gray-800 text-lg font-medium">Amit Salve</Text>
                <Text className="text-gray-500 text-xs">Sales Representative</Text>
            </View>
  
            <View className=" w-screen px-4">
              <Image
                source={require("../../assets/images/admin_1.png")}
                className="w-full mb-2 "
                style={{
                  height: Dimensions.get("screen").width * (9 / 16)-60,
                }}
                resizeMode="contain"
              />
  
              <Image
                source={require("../../assets/images/admin_2.png")}
                className="w-full mb-4 "
                style={{
                  height: Dimensions.get("screen").width * (9 / 16) + 12,
                }}
                resizeMode="contain"
              />
  
             
              <View className="mb-32 mt-12">
                <Text className="text-gray-400 text-center italic text-sm text-light">
                  Powered By ClearResult
                </Text>
              </View>
            </View>
          </ScrollView>
        </Screen>
      </>
    );
  };
  
  export default SalesRepresentative;
  