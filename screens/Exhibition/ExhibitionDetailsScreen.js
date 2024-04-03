import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";
import TopBar from "../../components/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcDown from "../../assets/icons/ic_down.svg";
import InputFeild from "../../components/InputFeild";
import IcToggle from "../../assets/icons/ic_Toggle base.svg";
import IcEmail from "../../assets/icons/ic_circum_mail.svg";
import IcWhatsapp from "../../assets/icons/ic_vwp.svg";
import IcPen from "../../assets/icons/ic_pen.svg";
import IcAttachment from "../../assets/icons/ic_attachment.svg";
import IcSearch from "../../assets/icons/ic_search_black.svg";
import IcFlag from "../../assets/icons/ic_flag-india.svg";
import IcDropdown from "../../assets/icons/ic_dropdown.svg";
import Checkbox from "../../components/Checkbox";
import IcCall from "../../assets/icons/ic_phone_call.svg";
import IcMail from "../../assets/icons/ic_circum_mail2.svg";
import IcVender from "../../assets/icons/ic_vender.svg";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";



const ExhibitionDetailsScreen = () => {
  const navigation = useNavigation();
  const [sliderValue, setSliderValue] = useState(0);

  const onValueChange = (value) => {
    setSliderValue(value);
  };

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

        <View className="mt-2 bg-blue-50 py-4 px-2 rounded-lg">
          <View className="flex flex-row items-center justify-between mb-4">
            <Text className="italic text-gray-500 font-medium">Invites</Text>
            <IcToggle />
          </View>

          <View className="flex flex-row items-center justify-between">
            <TouchableOpacity className="bg-gray-200 w-[48%] p-2 rounded-full flex flex-row items-center justify-center">
              <View className="flex flex-row items-center gap-2">
                <IcEmail />
                <Text className="text-gray-600">Emails</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="bg-blue-200 border-blue-400 border w-[48%]  p-2 rounded-full flex flex-row items-center justify-center">
              <View className="flex flex-row items-center gap-2">
                <IcWhatsapp />
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-blue-600">Whatsapp</Text>
                  <Text className="text-blue-600 ml-6">X</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View className="bg-white p-4 mt-4 rounded-xl border-[0.8px] border-gray-300">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[14px] font-semibold">
                Whatsapp invite message template
              </Text>
              <IcPen />
            </View>
            <Text className="text-[12px] text-gray-500 my-2">
              This is a dummy text message just to...
            </Text>

            <View className="flex flex-row items-center gap-2">
              <IcAttachment />
              <Text className="text-[12px] text-gray-500">
                Attach for invite
              </Text>
            </View>
          </View>

          <View className="flex flex-row items-center justify-center">
            <TouchableWithoutFeedback>
              <Text className="text-[16px] font-medium text-[#2F80ED] underline mt-4">
                Share on social media
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View className="mt-2 bg-blue-50 py-4 px-2 rounded-lg">
          <View className="flex flex-row items-center justify-between mb-4">
            <Text className="italic text-gray-500 font-medium">
              Exhibition Cost
            </Text>
            <IcToggle />
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 5,
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
                  width: `${sliderValue}%`,
                }}
              />
            </View>
            <Slider
              style={{
                position: "absolute",
                width: "100%",
                height: 120,
                zIndex: 1,
              }}
              minimumValue={0}
              maximumValue={100}
              value={sliderValue}
              onValueChange={onValueChange}
              minimumTrackTintColor="transparent"
              maximumTrackTintColor="transparent"
              thumbTintColor="#007AFF"
            />
          </View>

          <View className="flex flex-row items-center justify-between my-4">
            <View className="bg-gray-200 p-2 rounded border-[0.2px]">
              <Text>10,000</Text>
            </View>

            <View className="bg-gray-200 p-2 rounded border-[0.2px]">
              <Text>10,000,00</Text>
            </View>
          </View>

          <View className="bg-white rounded-lg p-2 mt-2">
            <View className="flex flex-row items-center justify-between">
              <Text>Rental Cost</Text>

              <IcPen />
            </View>

            <View className="flex flex-row items-center gap-2 my-1">
              <Text className="text-[12px] text-gray-400">
                {" "}
                Budget: 70,000 max.
              </Text>
            </View>
          </View>

          <View className="flex flex-row items-center justify-center">
            <TouchableWithoutFeedback>
              <Text className="text-[16px] font-medium text-[#2F80ED] underline mt-4">
                + Add other expenses
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View className="mt-2 bg-blue-50 py-4 px-2 rounded-lg w-full">
          <View className="flex flex-row items-center justify-between mb-4">
            <Text className="italic text-gray-500 font-medium">
              Contact Details
            </Text>
            <IcToggle />
          </View>

          <View className="mt-2">
            <Text className="text-[12px] font-medium text-[#828282] mb-2">
              Profession
            </Text>

            <View className="flex flex-row items-center justify-between">
              <TextInput
                className="border border-blue-300 p-2 rounded-md bg-white w-[86%]"
                placeholder="Select the profession"
              />

              <TouchableOpacity className="bg-gray-300 p-[14px] rounded-md">
                <IcSearch />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-2">
            <Text className="text-[12px] font-medium text-[#828282] mb-2">
              Contact Person
            </Text>

            <TextInput
              className="border border-blue-300 p-2 rounded-md bg-white "
              placeholder="Select the contact person"
            />
          </View>

          <View className="mt-2">
            <Text className="text-[12px] font-medium text-[#828282] mb-2">
              Mobile Number
            </Text>

            <View className="border border-blue-300 bg-white rounded-md flex flex-row gap-2">
              <View className="flex flex-row items-center gap-1">
                <IcFlag />
                <IcDropdown />
              </View>

              <TextInput className=" p-2 " placeholder="Enter the number" />
            </View>

            <View className="flex flex-row items-center ">
              <Checkbox />
              <Text className="text-gray-500 text-[12px]">
                Whatsapp number is not similar
              </Text>
            </View>
          </View>

          <View className="mt-2">
            <Text className="text-[12px] font-medium text-[#828282] mb-2">
              Email Address
            </Text>

            <TextInput
              className="border border-blue-300 p-2 rounded-md bg-white "
              placeholder="Enter the email address"
            />
          </View>

          <View className="bg-white rounded-lg p-2 mt-2">
            <View className="flex flex-row items-center justify-between">
              <Text>Praveen Sharma</Text>

              <IcPen />
            </View>

            <View className="flex flex-row items-center gap-2 my-1">
              <IcCall />
              <Text className="text-[12px] text-gray-400"> +91-7856632923</Text>
            </View>

            <View className="flex flex-row items-center gap-2 my-1">
              <IcMail />
              <Text className="text-[12px] text-gray-400">
                {" "}
                praveen@gmail.com
              </Text>
            </View>

            <View className="flex flex-row items-center gap-2 my-1 ">
              <IcVender />
              <Text className="text-[12px] text-gray-400"> Vender</Text>
            </View>
          </View>
          <View className="fles flex-row items-center justify-center w-full mt-8">
            <TouchableWithoutFeedback
            onPress={() => {navigation.navigate("AddContactPerson")}}
            >
              <Text
                className={`text-[16px] font-medium text-[#2F80ED] underline`}
              >
                + Add contact person
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View className="mt-4 flex flex-row items-center justify-between">
          <TouchableOpacity
            className={`py-3 bg-white border-[1px] w-[48%] border-[#2F80ED]  rounded-xl`}
          >
            <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
              Discard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("");
            }}
            className={`py-3  w-[48%]  bg-[#2F80ED]  rounded-xl`}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-col items-center justify-center mt-4">
          <TouchableWithoutFeedback>
            <Text
              className={`text-[16px] font-medium text-[#2F80ED] underline`}
            >
              Save & Create New
            </Text>
          </TouchableWithoutFeedback>

          <Text className="text-[12px] italic text-[#828282] mt-8">
            Powered by ClearResults
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ExhibitionDetailsScreen;
