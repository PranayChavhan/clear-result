import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import IcNotification from "../assets/icons/ic_notification.svg"
import IcMenu from "../assets/icons/ic_menu.svg"


const TopBar = ({ logo }) => {
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <View className="flex flex-row items-center justify-between px-4 py-2 ">
            <TouchableOpacity onPress={openDrawer}>
                <View className="p-2  rounded-lg bg-white flex items-center justify-center  ">
                    <IcMenu width={20} height={20} />
                </View>
            </TouchableOpacity>
            <Image source={logo} className="object-contain" />
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                className="m-0 p-0"
            >
                <View className="w-8 h-8 flex items-center justify-center border border-gray-300  rounded-lg">
                    <IcNotification />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default TopBar
