import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
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
export default function SignupScreen() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignup = () => {};

  return (
    <Screen>
      <TopBar logo={Logo} />

      <View className="px-4">
        <View className="absolute right-[16px] top-5">
          <TouchableWithoutFeedback onPress={handleLogin}>
            <Text
              className={`text-[16px] font-medium text-[${colors.primary}] underline`}
            >
              Login
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View className=" flex flex-col justify-center h-full gap-7">
          <Text className={`text-[18px] text-[${colors.primary}] font-medium`}>
            Get Started with ClearResult
          </Text>
          <Text className="text-[14px] font-normal text-[#333333]">
            Please register to continue
          </Text>
         <View>

         <Text className="text-[14px] font-medium text-[#828282] mb-2">
            Store/Company Name
          </Text>
          <InputFeild
            placeholder="Enter the store/company name"
            value={company}
            onChangeText={(text) => setCompany(text)}
            secureTextEntry={false}
          />

         </View>

         <View>

<Text className="text-[14px] font-medium text-[#828282] mb-2">
   Cantact Name
 </Text>
 <InputFeild
   placeholder="Enter the name"
   value={contactName}
   onChangeText={(text) => setContactName(text)}
   secureTextEntry={false}
 />

</View>
         <View>

         <Text className="text-[14px] font-medium text-[#828282] mb-2">
            Mobile Number
          </Text>

          <InputFeild
            placeholder="Enter the mobile number"
            value={contactNumber}
            onChangeText={(text) => setContactNumber(text)}
            keyboardType="phone-pad"
          />
         </View>

         <View>

         <Text className="text-[14px] font-medium text-[#828282] mb-2">
            Email ID/Username
          </Text>
          <InputFeild
            placeholder="Enter the email ID/username"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
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
            onPress={handleSignup}
            className={`py-3 bg-[${colors.primary}]   rounded-lg`}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}
