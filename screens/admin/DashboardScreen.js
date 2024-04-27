import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  BackHandler,
} from "react-native";
import React, { useEffect, useState } from "react";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import ScreenTitle from "../../components/ui/ScreenTitle";
import Screen from "../../components/ui/Screen";

import IcMultiPerson from "../../assets/icons/ic_multi_person.svg";
import SalesRepresentativeCard from "../../components/SalesRepresentativeCard";
import { useNavigation } from "@react-navigation/native";

const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleSalesRepresentative = (name) => {
    console.log(name);
    navigation.navigate("SalesRepresentative", { name: name });
  }

  return (
    <>
      <Screen className="bg-white">
        <TopBar logo={CrLogo} />

        <ScrollView>
          
          <ScreenTitle>Admin Dashboards</ScreenTitle>

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

            <View>

              <View className="flex flex-row items-center gap-x-3">
                <IcMultiPerson/>
                <Text className="text-lg font-medium text-gray-800">
                  Sales Representatives
                </Text>
              </View>

                <View className="flex mt-4 flex-row justify-between">
                  <SalesRepresentativeCard title={"Amit Gupta"} onPress={handleSalesRepresentative}/>
                  <SalesRepresentativeCard title={"Rohit Mehta"} onPress={handleSalesRepresentative}/>
                </View>
                <View className="flex flex-row justify-between">
                  <SalesRepresentativeCard title={"Rahul Sharma"} onPress={handleSalesRepresentative}/>
                  <SalesRepresentativeCard title={"Ananya Roy"} onPress={handleSalesRepresentative}/>
                </View>

            </View>

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

export default DashboardScreen;
