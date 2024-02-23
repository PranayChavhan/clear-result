import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/TopBar";
import Logo from "../../assets/images/cr_logo_auth.png";
import Screen from "../../components/Screen";
import colors from "../../constants/colors";
const InputFeild = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View className="">
      <TextInput
        className="border border-gray-300 p-2 rounded-md"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};
export default function ForgetPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleEvent = () => {};

  return (
    <Screen>
      <TopBar logo={Logo} />

      <View className="px-4">

        <View className=" flex flex-col justify-center h-full  gap-7 -mt-20">
          <Text className={`text-[18px] text-[${colors.primary}] font-medium`}>
           Forget Password
          </Text>
         <View>

         <Text className="text-[14px] font-medium text-[#828282] mb-2">
            Email ID
          </Text>
          <InputFeild
            placeholder="olivia@untitledui.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />

         </View>

         <Text className="text-[14px] font-normal text-[#333333] pr-[50px]">
         Enter the email associated with your account and we'll send an email with instructions to reset the password
         </Text>

         
          <TouchableOpacity
            onPress={handleEvent}
            className={`py-3 bg-[${colors.primary}]   rounded-lg`}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
              Send
            </Text>
          </TouchableOpacity>


        </View>
      </View>
    </Screen>
  );
}
