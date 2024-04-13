import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
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

const RequestRefund = () => {
  const navigation = useNavigation();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const isTextInputFocused = useRef(false);

  const [expand, setExpand] = useState(false);

  const [notification, setNotification] = useState(false);

  const handleRequestRefund = () => {
    setNotification(true);

    //navigate to home screen after 3 seconds
    setTimeout(() => {
      setNotification(false);
      navigation.navigate("SubscriptionScreen", {tracknavigation: true});
    }, 1500);
  }

  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        className="px-4 py-4"
      >

       {
          notification && (
            <SuccessToast text="Your request for a refund has been received. You'll hear from us
            soon." color={"emerald"} />
          )
       }
       
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[16px] font-semibold">
            Request Subscription Refund
          </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SubscriptionScreen")}
          >
            <Text
              className={`text-[14px] font-medium text-[#2F80ED] underline`}
            >
              View all Packages
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View className="p-3 rounded-xl my-4 relative bg-blue-200">
          <View className="h-6 w-1 bg-blue-400 absolute rounded-full top-[50%] bottom-[50%]"></View>
          <Text className="text-xs text-blue-600 ">
            Refund will cancel of the current plan access from 2nd Feb 2024
          </Text>
        </View>

        <View className="p-4 rounded-2xl bg-gray-100">
          <TouchableWithoutFeedback onPress={() => setExpand(!expand)}>
          <View className="flex flex-row justify-between items-center border-b pb-3 border-gray-300">
            <Text>Why do you want to cancel subscription?</Text>
            <View className={`${expand?"rotate-180":""} transition-all `}>

            <IcArrowUp />
            </View>
          </View>
          </TouchableWithoutFeedback>

          <View className={`bg-white p-4 mt-3 rounded-2xl ${expand?"":"hidden"}`}>
            <RadioGroup
              style={{ marginTop: 20 }}
              selectedIndex={isTextInputFocused.current ? null : selectedIndex}
              onChange={(index) => {
                if (!isTextInputFocused.current) {
                  setSelectedIndex(index);
                }
              }}
            >
              <Radio style={{ paddingVertical: 2 }}>Selected wrong Plan</Radio>
              <Radio style={{ paddingVertical: 2 }}>Difficult to use</Radio>
              <Radio style={{ paddingVertical: 2 }}>
                Limited Functionalities{" "}
              </Radio>
              <Radio style={{ paddingVertical: 2 }}>Prices too high </Radio>
              <Radio style={{ paddingVertical: 2 }}>
                Found a better alternative{" "}
              </Radio>
              <Radio style={{ paddingVertical: 2 }}>
                Don't need it anymore{" "}
              </Radio>
            </RadioGroup>
          </View>
        </View>

        {/* Elaborate */}
        <View className="mt-4">
          <Text>Elaborate your reason</Text>
          <TextInput
            className="bg-white py-3 px-2 rounded-lg mt-3 border-blue-400 border"
            placeholder="I accidently choose wrong plan."
          />
        </View>

        <View>
          <TouchableOpacity onPress={handleRequestRefund} className="px-6 py-4 rounded-lg bg-[#2F80ED] mt-4 mx-12">
            <Text className="text-white text-center font-semibold">
              Request Refund
            </Text>
          </TouchableOpacity>
        </View>

        {/* 

        <Text className="text-[12px] italic text-[#828282] absolute top-[100%] left-[122px]">
        Powered by ClearResults
      </Text> */}
      </ScrollView>
    </Screen>
  );
};

export default RequestRefund;
