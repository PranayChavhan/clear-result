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
import Screen from "../../components/ui/Screen";
import { ScrollView } from "react-native";

const TaskScreen = () => {
  const navigation = useNavigation();

  const [dropdwn, setDropdwn] = useState(false);
  const [current, setCurrent] = useState("My Task");

  return (
    <>
      <Screen
        style={{
          backgroundColor: "white",
          paddingBottom: 10,
        }}
      >
        <TopBar logo={CrLogo} />

        <View className="">
          <View className="flex flex-row items-center justify-between mt-4 px-4 pb-6">
            <Text
              className="text-[18px]"
              style={{ fontFamily: "Poppins-Regular", fontWeight: 600 }}
            ></Text>
            <View className="relative">
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
                  onPress={() => setDropdwn(!dropdwn)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={{
                      color: "#2F80ED",
                      fontFamily: "Poppins-Regular",
                      marginRight: 5,
                    }}
                  >
                    {current}
                  </Text>
                  <IcFilterDown />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("TaskFilter")}
                  style={{
                    backgroundColor: "#FFF6DE",
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

              {/* Drop Down */}
              <View
                style={{ zIndex: 50 }}
                className={`${
                  dropdwn ? "" : "hidden"
                } z-50 absolute top-12 right-2 p-2 rounded-lg shadow-md shadow-gray-600 bg-white`}
              >
                <TouchableOpacity
                  onPress={() => {setDropdwn(false);setCurrent("My Task")}}
                  className="px-4 py-2 rounded-md"
                >
                  <Text className="text-sm ">My Task</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {setDropdwn(false);setCurrent("Other Task")}}
                  className="px-4 py-2 rounded-md"
                >
                  <Text className="text-sm ">Other Tasks</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <TaskTopNavigation />
      </Screen>
    </>
  );
};

export default TaskScreen;
