import { View, Text, ImageBackground, Dimensions } from "react-native";
import React, { useState } from "react";
import IcOption from "../../assets/icons/ic_three_dot.svg";
import IcFrame from "../../assets/icons/ic_frame.svg";
import IcD from "../../assets/icons/ic_d.svg";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";
import IcGlobe from "../../assets/icons/ic_globe-outline.svg";
import IcPlus from "../../assets/icons/ic_plus.svg";
import IcDownSmall from "../../assets/icons/ic_down_small.svg";

const ShopCard = () => {
  const [sliderValue, setSliderValue] = useState(10000);

  const onValueChange = (value) => {
    setSliderValue(value);
  };

  const stops = [0, 1, 2, 3];

  return (
    <View className={`w-screen pr-8 `}>
      <View className="p-4 rounded-3xl bg-orange-50 h-auto flex flex-col overflow-hidden">
        <View className="flex flex-row items-start gap-2">
          <IcFrame />
          <View>
            <Text
              className={"text-[16px] font-semibold "}
              style={{
                fontFamily: "Poppins-SemiBold",
              }}
            >
              Shopper Shop
            </Text>

            <Text className="italic text-gray-400 text-[12px] -mt-1">
              (lead)
            </Text>

            <View className="flex flex-row items-center mt-4 mb-4">
              <Text className="text-[12px] text-green-700 mr-2">Active</Text>
              <IcD />
            </View>
          </View>
        </View>

        <View className="bg-white rounded-md">
          <View className="flex flex-row  items-start gap-2 p-2">
            <Text className="text-[12px] font-semibold">Lead Status</Text>
            <Text className="text-[10px] text-gray-400"> 20% completed</Text>
          </View>

          <View className="bg-blue-200 rounded-b-md">
            <Text className=" text-[10px] text-gray-500 font-semibold my-2 text-center">
              Verification
            </Text>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 10,
                paddingHorizontal: 5,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 15,
                  backgroundColor: "#D3D3D3",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    backgroundColor: "#007AFF",
                    borderRadius: 10,
                    width: `${sliderValue * 33.33}%`,
                  }}
                />
              </View>
              <Slider
                style={{
                  width: "100%",
                  height: 10,
                  alignSelf: "center",
                  zIndex: 1,
                  position: "absolute",
                  top: 0,
                }} // Adjusted slider height
                minimumValue={0}
                maximumValue={3}
                step={1}
                value={sliderValue}
                onValueChange={onValueChange}
                minimumTrackTintColor="transparent"
                maximumTrackTintColor="transparent"
                thumbTintColor="transparent"
              />
              <View
                style={{
                  paddingHorizontal: 30,
                  width: "100%",
                  position: "absolute",
                  top: "50%",
                  transform: [{ translateY: -5 }],
                }}
              >
                {stops.map((stop) => (
                  <View
                    key={stop}
                    style={{
                      marginLeft: 30,
                      width: 4,
                      height: 4,
                      backgroundColor: "#FFFFFF",
                      borderRadius: 4,
                      position: "absolute",
                      bottom: -7,
                      left: `${(stop / 3) * 100}%`,
                      zIndex: 1,
                    }}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>

        <View>
          <View className="border-[0.2px] border-gray-300 my-4 -mx-4 "></View>
        </View>

        <View>
          <Text className="text-[12px] text-gray-400 italic">
            Store selection
          </Text>
        </View>

        <View className="flex flex-row items-center justify-between gap-2">
          <View className="flex flex-row items-center w-fit bg-white p-2 rounded-full">
            <IcGlobe />

            <View className="flex flex-row items-center justify-between w-[75%] ml-4">
              <Text className="text-[14px] text-gray-500">Mumbai</Text>
              <IcDownSmall />
            </View>
          </View>

          <View className="bg-white p-2 rounded-md">
            <IcPlus />
          </View>
        </View>
        <ImageBackground
          source={require("../../assets/images/bg-filter-card.png")}
          resizeMode="cover"
          className={`absolute h-16 right-0  p-4 rounded-tr-3xl`}
        >
          <IcOption />
        </ImageBackground>
      </View>
    </View>
  );
};

export default ShopCard;
