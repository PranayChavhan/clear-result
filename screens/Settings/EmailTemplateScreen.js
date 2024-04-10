import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useRef, useMemo, useState, useEffect } from "react";
import Screen from "../../components/ui/Screen";
import IcTemplate from "../../assets/icons/ic_template.svg";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const EmailTemplateScreen = () => {
  const windowWidth = Dimensions.get("window").width;

  const navigation = useNavigation();

  return (
    <Screen>
      <TopBar logo={CrLogo} />
      <ScrollView>
        <View className="flex flex-row gap-x-2 items-center px-6 py-4 ">
          <Text className="text-md font-medium">Email Templates</Text>
        </View>
        <View className="py-8 pb-32  ">
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SelectTemplate")}
          >
            <View className="flex items-center justify-center flex-row  object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_1.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_2.png")}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SelectTemplate")}
          >
            <View className="flex items-center my-3 justify-center flex-row  object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_1.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_2.png")}
              />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SelectTemplate")}
          >
            <View className="flex items-center justify-center flex-row  object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_1.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_2.png")}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SelectTemplate")}
          >
            <View className="flex items-center my-3 justify-center flex-row  object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_1.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_2.png")}
              />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View className="flex items-center justify-center flex-row  object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_1.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_2.png")}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View className="flex items-center my-3 justify-center flex-row  object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_1.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 200 }}
                source={require("../../assets/images/templates/email_2.png")}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </Screen>
  );
};

//

export default EmailTemplateScreen;
