import { View, Text } from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import IcTemplate from "../../assets/icons/ic_template.svg";

const TemplateScreen = () => {
  return (
    <Screen>
      <View className="flex flex-row row-grap-2 ">
        <IcTemplate />
        <Text className="text-2xl">Temlates for You</Text>
      </View>
      {/* Image Grid 2 columns */}
    </Screen>
  );
};

//

export default TemplateScreen;
