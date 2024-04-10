import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../components/ui/Screen";
import IcTemplate from "../../assets/icons/ic_template.svg";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";

const SelectTemplateScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  return (
    <Screen>
      <TopBar logo={CrLogo} />
      <ScrollView>
        <View className="flex flex-row gap-x-2 items-center px-6 py-4 ">
          <Text className="text-md font-medium">Email Templates</Text>
        </View>

        {/* Image Grid 2 columns */}
        <View className="py-8  ">
          <Image
            className="w-screen  "
            source={require("../../assets/images/email_template.png")}
            style={{ height: Dimensions.get("window").height / 2 }}
            resizeMode="contain"
          />
        </View>

        {/* Button
         */}
        <View className="felx items-center justify-center">
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("EmailSetup", { template: 1 })}
          >
            <View className=" m-3 bg-blue-500 p-4 py-3  rounded-xl mt-6 items-center justify-center">
              <Text className="text-white text-center">
                Select This Temlate
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </Screen>
  );
};

//

export default SelectTemplateScreen;
