import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ExhibitionScreen from "../../screens/tabs/ExhibitionScreen";
import UpcomingExhibition from "../../screens/admin/UpcomingExhibition";
import ExhibitionInvites from "../../screens/admin/ExhibitionInvites";
const Tab = createMaterialTopTabNavigator();

const ExhibitionInfoTopNav = () => {
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
        <Tab.Screen name="Sent Invites" component={ExhibitionInvites} />
        <Tab.Screen name="Pending Invites" component={ExhibitionInvites} />
    </Tab.Navigator>

  );
};


export default ExhibitionInfoTopNav;
