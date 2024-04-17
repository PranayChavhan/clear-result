import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import { useNavigation } from "@react-navigation/native";
import IcArrowUp from "../../assets/icons/ic_arrow_up.svg";
import PricingCard from "../../components/PricingCard";
import { Radio, RadioGroup } from "@ui-kitten/components";
import InputFeild from "../../components/ui/InputFeild";
import IcClose from "../../assets/icons/ic_close_x.svg";
import SuccessToast from "../../components/SuccessToast";
import Button from "../../components/ui/Button";

const InvoiceScreen = () => {
    const navigation = useNavigation();
  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        className="px-4 py-4"
      >
        <Text className="text-[16px] font-semibold">Invoice</Text>
        <View className="flex flex-row items-center p-2 justify-start w-full bg-blue-100 rounded-lg my-2">
          <Text className="text-sm font-medium">Order Id - </Text>
          <Text className="text-sm  italic"> 13E4347RY</Text>
        </View>

        <View className="bg-white border-0.5 shadow-lg m-2 border-gray-300 shadow-gray-400 rounded-xl  mt-8  py-6">
          <Text className="text-[12px] text-gray-500 text-wrap italic pl-4">
            1st Jan 2024 - 1st Feb 2024
          </Text>
          <View className="flex flex-row mt-3 items-center justify-between">
            <Text className="text-lg font-semibold px-4">Organiser Pro</Text>

            <Text className="text-lg font-semibold px-4">$500</Text>
          </View>

          <View className="flex flex-row mt-3 items-center justify-between">
            <Text className="text-sm text-gray-500 px-4">Tax</Text>

            <Text className="text-sms text-gray-500 px-4">$50</Text>
          </View>

          <View className="flex flex-row mt-3 items-center   justify-between">
            <Text className="text-sm text-gray-500 px-4">Total</Text>

            <Text className="text-sms text-gray-500 px-4">$550</Text>
          </View>
          <View className="border-b border-gray-500 mx-4 my-4" />

          <View className="flex flex-row mt-3 items-center justify-between">
            <Text className="text-sm font-semibold px-4">Amount Paid</Text>
            <Text className="text-sm font-semibold px-4">$500</Text>
          </View>

          <Text className="text-gray-400 text-sm italic p-4 ">
            Payment Mode Credit Card
          </Text>
          <View className="pt-4 px-16">
            <Button onPress={()=>navigation.navigate("Home")} varient={"outline"}>Download Invoice</Button>
          </View>
        </View>

        {/* 
  
          <Text className="text-[12px] italic text-[#828282] absolute top-[100%] left-[122px]">
          Powered by ClearResults
        </Text> */}
      </ScrollView>
    </Screen>
  );
};

export default InvoiceScreen;
