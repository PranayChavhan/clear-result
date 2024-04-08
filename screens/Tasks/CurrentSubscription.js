import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import { useNavigation } from "@react-navigation/native";
import PricingCard from "../../components/PricingCard";

const CurrentSubscription = () => {
  const navigation = useNavigation();
  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        className="px-4 py-4"
      >
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[16px] font-semibold">
            Current Subscription Packages
          </Text>

          <TouchableWithoutFeedback>
            <Text
              className={`text-[14px] font-medium text-[#2F80ED] underline`}
            >
              Skip
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View className="bg-white border-0.5 shadow-lg m-2 border-gray-300 shadow-gray-400 rounded-xl  mt-8  py-6">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[14px] font-semibold px-4">
              Organiser Pro
            </Text>

            <Text className="text-[12px] text-gray-500 text-wrap italic pr-2">
              order iD- 13E4347RY
            </Text>
          </View>

          <View className=" mt-2 mb-4">
            <Text className="text-[14px] font-semibold px-4">
              01st Jan 2024
            </Text>

            <Text className="text-[12px] text-gray-500 text-wrap italic pl-4">
              Subscription has ended
            </Text>
          </View>

          <Text className="text-[12px] text-gray-500 text-wrap pr-20 my-2 px-4">
            Multi-exhibitor, post-exhibitions support.
          </Text>

          <View className="bg-gray-200 p-4 flex flex-row items-center mb-4">
            <Text className="text-[26px] font-[900]">$500</Text>
            <Text className="text-[26px] text-gray-500 font-semibold">
              {" "}
              / month
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PaymentMode");
            }}
            className={`py-3   bg-[#2F80ED]  rounded-lg mx-4`}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
              Renew
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center justify-center mt-10">
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("SubscriptionPackages");
            }}
          >
            <Text
              className={`text-[14px] font-medium text-[#2F80ED] underline`}
            >
              View all Packages
            </Text>
          </TouchableWithoutFeedback>
        </View>
        {/* 

        <Text className="text-[12px] italic text-[#828282] absolute top-[100%] left-[122px]">
        Powered by ClearResults
      </Text> */}
      </ScrollView>
    </Screen>
  );
};

export default CurrentSubscription;
