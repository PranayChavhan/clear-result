import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import IcNotification from "../assets/icons/ic_notification.svg"
import IcMenu from "../assets/icons/ic_menu.svg"


const TopBar = ({ logo }) => {
    return (
        <View className="flex flex-row items-center justify-between px-4 py-2 ">
            <View className="w-8 h-8 flex items-center justify-center  ">
                <IcMenu width={20} height={20} />
            </View>
            <Image source={logo} className="h-10 object-contain" />
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                className="m-0 p-0"
            >
                <View className="w-8 h-8 flex items-center justify-center border border-gray-500  rounded-lg">
                    <IcNotification />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default TopBar
