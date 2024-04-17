import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NotificationCard = ({title, description, time, icon}) => {
  return (
    <View className="flex flex-row p-4">
        <View className="w-[15%] flex items-center mt-">
            {icon}
        </View>
        <View className="w-[60%]">
            <Text className="font-bold text-sm">{title}</Text>
            <Text className="text-sm text-gray-700">{description}</Text>
        </View>
        <View className="w-[25%]">
            <Text className="text-xs text-gray-500">{time}</Text>
        </View>
      
    </View>
  )
}

export default NotificationCard
