import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ExhibitionCard from "../../components/exhibition/ExhibitionCard";
import Screen from "../../components/ui/Screen";

const UpcomingExhibition = () => {
  const navigation = useNavigation();

  const [notification, setNotification] = React.useState("");
  
  return (
    <Screen className="bg-white">
      <View className="my-8 px-4 bg-white">
        <TouchableOpacity onPress={() => {
            navigation.navigate("ExhibitionInfo");
          }}>
          <ExhibitionCard
            name="Exhibition Name 1"
            startDate="23rd Oct 2023"
            endDate="25th Oct 2023"
            startTime="10:00am"
            endTime="1:00pm"
            link="InviteUser"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            navigation.navigate("ExhibitionInfo");
          }}>
        <ExhibitionCard
          name="Exhibition Name 2"
          startDate="03rd Oct 2023"
          endDate="05th Oct 2023"
          startTime="10:00am"
          endTime="1:00pm"
          link="InviteUser"
        />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ExhibitionDetails",{
            onGoBack: (data) => {
              // Callback function to handle data from ScreenB
              setNotification(data);
            },
          })}
          className={`py-3 bg-blue-500   rounded-lg `}
        >
          <Text className="text-[16px] font-semibold text-center text-white">
            Add New Exhibition
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default UpcomingExhibition;
