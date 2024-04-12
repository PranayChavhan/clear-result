import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import IcArrowDownBlue from "../../assets/icons/ic_arrow_down_blue.svg";
import IcCalenderMini from "../../assets/icons/ic_calender_mini.svg";
import Screen from "../../components/ui/Screen";
import IcExhibitionLocation from "../../assets/icons/ic_exhibition_location.svg";
import { Image } from "react-native";

const ExhibitionCompletedTab = () => {
    const navigation = useNavigation();

  return (
    <Screen className="bg-white">
      <View className="flex justify-center items-end p-4">
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 5,
          }}
          activeOpacity={0.8}
        >
          <Text
            style={{
              color: "#2F80ED",
              fontFamily: "Poppins-Regular",
              marginRight: 5,
            }}
          >
            Year 2023
          </Text>
          <IcArrowDownBlue />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View className="my-8 px-4 mb-20">
          {/* Component Card 1: */}
          <TouchableOpacity onPress={()=>navigation.navigate("ExhibitionGraph")}>
          <View className="p-4 my-2 border border-gray-300 rounded-xl flex flex-row items-center justify-between">
            <View>
              <Text className="text-[16px] font-semibold">
                Exhibition Name 1
              </Text>
              <View className="flex mt-2 flex-row gap-x-2 items-center">
                <IcCalenderMini />
                <Text className="text-[12px] text-gray-500">
                  23rd Oct 2023 - 25th Oct 2023
                </Text>
              </View>
            </View>
            <IcExhibitionLocation />
          </View>
          </TouchableOpacity>

          {/* Component Card 2: */}
          <View className="p-4 my-2 border border-gray-300 rounded-xl flex flex-row items-center justify-between">
            <View>
              <Text className="text-[16px] font-semibold">
                Exhibition Name 2
              </Text>
              <View className="flex mt-2 flex-row gap-x-2 items-center">
                <IcCalenderMini />
                <Text className="text-[12px] text-gray-500">
                  23rd Oct 2023 - 25th Oct 2023
                </Text>
              </View>
            </View>
            <IcExhibitionLocation />
          </View>

          {/* Component Card 3: */}
          <View className="p-4 my-2 border border-gray-300 rounded-xl flex flex-row items-center justify-between">
            <View>
              <Text className="text-[16px] font-semibold">
                Exhibition Name 3
              </Text>
              <View className="flex mt-2 flex-row gap-x-2 items-center">
                <IcCalenderMini />
                <Text className="text-[12px] text-gray-500">
                  23rd Oct 2023 - 25th Oct 2023
                </Text>
              </View>
            </View>
            <IcExhibitionLocation />
          </View>

          {/* Component Card 1: */}
          <View className="p-4 my-2 border border-gray-300 rounded-xl flex flex-row items-center justify-between">
            <View>
              <Text className="text-[16px] font-semibold">
                Exhibition Name 1
              </Text>
              <View className="flex mt-2 flex-row gap-x-2 items-center">
                <IcCalenderMini />
                <Text className="text-[12px] text-gray-500">
                  23rd Oct 2023 - 25th Oct 2023
                </Text>
              </View>
            </View>
            <IcExhibitionLocation />
          </View>

          <Image
          source={require("../../assets/images/exhibition_completed_1.png")}
          className="w-full mb-4 "
          style={{
            height: Dimensions.get("screen").width * (9 / 16) + 12,
          }}
          resizeMode="contain"
        />

        <Image
          source={require("../../assets/images/exhibition_completed_2.png")}
          className="w-full mb-4 "
          style={{
            height: Dimensions.get("screen").width * (9 / 16) +80,
          }}
          resizeMode="contain"
        />
        </View>

        {/* Images  */}

       
      </ScrollView>
    </Screen>
  );
};

export default ExhibitionCompletedTab;
