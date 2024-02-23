import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/TopBar";
import Logo from "../../assets/images/cr_logo_auth.png";
import Screen from "../../components/Screen";
import colors from "../../constants/colors";

export default function CheckEmailScreen() {
  const navigation = useNavigation();

  const handleEvent = () => {};
  const handleConfirmEmail = () =>{};

  return (
    <Screen>
      <TopBar logo={Logo} />

      <View className="px-4">

        <View className=" flex flex-col justify-center h-full  gap-7 -mt-20">
          <Text className={`text-[18px] text-[${colors.primary}] font-medium`}>
           Check Your Email
          </Text>


         <Text className="text-[14px] font-normal text-[#333333] pr-[50px]">
            We have sent you the password recovery instruction to your email.
         </Text>

         <TouchableWithoutFeedback onPress={handleConfirmEmail}>
            <Text
              className={`text-[16px] font-medium text-[${colors.primary}] underline`}
            >
              Skip, I'll confirm later
            </Text>
          </TouchableWithoutFeedback>


         
          <TouchableOpacity
            onPress={handleEvent}
            className={`py-3 bg-[${colors.primary}]   rounded-lg`}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
                Open Email App
            </Text>
          </TouchableOpacity>


        </View>
      </View>
    </Screen>
  );
}
