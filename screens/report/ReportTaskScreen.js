import { View, Text, Image, Dimensions, ImageBackground } from "react-native";

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import IcFilter from "../../assets/icons/ic_filter.svg";
import Button from "../../components/ui/Button";

const ReportTaskScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* Filter */}
      <ScrollView>
        {/* Images */}
        <View className="p-1 py-2">
          <View className="flex items-end justify-center p-2">
            <TouchableOpacity onPress={()=>navigation.navigate("ReportsFilter")} className=" shadow-md bg-white px-2 py-3 shadow-gray-500 rounded-md ">
              <IcFilter />
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../assets/images/reports/report_2.png")}
            className="w-full mb-4 "
            style={{
              height: Dimensions.get("screen").width * (9 / 16) + 28,
            }}
            resizeMode="contain"
          />

          <Image
            source={require("../../assets/images/reports/report_3.png")}
            className="w-full mb-4 "
            style={{
              height: Dimensions.get("screen").width * (9 / 16) - 10,
            }}
            resizeMode="contain"
          />


        <View className="p-4">
          <Button varient={"outline"}> Download Reports</Button>
        </View>
        </View>

        <View className=" pb-8">
          <Text className="text-gray-400 text-center italic text-sm text-light">
            Powered By ClearResult
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReportTaskScreen;
