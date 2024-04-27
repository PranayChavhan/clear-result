import {View, Text, TouchableWithoutFeedback,TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

import IcLocation from "../../assets/icons/ic_locotion.svg";
import IcHome from "../../assets/icons/ic_home.svg";
import IcClock from "../../assets/icons/ic_clock.svg";
import IcAvatarGroup from "../../assets/icons/ic_Avatar group.svg";

const ExhibitionCard = ({
    name,
    startDate,
    endDate,
    startTime,
    endTime,
    link,
  }) => {
    const navigation = useNavigation();
    const handlePress = () => {
      navigation.navigate(link);
    };
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate("ExhibitionInfo");
      }}>
      <View className="border-[0.8px] border-gray-300 bg-white rounded-xl mb-8">
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
              Invite lead
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
  

  export default ExhibitionCard;