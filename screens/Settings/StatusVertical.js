import {
  View,
  Text,
  TextInput,
  Switch,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
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

const images = [
  require("../../assets/images/sv-1.png"),
  require("../../assets/images/sv-2.png"),
  require("../../assets/images/sv-3.png"),
  require("../../assets/images/sv-4.png"),
  require("../../assets/images/sv-5.png"),
  require("../../assets/images/sv-6.png"),


]
const StatusVerticalScreen = () => {
  const navigation = useNavigation();

  const [textVal, settextVal] = useState("");
  const [index, setIndex] = useState(0);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if(index < images.length - 1) {
      setIndex(index + 1);
    }else{
      setIndex(0);
    }
  }

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
        <TouchableWithoutFeedback onPress={handleNext}>
        <Image
              source={images[index]}
              className="w-full mb-4 "
              style={{
                height: Dimensions.get("screen").width * (16/ 9) + 12,
              }}
              resizeMode="contain"
            />
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

export default StatusVerticalScreen;
