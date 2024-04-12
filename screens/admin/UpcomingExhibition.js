import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ExhibitionCard from '../../components/exhibition/ExhibitionCard';
import Screen from '../../components/ui/Screen';


const UpcomingExhibition = () => {
  const navigation = useNavigation();
  return (
    <Screen className="bg-white">
       <View className="my-8 px-4 bg-white">
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
            onPress={() => {
              navigation.navigate("ExhibitionInfo");
            }}
            className={`py-3 bg-blue-500   rounded-lg `}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
              Add New Exhibition
            </Text>
          </TouchableOpacity>
        </View>
    </Screen>
  )
}

export default UpcomingExhibition