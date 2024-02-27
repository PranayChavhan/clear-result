import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import TopBar from "../../components/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import { useNavigation } from "@react-navigation/native";

const PricingCard = ({ title, description, price, onPress }) => {
  return (
    <View className="bg-white border-b-[0.8px] border-x-[0.8px] border-gray-300 rounded-xl rounded-t-none mt-8 shadow-md py-6">
      <Text className="text-[14px] font-semibold px-4">{title}</Text>

      <Text className="text-[12px] text-gray-500 text-wrap pr-20 my-2 px-4">
        {description}
      </Text>

      <View className="bg-gray-200 p-4 flex flex-row items-center mb-4">
        <Text className="text-[26px] font-[900]">{price}</Text>
        <Text className="text-[26px] text-gray-500 font-semibold">
          {" "}
          / month
        </Text>
      </View>

      <TouchableOpacity
        onPress={onPress}
        className={`py-3   bg-[#2F80ED]  rounded-lg mx-4`}
      >
        <Text className="text-[16px] font-semibold text-center text-white">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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
