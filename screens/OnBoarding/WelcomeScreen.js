import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      image: require("../../assets/images/hero1.png"),
      title: "Instantly contacting leads for conversions",
      description: "Contact with WhatsApp, call, or email instantly.",
    },
    {
      image: require("../../assets/images/hero2.png"),
      title: "Lead management for seamless growth",
      description:
        "Your guide to effortless lead management, maximizing growth potential.",
    },
    {
      image: require("../../assets/images/hero3.png"),
      title: "Boost engagement with social media fusion",
      description: "Integrate CRM with social media for smarter connections.",
    },
  ];

  const handleContinue = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    } else {
     
      navigation.navigate("SignUp");
    }
  };

  return (
    <SafeAreaView className="">
      <View className="p-4">
        <View className="flex flex-row items-center justify-between">
          <Text>icon</Text>
          <Text>Logo</Text>
          <Text>notification</Text>
        </View>

        <View className=" h-full flex flex-col justify-center gap-4">
          <ImageBackground
            source={require("../../assets/images/HeroVector.png")}
            style={{ width: 370, height: 300 }}
          >
            <Image source={pages[currentPage - 1].image} className="w-[100%]" />
          </ImageBackground>

          <View className="flex flex-col items-center gap-4 ">
            <Text className="text-[14px] font-medium">
              {pages[currentPage - 1].title}
            </Text>
            <Text className="text-[12px] font-normal text-[#828282]">
              {pages[currentPage - 1].description}
            </Text>

            <View className="flex flex-row">
              {pages.map((_, index) => (
                <Text key={index}>{currentPage === index + 1 ? "●" : "○"}</Text>
              ))}
            </View>
          </View>

          <TouchableOpacity
            onPress={handleContinue}
            className="py-3 bg-[#2F80ED]   rounded-xl"
          >
            <Text className="text-[14px] font-semibold text-center text-white">
              {currentPage < pages.length ? "Continue" : "Sign Up"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
