import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import { useNavigation } from "@react-navigation/native";
import PricingCard from "../../components/PricingCard";
import IcAdditional from "../../assets/icons/ic_set_additional.svg";
import ProfileSettingsCard from "../../components/profile/ProfileSettingsCard";

const SubscriptionScreen = ({ route }) => {
  const navigation = useNavigation();

  const tracknavigation = route.params?.tracknavigation || false;

  const trackData = [
    {
      title: "Track Refund Status",
      desc: "See the status of your refund request",
      icon: <IcAdditional style={{ width: 20, height: 20 }} />,
      nav: "TrackRefundStatus",
    },
  ];

  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        className="px-4 py-4"
      >
        {tracknavigation ? (
          <View className={`rounded-xl  sm flex flex-col p-4  bg-white m-2 shadow-md shadow-gray-400`}>
          {trackData.map((d, i) => (
            <View key={i}>
              <TouchableOpacity
                onPress={() => navigation.navigate(d.nav)}
                key={i}
                className={` my-1 flex gap-x-4 flex-row justify-start items-center `}
              >
                <View className={`w-8`}>{d.icon ? d.icon : <IcSettTheme />}</View>
                <View className="">
                  <Text className="font-medium text-sm">{d.title}</Text>
                  <Text className="text-xs mt-1 text-gray-600">{d.desc}</Text>
                </View>
                
              </TouchableOpacity>
            </View>
          ))}
        </View>
        ) : (
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[16px] font-semibold">
              Subscription Packages
            </Text>
            <TouchableWithoutFeedback
              onPress={()=>navigation.navigate("HomeStack",{screen:"Home"})}
            >
              <Text
                className={`text-[14px] font-medium text-[#2F80ED] underline`}
              >
                Skip
              </Text>
            </TouchableWithoutFeedback>
          </View>
        )}

        <PricingCard
          title="Essential Exhibitor Package"
          description="Medium-sized exhibitors seeking post-exhibition management."
          price="$300"
          onPress={() => {
            navigation.navigate("PaymentMode");
          }}
        />

        <PricingCard
          title="Organiser Pro"
          description="Event organisers in need of comprehensive post-exhibition solutions for multiple exhibitors."
          price="$500"
          onPress={() => {
            navigation.navigate("PaymentMode");
          }}
        />

        <PricingCard
          title="Enterprise Empowerment"
          description="Large-scale exhibitiors requiring advanced features and scalability"
          price="$500"
          onPress={() => {
            navigation.navigate("PaymentMode");
          }}
        />

        <View className="flex flex-row items-center justify-center">
          <Text className="text-[12px] italic text-[#828282] mt-8">
            Powered by ClearResults
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default SubscriptionScreen;
