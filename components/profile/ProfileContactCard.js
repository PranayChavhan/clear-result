import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import avatar from "../../assets/images/avatar.jpeg";
import IcEdit from "../../assets/icons/ic_edit.svg";
import IcPhone from "../../assets/icons/ic_phone.svg";
import IcMail from "../../assets/icons/ic_mail.svg";
import IcCalander from "../../assets/icons/ic_calendar_sm.svg";
import { useNavigation } from "@react-navigation/native";

const ProfileContactCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <View
        className={`rounded-xl  sm flex flex-col p-4 shadow-md bg-white m-4`}
      >
        <View className={`flex flex-row items-center justify-between`}>
          <View className="flex gap-1 flex-row justify-start items-center">
            <View>
              <Image
                source={avatar}
                resizeMode="contain"
                className={`w-10 h-10 rounded-full flex-1`}
              />
            </View>
            <Text className="font-semibold text-sm">Ayush Bulbule </Text>
            <Text className="italic text-sm">(senior manager)</Text>
          </View>
          <IcEdit />
        </View>
        {/*  COntact */}
        <View className="flex flex-row items-center gap-2 mt-4 text-gray-500">
          <IcPhone />
          <Text className="text-sm">+91 1234567890</Text>
        </View>
        <View className="flex flex-row items-center gap-2 mt-4 text-gray-500">
          <IcMail />
          <Text className="text-sm">ayushbulbule24@gmail.com</Text>
        </View>
        <View className="flex flex-row items-center gap-2 mt-4 text-gray-500">
          <IcCalander />
          <Text className="text-sm">ayushbulbule24@gmail.com</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileContactCard;
