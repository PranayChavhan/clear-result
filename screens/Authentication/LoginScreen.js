import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/TopBar";
import Logo from "../../assets/images/cr_logo_auth.png";
import Screen from "../../components/Screen";
import colors from "../../constants/colors";

import IcFacebook from "../../assets/icons/ic_facebook.svg";
import IcGoogle from "../../assets/icons/ic_google.svg";
import DynamicToggleButton from "../../components/DynamicToggleButton";

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
  const [password, setPassword] = useState("");
  const [emailOrPass, setEmailOrPass] = useState("");
  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  const handleLogin = () => {};

  const handleForgetPassword = () =>{
    navigation.navigate("ForgetPassword");
  }

  return (
    <Screen className="bg-white">
      <TopBar logo={Logo} />

      <View className="px-4">

        <View className="flex flex-row items-center bg-[#F3F3F3] -mx-4 p-2 px-4 border-b-[0.5px] border-gray-400">
        <Text className="text-[12px] font-bold text-[#828282] mr-2">
        Sales Representative
          </Text>
   

    <DynamicToggleButton initialState={false} onToggle={handleToggle} />
    
    <Text className="text-[12px] font-bold text-[#64A6FF] ml-2">Admin</Text>

        </View>
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
          <Text className={`text-[18px] text-[${colors.primary}] font-medium`}>
            Welcome!
          </Text>
         <View>

         <Text className="text-[14px] font-medium text-[#828282] mb-2">
            Email ID/ Mobile Number
          </Text>
          <InputFeild
            placeholder="olivia@untitledui.com"
            value={emailOrPass}
            onChangeText={(text) => setEmailOrPass(text)}
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
            <Text className="text-[14px] font-normal text-[#333333] mb-4">or login with</Text>

            <View className="flex flex-row gap-2 mb-6">
                <IcFacebook/>
                <IcGoogle/>
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
