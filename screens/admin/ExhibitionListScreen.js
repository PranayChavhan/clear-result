import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcMore from "../../assets/icons/ic_exhibition.svg";
import IcLocation from "../../assets/icons/ic_locotion.svg";
import IcHome from "../../assets/icons/ic_home.svg";
import IcClock from "../../assets/icons/ic_clock.svg";
import IcAvatarGroup from "../../assets/icons/ic_Avatar group.svg";
import { useNavigation } from "@react-navigation/native";
import ExhibitionListTopNav from "../../components/admin/ExhibitionListTop";

const ExhibitionListScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />

      <View className="px-4 py-3">
        <Text className="text-[18px] font-[500]">Exhibition Overview</Text>
      </View>
      <ExhibitionListTopNav />
      <View className="mt-4 px-4">
        <Text className="text-[12px] italic text-[#828282] absolute bottom-[-20%] left-[38%]">
          Powered by ClearResults
        </Text>
      </View>
    </Screen>
  );
};

export default ExhibitionListScreen;
