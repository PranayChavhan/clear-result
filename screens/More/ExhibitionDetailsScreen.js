import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";
import TopBar from "../../components/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcDown from "../../assets/icons/ic_down.svg";
import InputFeild from "../../components/InputFeild";

const ExhibitionDetailsScreen = () => {
  const [height, setHeight] = useState(40); // Initial height

  const handleChangeText = (text) => {
    // Calculate the new height based on the content
    const newHeight = text ? Math.max(40, text.split("\n").length * 20) : 40;
    setHeight(newHeight);
  };

  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        className="px-4 py-4 mb-[30rem]"
      >
        <View className="flex flex-row items-center justify-start gap-4">
          <Text
            style={{ fontFamily: "Poppins-Regular", fontWeight: 600 }}
            className="text-[16px] text-[#828282] font-medium"
          >
            Exhibition Name 1
          </Text>
          <IcDown />
        </View>

        <View className="mt-2">
          <Text className="text-[12px] font-medium text-[#828282] mb-2">
            Exhibition Name
          </Text>

          <InputFeild
            placeholder="Enter the Exhibition Name"
            // value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>

        <View className="mt-2">
          <Text className="text-[12px] font-medium text-[#828282] mb-2">
            Start Date
          </Text>

          <InputFeild
            placeholder="Enter the Start Date"
            // value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>

        <View className="mt-2">
          <Text className="text-[12px] font-medium text-[#828282] mb-2">
            End Date
          </Text>

          <InputFeild
            placeholder="Enter the end date"
            // value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>

        <View className="mt-2">
          <Text className="text-[12px] font-medium text-[#828282] mb-2">
            Tags
          </Text>

          <View className=" p-2 rounded-md border-[1px] border-gray-300 flex flex-row ">
            <View className="bg-blue-100 rounded-full flex flex-row items-center w-fit p-1 px-4">
              <Text>Traditional Wear</Text>

              <Text className="ml-3 ">X</Text>
            </View>

            <View className="bg-blue-100 rounded-full flex flex-row items-center w-fit  px-4 mx-2">
              <Text>Indian Wear</Text>

              <Text className="ml-3 ">X</Text>
            </View>
          </View>
        </View>

        <View className="mt-2">
          <Text className="text-[12px] font-medium text-[#828282] mb-2">
            Location
          </Text>

          <TextInput
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Description"
            multiline={true}
            onChangeText={handleChangeText}
            onContentSizeChange={(e) => {
              setHeight(Math.max(40, e.nativeEvent.contentSize.height));
            }}
          />
        </View>



        <View className="mt-2 bg-blue-50 py-4 px-2">

            <View className="flex flex-row items-center justify-between">
                <Text className="italic text-gray-500 font-medium">Invites</Text>
                <Text>Toggle</Text>
                </View>

            
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ExhibitionDetailsScreen;
