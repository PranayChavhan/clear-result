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
  import Screen from "../../components/ui/Screen";
  import IcCalenderMini from "../../assets/icons/ic_calender_mini.svg";


  const ExhibitionGraphScreen = () => {
  
    // const name = route.params.name;÷
    return (
      <>
        <Screen className="bg-white">
          <TopBar logo={CrLogo} />
  
          <ScrollView>
            
            <View className="px-4 mb-4">
                <Text className="text-gray-800 text-lg font-medium">Exhibition Name 1</Text>
                <View className="flex mt-2 flex-row gap-x-2 items-center">
                <IcCalenderMini />
                <Text className="text-[12px] text-gray-500">
                  23rd Oct 2023 - 25th Oct 2023
                </Text>
              </View>
            </View>
  
            <View className=" w-screen px-4">
              <Image
                source={require("../../assets/images/exhibition_completed_1.png")}
                className="w-full mb-2 "
                style={{
                  height: Dimensions.get("screen").width * (9 / 16)-60,
                }}
                resizeMode="contain"
              />
  
              <Image
                source={require("../../assets/images/exhibition_completed_2.png")}
                className="w-full mb-4 "
                style={{
                  height: Dimensions.get("screen").width * (9 / 16) + 50,
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
  
  export default ExhibitionGraphScreen;
  