import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
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

const DashboardScreen = () => {
  return (
    <>
      <Screen>
        <TopBar logo={CrLogo} />

        <ScrollView>
          <ScreenTitle>Admin Dashboards</ScreenTitle>

          <View className="p-1">
            <Image
              source={require("../../assets/images/reports/report_1.png")}
              className="w-screen max-h-[250px] object-contain mb-4"
            />

            <Image
              source={require("../../assets/images/reports/report_4.png")}
              className="w-screen max-h-[170px] my-4 object-contain"
            />

            <View className="">
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

export default DashboardScreen;
