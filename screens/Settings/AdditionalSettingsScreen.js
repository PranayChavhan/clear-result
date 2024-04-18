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
import IcAdditional from "../../assets/icons/ic_set_additional.svg";
import IcStatusVertical from "../../assets/icons/ic_status_vertical.svg";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "../../components/ui/Checkbox";
import ProfileSettingsCard from "../../components/profile/ProfileSettingsCard";

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

const settings3 = [
  {
    title: "Additional Settings",
    desc: "Personalised configurations at your fingertips",
    icon: <IcAdditional style={{ width: 20, height: 20 }} />,
    nav: "AdditionalSettings",
  },
];

const AdditionalSettingsScreen = () => {
  const navigation = useNavigation();

  const [textVal, settextVal] = useState("");

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        className=" mb-[30rem] py-6 px-4"
      >
        <Text
          style={{ fontFamily: "Poppins-Regular", fontWeight: 600 }}
          className="text-[14px] text-black font-semibold"
        >
          Additional Configuration
        </Text>
        <View
          className={`rounded-xl  sm flex flex-col p-4 shadow-md shadow-gray-400 bg-white m-2`}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("StatusVertical")}
            className={`  flex gap-4 flex-row justify-start items-center `}
          >
            <View className={``}>
              <IcStatusVertical />
            </View>
            <View className="flex gap-y-2">
              <Text className="font-medium text-sm">Status Vertical</Text>
              <Text className="text-xs text-gray-600">
                Define statuses and actions effortlessly
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center justify-start gap-4"></View>

        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Automatically close prospects if no communication occurs within how
            many days?{" "}
          </Text>
          <InputFeild
            placeholder="Enter the days"
            
            secureTextEntry={false}
          />
        </View>

        {/* Email */}
        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            In how many days should the system escalate to another user if the
            sales user takes no action?{" "}
          </Text>
          <InputFeild
            placeholder="Enter the days"
            
            secureTextEntry={false}
          />
        </View>

        {/* Notes */}
        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Set a reminder for the meeting in advance?
          </Text>
          <InputFeild
            placeholder="Enter the days"
            
            secureTextEntry={false}
          />
        </View>

        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            How many days does the user have to follow up after entering a
            prospect?
          </Text>
          <InputFeild
            placeholder="Enter the days"
            
            secureTextEntry={false}
          />
        </View>

        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Initiate contact if inactive for a specified duration
          </Text>
          <InputFeild
            placeholder="Enter the days"
            
            secureTextEntry={false}
          />
        </View>

        <View className="mt-4 flex flex-row items-center justify-between">
          <TouchableOpacity
            onPress={handleBack}
            className={`py-3 bg-white border-[1px] w-[48%] border-[#2F80ED]  rounded-xl`}
          >
            <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
              Discard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleBack}
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

export default AdditionalSettingsScreen;
