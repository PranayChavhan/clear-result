import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import IcFilter from "../../assets/icons/ic_filter.svg";
import IcDown from "../../assets/icons/ic_down.svg";
import Button from "../../components/ui/Button";
import IcClockOrange from "../../assets/icons/ic_clock_orange.svg";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";


const ServerScreen = () => {
  return (
    <Screen>
        <TopBar logo={CrLogo} />
      {/* Filter */}
      <ScrollView>
        <View>
          <View>
            <Text className="text-lg font-bold text-gray-800 my-4 ml-4">
                Server Processing Time
            </Text>
          </View>
          {/* Images */}
          <View className="p-1">
            <Image
              source={require("../../assets/images/server_analysis.png")}
              className="w-full mb-4 "
              style={{
                height: Dimensions.get("screen").width * (9 / 16) + 12,
              }}
              resizeMode="contain"
            />

           <View className="flex flex-row p-4 m-3 bg-gray-50 rounded-lg">
            <IcClockOrange />
            <View className="pl-3">
                <Text className="text-lg font-bold">8.0 s</Text>
                <Text className="text-sm text-gray-400">Processing Time</Text>
            </View>
           </View>
          </View>
          

         
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ServerScreen;
