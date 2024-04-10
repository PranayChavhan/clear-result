import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import IcTemplate from "../../assets/icons/ic_template.svg";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import { Image } from "react-native";

const TemplateScreen = () => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <Screen>
      <TopBar logo={CrLogo} />
      <ScrollView>
        <View className="flex flex-row gap-x-2 items-center px-6 py-4 ">
          <IcTemplate />
          <Text className="text-md font-medium">Temlates for You</Text>
        </View>
        <View className="py-8">
          <TouchableOpacity>
            <View className="flex items-center justify-center flex-row max-h-[150px] object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-1.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-2.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex items-center justify-center flex-row max-h-[150px] object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-3.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-4.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex items-center justify-center flex-row max-h-[150px] object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-5.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-6.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* Image Grid 2 columns */}
      </ScrollView>
    </Screen>
  );
};

//

export default TemplateScreen;
