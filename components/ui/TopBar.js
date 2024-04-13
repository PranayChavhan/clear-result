import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import IcNotification from "../../assets/icons/ic_notification.svg";
import IcMenu from "../../assets/icons/ic_menu.svg";

const TopBar = ({ logo, nodrawer }) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    // check if this screen is in drawer navigation
    // if not, use navigation.openDrawer()
    if (!nodrawer) {
      navigation.dispatch(DrawerActions.openDrawer());
    }
  };

  return (
    <View className="flex flex-row items-center justify-between px-4 py-4  z-50">
      <TouchableOpacity onPress={openDrawer}>
        <View className="p-2  rounded-lg bg-white flex items-center justify-center  ">
          <IcMenu width={20} height={20} />
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={()=>navigation.navigate("HomeStack",{screen:"Home"})}>
      <View className="object-contain w-40 flex items-center justify-center h-8">
        <Image source={logo} className="max-w-full h-6 object-contain" />
      </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="m-0 p-0"
      >
        <View className="w-8 h-8 flex items-center justify-center border border-gray-300  rounded-lg">
          <IcNotification />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
