import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import IcFilter from "../../assets/icons/ic_filter.svg";
import IcDown from "../../assets/icons/ic_down.svg";
import Button from "../../components/ui/Button";

const OtherReportScreen = () => {
  return (
    <View>
      {/* Filter */}
      <ScrollView>
        <View>
          <View className="w-full px-4 pt-3 flex-row  items-center  justify-end">
            <TouchableOpacity className="shadow-md bg-white p-2 px-4  shadow-gray-300 rounded-md flex flex-row justify-center gap-x-2 items-center">
              <Text>Monthly</Text>
              <IcDown />
            </TouchableOpacity>
          </View>
          {/* Images */}
          <View className="p-1">
            <Image
              source={require("../../assets/images/reports/report_4.png")}
              className="w-full mb-4 "
              style={{
                height: Dimensions.get("screen").width * (9 / 16) - 32,
              }}
              resizeMode="contain"
            />

            <Image
              source={require("../../assets/images/reports/report_5.png")}
              className="w-full mb-4 "
              style={{
                height: Dimensions.get("screen").width * (3 / 4) - 28,
              }}
              resizeMode="contain"
            />
          </View>
          <View className="py-2">
            <Button varient={"outline"}> Download Reports</Button>
          </View>

          <View className="pb-10">
            <Text className="text-gray-400 text-center italic text-sm text-light">
              Powered By ClearResult
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OtherReportScreen;
