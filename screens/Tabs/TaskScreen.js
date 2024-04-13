import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
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
import Button from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";


const TaskScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "white",
          paddingBottom: 10,
        }}
      >
        <TopBar logo={CrLogo} />
        <View className="">
          <View className="flex flex-row items-center justify-between mt-4 px-4">
            <Text
              className="text-[18px]"
              style={{ fontFamily: "Poppins-Regular", fontWeight: 600 }}
            >
            </Text>

            <View className="flex flex-row items-center gap-2">
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
                  My Tasks
                </Text>
                <IcFilterDown />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=>navigation.navigate("TaskFilter")}
                style={{
                  backgroundColor:  "#FFF6DE",
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 5,
                }}
              >
                <IcFilter />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
     
      <TaskTopNavigation />
       
    </>
  );
};


export default TaskScreen;
