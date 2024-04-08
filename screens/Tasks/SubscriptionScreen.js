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

const SubscriptionScreen = () => {
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
            Subscription Packages
          </Text>

          <TouchableWithoutFeedback>
            <Text
              className={`text-[14px] font-medium text-[#2F80ED] underline`}
            >
              Skip
            </Text>
          </TouchableWithoutFeedback>
        </View>

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
