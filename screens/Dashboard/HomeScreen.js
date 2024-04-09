import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform,
  ImageBackground,
} from "react-native";

import React, { useState, useEffect, useMemo, useRef } from "react";

import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcNewsLetter from "../../assets/icons/ic_news_letter.svg";
import SubscriptionCard from "../../components/SubscriptionCard";
import NewsLetterCard from "../../components/NewsLetterCard";
import UpcomingExCard from "../../components/UpcomingExCard";
import colors from "../../constants/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <TopBar logo={CrLogo} />

      <ScrollView
        classnName="px-2"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* Scrollable Cards. */}
        <ScrollView
          horizontal
          className="p-4 flex relative max-h-300 h-300 overflow-hidden"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <SubscriptionCard />
          <SubscriptionCard />
        </ScrollView>
        {/* Just For You */}
        <View className="flex flex-row  justify-start items-center px-4 gap-3">
          <IcNewsLetter />
          <Text
            className={"font-semibold text-lg"}
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Just For You
          </Text>
        </View>
        <ScrollView
          horizontal
          className="p-4 flex relative max-h-300 h-300 overflow-hidden"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <NewsLetterCard />
          <NewsLetterCard />
        </ScrollView>
        {/* Upcoming Exibitions */}
        <ScrollView
          horizontal
          className="p-4 flex relative max-h-300 h-300 overflow-hidden"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <UpcomingExCard />
        </ScrollView>

        <TouchableOpacity
          className={` mx-3  mb-3 flex-row items-center justify-center p-3 rounded-lg bg-[${colors.primary}] `}
        >
          <Text
            className="text-white"
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Invite Users
          </Text>
        </TouchableOpacity>

        <View className="pt-10 pb-16">
          <Text className="text-xs italic text-gray-300 text-center">
            Powered By Clear Results{" "}
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;
