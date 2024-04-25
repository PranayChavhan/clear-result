import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcMore from "../../assets/icons/ic_exhibition.svg";
import IcFilter from "../../assets/icons/ic_filter.svg";
import Checkbox from "../../components/ui/Checkbox";
import { useNavigation } from "@react-navigation/native";
import IcSearch from "../../assets/icons/ic_search.svg";
import UserListItem from "../../components/exhibition/UserListItem";


const InviteUserScreen = () => {
  const navigation = useNavigation();


  
  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        className=""
      >
        <View className="my-4">
          <View className=" flex flex-row items-center justify-between px-4">
           
                <View className="flex flex-row items-center gap-4">
                  <IcMore />
                  <Text className="text-[18px] font-[500]">
                    Exhibition Master
                  </Text>
                </View>
          

            <TouchableOpacity
              onPress={()=>navigation.navigate("ExhibitionFilter")}
              style={{
                backgroundColor: "#FFF6DE" ,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 5,
              }}
            >
              <IcFilter />
            </TouchableOpacity>
          </View>
              <View className="px-4">
                <UserListItem
                  imageSource={require("../../assets/images/profile1.png")}
                  name="Praveen Sharma"
                  email="praveens@gmail.com"
                  isChecked={true}
                />

                <UserListItem
                  imageSource={require("../../assets/images/profile2.png")}
                  name="Ananya Gupta"
                  email="agupta@gmail.com"
                  isChecked={true}
                />

                <UserListItem
                  imageSource={require("../../assets/images/profile3.png")}
                  name="Rahul Shah"
                  email="rahulshah@gmail.com"
                  isChecked={true}
                />

                <UserListItem
                  imageSource={require("../../assets/images/profile4.png")}
                  name="Mohit Kale"
                  email="kale.m@gmail.com"
                  isChecked={true}
                />

                <UserListItem
                  imageSource={require("../../assets/images/profile5.png")}
                  name="Ritika Agrawal"
                  email="agrawalriti@gmail.com"
                  isChecked={true}
                />

                <UserListItem
                  imageSource={require("../../assets/images/profile6.png")}
                  name="Reena Desai"
                  email="agrawalriti@gmail.com"
                  isChecked={true}
                />

                <View className="mt-10 flex flex-row items-center justify-between">
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className={`py-3 bg-white border-[1px] w-[48%] border-[#2F80ED]  rounded-xl`}
                  >
                    <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
                      Discard
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ExhibitionDetails");
                    }}
                    className={`py-3  w-[48%]  bg-[#2F80ED]  rounded-xl`}
                  >
                    <Text className="text-[16px] font-semibold text-center text-white">
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>

                <View className="flex flex-col items-center justify-center mt-4">
                  <TouchableWithoutFeedback>
                    <Text
                      className={`text-[16px] font-medium text-[#2F80ED] underline`}
                    >
                      Save & Create New
                    </Text>
                  </TouchableWithoutFeedback>

                  <Text className="text-[12px] italic text-[#828282] mt-8">
                    Powered by ClearResults
                  </Text>
                </View>
              </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default InviteUserScreen;
