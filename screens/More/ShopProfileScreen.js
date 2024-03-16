import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import TopBar from '../../components/TopBar'
import CrLogo from "../../assets/images/cr_logo.png";
import ShopCard from '../../components/Exhibition/ShopCard';

const ShopProfileScreen = () => {
  return (
    <Screen  className="bg-white">
      <TopBar logo={CrLogo} />
        
      <ScrollView contentContainerStyle={{ paddingBottom: 140 }} showsVerticalScrollIndicator={false} className="px-4 py-4 mb-[30rem]">

    <ShopCard/>

    </ScrollView>
</Screen>
  )
}

export default ShopProfileScreen