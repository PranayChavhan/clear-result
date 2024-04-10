import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IcCall from "../../assets/icons/ic_call.svg";
import Avatar01 from "../../assets/icons/avatar_01.svg";
import Avatar02 from "../../assets/icons/avatar_02.svg";
import IcCalendar from "../../assets/icons/ic_calendar.svg";
import { useNavigation } from "@react-navigation/native";
import ReportTaskScreen from "../../screens/report/ReportTaskScreen";
import OtherReportScreen from "../../screens/report/OtherReportScreen";
const Tab = createMaterialTopTabNavigator();

const ReportsTopNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: "uppercase",
          flex: 1,
          width: "100",
        },
        tabBarPressColor: "#FFBF1A0D",
        indicatorStyle: {
          backgroundColor: "#2F80ED",
          width: 0.65,
          height: 4,
          marginBottom: -1,
        },
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: "auto", padding: 12, paddingHorizontal: 18 },
        scrollEnabled: false, // Set to false for horizontal scrolling
        tabBarStyle: {
          backgroundColor: "#fff9e9",
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#E1E1E1",
        },
      }}
    >
      <Tab.Screen name="Tasks" component={ReportTaskScreen} />
      <Tab.Screen name="Exhibitions" component={OtherReportScreen} />
      <Tab.Screen name="Prospects" component={OtherReportScreen} />
      <Tab.Screen name="Customer" component={OtherReportScreen} />
    </Tab.Navigator>
  );
};

export default ReportsTopNavigation;
