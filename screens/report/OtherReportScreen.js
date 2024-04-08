import { View, Text, Image } from "react-native";
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
        <View className="w-full p-4 flex-row  items-center  justify-end">
          <TouchableOpacity className="shadow-md bg-white p-2 px-4  shadow-gray-300 rounded-md flex flex-row justify-center gap-x-2 items-center">
            <Text>Monthly</Text>
            <IcDown />
          </TouchableOpacity>
        </View>
        {/* Images */}
        <View className="p-1">
          <Image
            source={require("../../assets/images/reports/report_4.png")}
            className="w-screen max-h-[180px] object-contain mb-4"
          />

          <Image
            source={require("../../assets/images/reports/report_5.png")}
            className="w-screen max-h-[250px] my-4 object-contain"
          />
          <View className="py-2">
            <Button varient={"outline"}> Download Reports</Button>
          </View>

          <View className="">
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
