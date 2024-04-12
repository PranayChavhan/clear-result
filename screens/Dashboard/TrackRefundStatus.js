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
import IcCircleCheck from "../../assets/icons/ic_circle_check_fill.svg";
import IcArrowUp from "../../assets/icons/ic_arrow_up.svg";
import PricingCard from "../../components/PricingCard";
import { Radio, RadioGroup } from "@ui-kitten/components";
import InputFeild from "../../components/ui/InputFeild";
import IcClose from "../../assets/icons/ic_close_x.svg";
import IcCircle from "../../assets/icons/ic_circle_fill.svg";

const RefundData = [
  {
    title: "Refund Requested",
    desc: "Fri, 10th Sept 24,  10.04 AM",
    done: true,
  },
  {
    title: "Refund Under Review",
    desc: "Fri, 12th Sept 24,  10.04 AM",
    done: true,
  },
  {
    title: "Refund Approved",
    desc: "Fri, 13th Sept 24,  10.04 AM",
    done: true,
  },
  {
    title: "Refund Initiated",
    desc: "Fri, 13th Sept 24,  10.04 AM",
    note: "Refund will be sent via original payment method.",
    done: false,
  },
  {
    title: "Refund Sent",
    desc: "Fri, 13th Sept 24,  10.04 AM",
    done: false,
  },
];

const TrackRefundStatus = () => {
  const navigation = useNavigation();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const isTextInputFocused = useRef(false);

  const [notification, setNotification] = useState(false);

  const handleRequestRefund = () => {
    setNotification(true);

    //navigate to home screen after 3 seconds
    setTimeout(() => {
      setNotification(false);
      navigation.navigate("SubscriptionScreen", { tracknavigation: true });
    }, 1500);
  };

  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        className="px-4 py-4"
      >
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg font-medium">Refund Request Details</Text>
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

        <View className="p-3 rounded-xl my-4 relative bg-blue-100">
          <View className="flex flex-row">
            <Text className="text-sm font-medium">Refund ID - </Text>
            <Text className="text-sm  ">13E4347RY</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-sm font-medium">Reason - </Text>
            <Text className="text-sm font- ">Selected Wrong Plan</Text>
          </View>
        </View>

        <View>
          <Text className="text-lg font-medium">Refund Process</Text>
        </View>

        <View className="py-4">
          {RefundData.map((data, index) => (

            <View key={index} className="px-8 py-1  flex flex-row gap-x-4">
              <View className="flex items-center gap-y-3">
                {data.done ? <IcCircleCheck /> : <IcCircle />}
                <View className={`w-1 h-16 border-l border-dashed border-gray-400 ${index==RefundData.length-1&&"hidden"}`}></View>
              </View>
              <View>
                <Text className="text-sm font-medium">{data.title}</Text>
                <Text className="text-sm text-gray-400">{data.desc}</Text>
                {data.note && (
                  <Text className="text-xs text-gray-800 mt-2">{data.note}</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* 
  
          <Text className="text-[12px] italic text-[#828282] absolute top-[100%] left-[122px]">
          Powered by ClearResults
        </Text> */}
      </ScrollView>
    </Screen>
  );
};

export default TrackRefundStatus;
