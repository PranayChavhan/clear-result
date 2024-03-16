import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import TopBar from "../../components/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcMore from "../../assets/icons/ic_more.svg";
import IcLocation from "../../assets/icons/ic_locotion.svg";
import IcHome from "../../assets/icons/ic_home.svg";
import IcClock from "../../assets/icons/ic_clock.svg";
import IcAvatarGroup from "../../assets/icons/ic_Avatar group.svg";
import { useNavigation } from '@react-navigation/native';


function ExhibitionCard({
  name,
  startDate,
  endDate,
  startTime,
  endTime,
  link,
}) 

{

    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate(link);
      };
  return (
    <View className="border-[0.8px] border-gray-300 rounded-xl mb-8">
      <View className="flex flex-row marker:items-center justify-between p-4">
        <View>
          <Text className="text-[16px] font-semibold mb-4">{name}</Text>
          <View className="flex flex-row items-center gap-1 mb-2">
            <IcHome />
            <Text className="text-[12px] text-gray-500">
              {startDate} - {endDate}
            </Text>
          </View>

          <View className="flex flex-row items-center gap-1">
            <IcClock />
            <Text className="text-[12px] text-gray-500">
              {startTime} - {endTime}
            </Text>
          </View>
        </View>

        <View>
          <IcLocation />
        </View>
      </View>

      <View className="bg-gray-200 p-4 rounded-b-xl flex flex-row items-center justify-between">
        <View className="flex flex-row gap-2">
          <Text className="text-gray-500">Users</Text>
          <IcAvatarGroup />
        </View>
        <TouchableWithoutFeedback onPress={handlePress}>
        <Text className="text-[16px] underline text-blue-500 font-medium">
          Invite users
        </Text>
        </TouchableWithoutFeedback>
        
      </View>
    </View>
  );
}

const MoreScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />
      <View className="mt-4 px-4">
        <View className="flex flex-row items-center gap-4">
          <IcMore />
          <Text className="text-[18px] font-[500]">Exhibition Master</Text>
        </View>

        <View className="my-8">
          <ExhibitionCard
            name="Exhibition Name 1"
            startDate="23rd Oct 2023"
            endDate="25th Oct 2023"
            startTime="10:00am"
            endTime="1:00pm"
            link="InviteUser"
          />

          <ExhibitionCard
            name="Exhibition Name 2"
            startDate="03rd Oct 2023"
            endDate="05th Oct 2023"
            startTime="10:00am"
            endTime="1:00pm"
            link="InviteUser"
          />

          <TouchableOpacity
            onPress={()=>{
              navigation.navigate("Shopprofile");
            }}
            className={`py-3 bg-blue-500   rounded-lg `}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
              Add New Exhibition
            </Text>
          </TouchableOpacity>
        </View>



        <Text className="text-[12px] italic text-[#828282] absolute bottom-[-20%] left-[38%]">
        Powered by ClearResults
      </Text>
      </View>
    </Screen>
  );
};

export default MoreScreen;
