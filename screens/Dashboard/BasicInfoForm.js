import {
  View,
  Text,
  TextInput,
  Switch,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcFlagIndia from "../../assets/icons/ic_flag_india.svg";
import IcDown from "../../assets/icons/ic_down.svg";
import IcMail from "../../assets/icons/ic_mail.svg";
import IcWhatsapp from "../../assets/icons/ic_whatsapp.svg";
import IcPlusLight from "../../assets/icons/ic_plus_light.svg";
import IcCameraUpload from "../../assets/icons/ic_camera_upload.svg";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "../../components/ui/Checkbox";

const InputFeild = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  className,
}) => {
  return (
    <TextInput
      className={`border border-[#2f81ed4d] p-2 rounded-md  ${className}`}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

const UserInfoFormScreen = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
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
            className="text-[14px] text-[#828282] font-medium"
          >
            Prospect Entry Form
          </Text>
          <IcDown />
        </View>

        <View className="flex items-center justify-center gap-x-3 flex-row">
          <View className="mt-2 bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center">
            <IcCameraUpload />
          </View>
          <View className="mt-2 flex-1">
            <Text className="text-[14px] font-medium text-[#828282] mb-2">
              Company / Store name
            </Text>
            <InputFeild
              placeholder="Enter the company/store name"
              secureTextEntry={false}
            />
            <CheckBox
              className=""
              label={"Company name and store name is different."}
            />
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Primary Contact
          </Text>
          <InputFeild
            placeholder="Enter firstname and last name of the contact"
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>
        {/* Mobile Number */}
        <View className="mt-4 ">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Mobile Number
          </Text>
          <View className="flex flex-row items-center border border-blue-200  rounded-md">
            <TouchableOpacity>
              <View className=" p-3 rounded-md mr-2 gap-x-3 flex flex-row items-center justify-center">
                <IcFlagIndia />
                <IcDown />
              </View>
            </TouchableOpacity>

            <TextInput
              placeholder="Enter the description here"
              secureTextEntry={false}
            />
          </View>
          <CheckBox className="" label={"Whatsapp Number is not similar?"} />
        </View>

        {/* Mobile Number */}
        <View className="mt-4 ">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Mobile Number
          </Text>
          <View className="flex flex-row items-center border border-blue-200  rounded-md">
            <TouchableOpacity>
              <View className=" p-3 rounded-md mr-2 gap-x-3 flex flex-row items-center justify-center">
                <IcFlagIndia />
                <IcDown />
              </View>
            </TouchableOpacity>

            <TextInput
              placeholder="Enter the description here"
              secureTextEntry={false}
            />
          </View>
        </View>

        {/* Email */}
        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Email Address
          </Text>
          <InputFeild
            placeholder="Enter the email address"
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>

        <View className="mt-2 bg-gray-50 p-2 rounded-md pb-4">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[13px] text-gray-500 font-semibold italic">
              Agent& Distributor
            </Text>
            <Switch
              trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
              thumbColor={isEnabled ? "white" : "white"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View className=" flex gap-y-2">
            <Text className="text-[13px] text-gray-500 font-semibold ">
              Agent
            </Text>
            <View className="flex-row flex gap-x-2 items-center">
              <View className="border-blue-200 bg-white border px-3 py-2 rounded-lg flex-1">
                <TextInput placeholder="Search & select distributor" />
              </View>
              <View className=" p-3 rounded-md mr-2 bg-gray-200">
                <IcPlusLight />
              </View>
            </View>
            <Text className="text-[13px] text-gray-500 font-semibold ">
              Distributor
            </Text>
            <View className="flex-row flex gap-x-2 items-center">
              <View className="border-blue-200 bg-white border px-3 py-2 rounded-lg flex-1">
                <TextInput placeholder="Search & select distributor" />
              </View>
              <View className=" p-3 rounded-md mr-2 bg-gray-200">
                <IcPlusLight />
              </View>
            </View>
          </View>
        </View>

        <View className="mt-2 bg-[#F8F8F8] p-2 rounded-2xl">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[13px] text-gray-500 font-semibold italic">
              Prospects Details{" "}
            </Text>
            <Switch
              trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
              thumbColor={isEnabled ? "white" : "white"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        {/* Notes */}
        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Notes
          </Text>
          <InputFeild
            placeholder="Please enter if any notes"
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
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
              navigation.navigate("SubscriptionPackages");
            }}
            className={`py-3  w-[48%]  bg-[#2F80ED]  rounded-xl`}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableWithoutFeedback>
          <Text className="text-[16px] font-medium text-center mt-4 text-[#2F80ED] underline">
            Save & Create New
          </Text>
        </TouchableWithoutFeedback>

        <View className="flex flex-col items-center justify-center mt-4">
          <Text className="text-[12px] italic text-[#828282] mt-8">
            Powered by ClearResults
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default UserInfoFormScreen;
