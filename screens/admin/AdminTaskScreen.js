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
import ScreenTitle from "../../components/ui/ScreenTitle";
import ReportsTopNavigation from "../../components/reports/ReportsTopNavigation";
import IcArrowDownBlue from "../../assets/icons/ic_arrow_down_blue.svg";
import IcMultiPerson from "../../assets/icons/ic_multi_person.svg";
import SalesRepresentativeCard from "../../components/SalesRepresentativeCard";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../components/ui/Screen";
import Button from "../../components/ui/Button";

const AdminTaskScreen = () => {

  const navigation = useNavigation();
  const buttonsData = [
    { label: "Follow Ups", count: "34" },
    { label: "Pending Visits", count: "16" },
    { label: "Send Docs", count: "20" },
    { label: "Sample Text", count: "23" },
  ];

  return (
    <>
      <Screen className="bg-white">
        <TopBar logo={CrLogo} />

        <ScrollView>
          <ScreenTitle>Task Overview</ScreenTitle>

          <View className=" w-screen px-4">
            <View className="flex flex-row justify-between mb-4">
              <Text className="text-lg font-medium text-gray-800">
                All Tasks
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 5,
                  elevation: 5,
                }}
                activeOpacity={0.8}
              >
                <Text
                  style={{
                    color: "#2F80ED",
                    fontFamily: "Poppins-Regular",
                    marginRight: 5,
                  }}
                >
                  All sales rep
                </Text>
                <IcArrowDownBlue />
              </TouchableOpacity>
            </View>

            <View className="flex flex-row items-center justify-between gap-4 mb-4">
              {buttonsData.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {}}
                  className={`${
                    0 === index ? "bg-[#BFF0FF80]" : "bg-[#FAFAFA]"
                  } w-16 rounded-md flex flex-col items-center justify-center p-2`}
                >
                  <Text className="text-[22px] font-bold">{button.count}</Text>
                  <Text className="text-wrap text-center text-xs font-normal">
                    {button.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Image
              source={require("../../assets/images/admin_task.png")}
              className="w-full mb-12 "
              style={{
                height: Dimensions.get("screen").width * (9 / 16) - 60,
              }}
              resizeMode="contain"
            />

           <Button varient={"outline"} onPress={()=>navigation.navigate("CreateTask")}>Create Task</Button>

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

export default AdminTaskScreen;
