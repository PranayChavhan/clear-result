import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IcCall from "../../assets/icons/ic_call.svg";
import Avatar01 from "../../assets/icons/avatar_01.svg";
import Avatar02 from "../../assets/icons/avatar_02.svg";
import IcCalendar from "../../assets/icons/ic_calendar.svg";
import { useNavigation } from "@react-navigation/native";
const Tab = createMaterialTopTabNavigator();

const TaskTopNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12, fontWeight: "bold", paddingHorizontal: 26 },
        indicatorStyle: {
          backgroundColor: "#2F80ED",
          width: 0.55,
          height: 3,
          marginBottom: -1,
        },
        tabStyle: { width: "auto", padding: 0 },
        scrollEnabled: true,
        style: {
          backgroundColor: "#FFBF1A0D",
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#E1E1E1",
        },
      }}
    >
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="Upcoming" component={TodayScreen} />
      <Tab.Screen name="Completed" component={TodayScreen} />
      <Tab.Screen name="All" component={TodayScreen} />
    </Tab.Navigator>
  );
};

const TodayScreen = () => {
  const [activeButton, setActiveButton] = useState(0);
  const navigation = useNavigation();
  const buttonsData = [
    { label: "Follow Ups", count: "02" },
    { label: "Pending Visits", count: "04" },
    { label: "Send Docs", count: "01" },
    { label: "Sample Text", count: "03" },
  ];

  const handleButtonPress = (index) => {
    setActiveButton(index);
  };

  return (
    <View className="bg-white h-screen px-4 pt-4">
      <View className="flex flex-row items-center justify-between gap-4 mb-4">
        {buttonsData.map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleButtonPress(index)}
            className={`${
              activeButton === index ? "bg-[#BFF0FF80]" : "bg-[#FAFAFA]"
            } w-16 rounded-md flex flex-col items-center justify-center p-2`}
          >
            <Text className="text-[22px] font-bold">{button.count}</Text>
            <Text className="text-wrap text-center text-[12px] font-normal">
              {button.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View className="border-[0.8px] border-gray-300 p-4 rounded-lg mb-4">
        <TouchableOpacity onPress={() => navigation.navigate("ShopProfile")}>
          <View className="flex flex-row items-start justify-between">
            <View>
              <Text className="text-[18px] font-bold">
                Follow up mode:Calling
              </Text>
              <Text className="text-[12px] italic text-[#828282] mt-1">
                Anisha Mulay : AM Studio
              </Text>
            </View>
            <View>
              <IcCall />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ShopProfile")}>
          <View className="flex flex-row items-center justify-between border-t-[0.8px] border-gray-300 mt-4 pt-1">
            <View className="flex flex-row items-center gap-1">
              <IcCalendar />
              <Text className="text-[14px] text-[#828282]">
                Mon, 10 July 2022
              </Text>
            </View>
            <View>
              <Avatar01 />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View className="border-[0.8px] border-gray-300 p-4 rounded-lg mb-4">
        <View className="flex flex-row items-start justify-between">
          <View>
            <Text className="text-[18px] font-bold">
              Follow up mode:Calling
            </Text>
            <Text className="text-[12px] italic text-[#828282] mt-1">
              Rahul Shah : H&M
            </Text>
          </View>
          <View>
            <IcCall />
          </View>
        </View>

        <View className="flex flex-row items-center justify-between border-t-[0.8px] border-gray-300 mt-4 pt-1">
          <View className="flex flex-row items-center gap-1">
            <IcCalendar />
            <Text className="text-[14px] text-[#828282]">
              Mon, 10 July 2022
            </Text>
          </View>
          <View>
            <Avatar02 />
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CreateTask");
        }}
        className={`py-3 bg-white border-[1px] border-[#2F80ED]  rounded-xl`}
      >
        <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
          Create new task
        </Text>
      </TouchableOpacity>

      <Text className="text-[12px] italic text-[#828282] absolute bottom-[30%] left-[39%]">
        Powered by ClearResults
      </Text>
    </View>
  );
};

export default TaskTopNavigation;
