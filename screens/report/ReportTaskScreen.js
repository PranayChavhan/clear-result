import { View, Text, Image } from "react-native";
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
            className="w-screen max-h-[250px] object-contain mb-4"
          />

          <Image
            source={require("../../assets/images/reports/report_2.png")}
            className="w-screen max-h-[250px] my-4 object-contain"
          />

          <Image
            source={require("../../assets/images/reports/report_3.png")}
            className="w-screen max-h-[250px] my-4  object-contain"
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

export default ReportTaskScreen;
