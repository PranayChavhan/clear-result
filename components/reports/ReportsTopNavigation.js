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
      <Tab.Screen name="Tasks" component={ReportTaskScreen} />
      <Tab.Screen name="Exhibitions" component={OtherReportScreen} />
      <Tab.Screen name="Prospects" component={OtherReportScreen} />
      <Tab.Screen name="Customer" component={OtherReportScreen} />
    </Tab.Navigator>
  );
};

export default ReportsTopNavigation;
