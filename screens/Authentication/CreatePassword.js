import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/ui/TopBar";
import Logo from "../../assets/images/cr_logo_auth.png";
import Screen from "../../components/ui/Screen";
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
export default function CreatePasswordScreen() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEvent = () => {
    navigation.navigate("Login");
  };

  return (
    <Screen>
      <TopBar logo={Logo} />

      <View className="px-4">
        <View className=" flex flex-col justify-center h-full  gap-7 -mt-20">
          <Text className={`text-[18px] text-[${colors.primary}] font-medium`}>
            Create New Password
          </Text>

          <Text className="text-[14px] font-normal text-[#333333]">
            As per the instructions reset your password.
          </Text>

          <View>
            <Text className="text-[14px] font-medium text-[#828282] mb-2">
              New Password
            </Text>
            <InputFeild
              placeholder="****************"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </View>

          <View>
            <Text className="text-[14px] font-medium text-[#828282] mb-2">
              Retype Password
            </Text>
            <InputFeild
              placeholder="****************"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            onPress={handleEvent}
            disabled={password && confirmPassword ? true : false}
            className={`py-3 bg-[${colors.primary}]   rounded-lg`}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}
