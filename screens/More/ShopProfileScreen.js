import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import TopBar from '../../components/TopBar'
import CrLogo from "../../assets/images/cr_logo.png";
import ShopCard from '../../components/Exhibition/ShopCard';
import ShopSliderNavigartion from '../../components/Exhibition/ShopSliderNavigartion';
import TasksTabs from '../../components/Exhibition/TasksTabs';
import IcDoc from "../../assets/icons/ic_doc.svg";
import IcAttachment from "../../assets/icons/ic_attach.svg";


const ShopProfileScreen = () => {
  return (
    <Screen  className="bg-white">
      <TopBar logo={CrLogo} />
        
      <ScrollView contentContainerStyle={{ paddingBottom: 180, }} showsVerticalScrollIndicator={false} className="px-4 py-4">

    <ShopCard/>

    <ShopSliderNavigartion/>

    <TasksTabs/>

    <View className="bg-white border-[0.2px] border-gray-200 rounded-b-lg shadow-2xl p-2 px-4 mt-8 rounded-md">

      <View className="flex flex-row items-center gap-2">
        <IcDoc/>
        <Text className="text-[14px] font-bold">Documents</Text>
      </View>

      <View className="flex flex-row items-center p-2 border-[0.8px] rounded-xl my-4 border-gray-400">
        <IcAttachment/>
        <View className="ml-3">
          <Text className="font-bold">whatsapp invite</Text>
          <Text className="text-gray-400">10 MB PNG</Text>
        </View>
      </View>


      <View className="flex flex-row items-center p-2 border-[0.8px] rounded-xl mb-4 border-gray-400">
        <IcAttachment/>
        <View className="ml-3">
          <Text className="font-bold">whatsapp invite</Text>
          <Text className="text-gray-400">10 MB PNG</Text>
        </View>
      </View>
    </View>


    <Text className="text-[12px] italic text-[#828282] absolute bottom-[12%] left-[33%]">
        Powered by ClearResults
      </Text>

    </ScrollView>
</Screen>
  )
}

export default ShopProfileScreen