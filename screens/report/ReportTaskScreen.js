import { View, Text, Image, Dimensions } from "react-native";

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
        <View className="w-full p-4 flex-row  items-center  justify-end">
          <TouchableOpacity
            onPress={() => navigation.navigate("ReportsFilter")}
            className="shadow-md bg-white p-2 px-4  shadow-gray-300 rounded-md"
          >
            <Text>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" ml-2 shadow-md bg-white px-2 py-3 shadow-gray-300 rounded-md ">
            <IcFilter />
          </TouchableOpacity>
        </View>
        {/* Images */}
        <View className="p-1">
          <Image
            source={require("../../assets/images/reports/report_1.png")}
            className="w-full mb-4 "
            style={{
              height: Dimensions.get("screen").width * (9 / 16) + 12,
            }}
            resizeMode="contain"
          />

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
        </View>
        <View className="p-4">
          <Button varient={"outline"}> Download Reports</Button>
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
