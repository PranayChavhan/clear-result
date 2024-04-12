import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import IcPerson from "../assets/icons/ic_sales_person.svg";

const SalesRepresentativeCard = ({ title, onPress }) => {
    const navigation = useNavigation();

    const handleSalesRepresentative = (name) => {
        console.log(name);
        navigation.navigate("SalesRepresentative");
    }
  return (
    <TouchableWithoutFeedback onPress={handleSalesRepresentative}>
      <View className="p-1 flex-1">
        <View className="w-full flex flex-row p-3 items-center   bg-orange-50 rounded-xl">
          <View className="rounded-full ">
            <IcPerson />
          </View>

          <View className="flex flex-col pl-2">
            <Text
              className={"font-medium text-sm"}
              style={{
                fontFamily: "Poppins-Regular",
              }}
            >
              {title}
            </Text>

            <Text
              className={"text-[12px] text-gray-700"}
              style={{
                fontFamily: "Poppins-Regular",
              }}
            >
              See his data
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SalesRepresentativeCard;
