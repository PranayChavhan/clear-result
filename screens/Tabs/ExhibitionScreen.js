import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, {useState, useEffect} from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcMore from "../../assets/icons/ic_exhibition.svg";

import { useNavigation } from "@react-navigation/native";
import ExhibitionCard from "../../components/exhibition/ExhibitionCard";
import SuccessToast from "../../components/SuccessToast";


const ExhibitionScreen = ({route}) => {
  const navigation = useNavigation();
  const [notification, setNotification] = useState("");


  //get data from params
  useEffect(() => {
    if (route && route.params && route.params.data) {
      setNotification(route.params.data);
    }
  }, [route.params]);

  useEffect(() => {
    setTimeout(() => {
      setNotification("");
    }
    , 3000);
}, [notification]);


  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />

      {
          notification!=""&&
          <SuccessToast
            text={notification}
            onClose={() => setNotification("")}
            />
      }

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
            onPress={() => {
              navigation.navigate("ExhibitionDetails");
            }}
            className={`py-3 bg-blue-500 rounded-lg `}
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

export default ExhibitionScreen;
