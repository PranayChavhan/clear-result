import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/ui/TopBar";
import Logo from "../../assets/images/cr_logo_auth.png";
import Screen from "../../components/ui/Screen";
import colors from "../../constants/colors";

import IcFacebook from "../../assets/icons/ic_facebook.svg";
import IcGoogle from "../../assets/icons/ic_google.svg";
import DynamicToggleButton from "../../components/ui/DynamicToggleButton";

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
export default function LoginScreen() {
  const [toggleValue, setToggleValue] = useState(false);

  const handleToggle = (value) => {
    setToggleValue(value);
  };

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailOrPass, setEmailOrPass] = useState("");
  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    if (email == "admin@cr.com" && password == "admin") {
      navigation.navigate("Home", {
        screen: "AdminDashboard",
      });
      return;
    } else {
      navigation.navigate("Home", {
        screen: "CreateStack",
      });
    }
  };

  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  return (
    <Screen className="bg-white">
      <TopBar logo={Logo} nodrawer={true} />

      <View className="px-4">
        <View className="absolute right-[16px] top-16">
          <TouchableWithoutFeedback onPress={handleSignup}>
            <Text
              className={`text-[16px] font-medium text-[${colors.primary}] underline`}
            >
              Signup
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View className="">
          <View className=" flex flex-col justify-center h-full  gap-7">
            <Text
              className={`text-[18px] text-[${colors.primary}] font-medium`}
            >
              Welcome!
            </Text>
            <View>
              <Text className="text-[14px] font-medium text-[#828282] mb-2">
                Email ID/ Mobile Number
              </Text>
              <InputFeild
                placeholder="olivia@untitledui.com"
                value={email}
                onChangeText={(text) => setEmail(text)}
                secureTextEntry={false}
              />
            </View>

            <View>
              <Text className="text-[14px] font-medium text-[#828282] mb-2">
                Password
              </Text>
              <InputFeild
                placeholder="****************"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              onPress={handleLogin}
              className={`py-3 bg-[${colors.primary}]   rounded-lg`}
            >
              <Text className="text-[16px] font-semibold text-center text-white">
                Login
              </Text>
            </TouchableOpacity>

            <View className="flex flex-col items-center justify-center">
              <Text className="text-[14px] font-normal text-[#333333] mb-4">
                or login with
              </Text>

              <View className="flex flex-row gap-2 mb-6">
                <IcFacebook />
                <IcGoogle />
              </View>

              <TouchableWithoutFeedback onPress={handleForgetPassword}>
                <Text
                  className={`text-[14px] font-medium text-[${colors.primary}] underline`}
                >
                  Forget Password
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
}
