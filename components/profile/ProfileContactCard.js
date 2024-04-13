import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import avatar from "../../assets/images/avatar.jpeg";
import IcEdit from "../../assets/icons/ic_edit.svg";
import IcPhone from "../../assets/icons/ic_phone.svg";
import IcMail from "../../assets/icons/ic_mail.svg";
import IcCalander from "../../assets/icons/ic_calender_mini.svg";
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
            <Text className="font-semibold text-sm">Praveen Shah </Text>
            <Text className="italic text-sm">(senior manager)</Text>
          </View>
          <IcEdit />
        </View>
        {/*  COntact */}
        <View className="flex flex-row items-center gap-2 mt-4 text-gray-500">
          <IcPhone width={16} height={16} />
          <Text className="text-sm">+91 1234567890</Text>
        </View>
        <View className="flex flex-row items-center gap-2 mt-4 text-gray-500">
          <IcMail width={16} height={16} />
          <Text className="text-sm">praveen@gmail.com</Text>
        </View>
        <View className="flex flex-row items-center gap-2 mt-4 text-gray-500">
          <IcCalander width={16} height={16} />
          <Text className="text-sm">05th December 1988</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileContactCard;
