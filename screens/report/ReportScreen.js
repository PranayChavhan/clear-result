import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcFilter from "../../assets/icons/ic_filter.svg";
import IcFilterDown from "../../assets/icons/ic_filter_down.svg";
import Constants from "expo-constants";
import TaskTopNavigation from "../../components/task/TaskTopNavigation";
import IcSearch from "../../assets/icons/ic_search.svg";
import Checkbox from "../../components/ui/Checkbox";
import Screen from "../../components/ui/Screen";
import ScreenTitle from "../../components/ui/ScreenTitle";
import ReportsTopNavigation from "../../components/reports/ReportsTopNavigation";

const ReportScreen = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleFilterScreen = () => {
    if (isFilterVisible === false) {
      setIsFilterVisible(true);
    } else {
      setIsFilterVisible(false);
    }
  };

  return (
    <>
      <Screen>
        <TopBar logo={CrLogo} />
        <ScreenTitle>Reports</ScreenTitle>
        <ReportsTopNavigation />
      </Screen>
    </>
  );
};

export default ReportScreen;
