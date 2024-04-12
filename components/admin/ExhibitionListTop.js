import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ExhibitionScreen from "../../screens/tabs/ExhibitionScreen";
import UpcomingExhibition from "../../screens/admin/UpcomingExhibition";
import ExhibitionCompletedTab from "../../screens/admin/ExhibitionCompletedTab";
const Tab = createMaterialTopTabNavigator();

const ExhibitionListTopNav = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: {
                fontSize: 12,
                textTransform: "capatilize",
            },
            tabBarStyle: {
                backgroundColor: "#fff9e9",
            }
        }}
            
    >
        <Tab.Screen name="Upcoming Exhibitions" component={UpcomingExhibition} />
        <Tab.Screen name="Completed Exhibitions" component={ExhibitionCompletedTab} />
    </Tab.Navigator>

  );
};


export default ExhibitionListTopNav;
