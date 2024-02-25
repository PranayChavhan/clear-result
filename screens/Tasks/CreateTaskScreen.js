import { View, Text } from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import TopBar from '../../components/TopBar'
import CrLogo from "../../assets/images/cr_logo.png";
const CreateTaskScreen = () => {
  return (
    <Screen className="bg-white">
    <TopBar logo={CrLogo}/>
    <View className="px-4">

        <Text>Create Task Screen</Text>
    </View>
</Screen>
  )
}

export default CreateTaskScreen