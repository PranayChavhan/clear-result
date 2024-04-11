import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/ui/TopBar";
import Logo from "../../assets/images/cr_logo_auth.png";
import Screen from "../../components/ui/Screen";
import colors from "../../constants/colors";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);

  const imageWith = Dimensions.get("window").width;

  const pages = [
    {
      image: require("../../assets/images/hero-1.png"),
      title: "Instantly contacting leads for conversions",
      description: "Contact with WhatsApp, call, or email instantly.",
    },
    {
      image: require("../../assets/images/hero-2.png"),
      title: "Lead management for seamless growth",
      description:
        "Your guide to effortless lead management, maximizing growth potential.",
    },
    {
      image: require("../../assets/images/hero-3.png"),
      title: "Boost engagement with social media fusion",
      description: "Integrate CRM with social media for smarter connections.",
    },
  ];

  const handleContinue = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate("Login");
    }
  };

  const handleSkip = () => {
    setCurrentPage(3);
  };

  return (
    <Screen>
      <TopBar logo={Logo} nodrawer={true} />

      <View className=" h-full flex flex-col  gap-4 px-4">
        <View className="absolute right-6 top-5">
          <TouchableWithoutFeedback onPress={handleSkip}>
            <Text
              className={`text-[16px] font-medium text-[${colors.primary}] underline`}
            >
              Skip
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View className="h-12" />

        <View className="flex flex-row justify-center items-center ">
          <Image
            source={pages[currentPage - 1].image}
            className=" flex flex-row w-full items-center justify-center"
            style={{ width: imageWith, height: imageWith }}
            resizeMode="contain"
          />
        </View>
        <View className="flex flex-col items-center justify-center">
          <View className="flex flex-row gap-1 items-center justify-center mb-4">
            {pages.map((_, index) => (
              <Image
                key={index}
                source={
                  currentPage === index + 1
                    ? require("../../assets/icons/rdot.png")
                    : require("../../assets/icons/dot.png")
                }
              />
            ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={handleContinue}
          className={`py-3 bg-[${colors.primary}]  rounded-xl`}
        >
          <Text className="text-[16px] font-semibold text-center text-white">
            {currentPage < pages.length ? "Continue" : "Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
