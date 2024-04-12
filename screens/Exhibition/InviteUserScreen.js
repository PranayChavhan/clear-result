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

const Filter = () => {
  const [activeButton, setActiveButton] = useState(0);
  const items = [
    { label: "Location", value: "Task Type" },
    { label: "Designation", value: "Store/Company" },
  ];
  return (
    <View className="bg-white pt-4">
      <View className="flex flex-row">
        <View className="w-[35%]">
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setActiveButton(index);
              }}
              style={{
                backgroundColor: activeButton === index ? "white" : "#F8F8F8",
                padding: 20,
                paddingVertical: 26,
                borderBottomWidth: index > 0 ? 0.8 : 0,
                borderTopWidth: index > 0 ? 0.8 : 0,
                borderColor: "#E1E1E1",
              }}
            >
              <Text className="text-center w-full text-[12px] font-medium">
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="w-full px-4">
          {activeButton === 0 ? <Location /> : null}
          {activeButton === 1 ? <Designation /> : null}
        </View>
      </View>
      {/*   
        <Text className="text-[12px] italic text-[#828282] ">
          Powered by ClearResults
        </Text> */}
    </View>
  );
};

const Location = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text className="text-[12px] font-bold text-[#828282]">
        Search States
      </Text>
      <View className="w-56 mb-6 mt-2 flex flex-row items-center border border-blue-300 p-2 rounded-lg">
        <View className="mr-2">
          <IcSearch />
        </View>
        <TextInput className=" " placeholder="Search state" />
      </View>

      <Text className="text-[12px] font-bold text-[#828282]">States</Text>

      <Checkbox label="Maharashtra" />
      <Checkbox label="Gujarat" />
      <Checkbox label="Madhya Pradesh" />
      <Checkbox label="West Bengal" />

      <Text className="text-[12px] font-bold text-[#828282] mt-6">City</Text>

      <Checkbox label="Mumbai" />
      <Checkbox label="Pune" />
      <Checkbox label="Nagpur" />
      <Checkbox label="Indore" />
      <Checkbox label="Bhopal" />
      <Checkbox label="Kalkata" />

      <View className=" flex flex-row items-center gap-2 mt-4">
        <TouchableOpacity
          className={`py-3 bg-white border-[1px] w-[29%] border-[#2F80ED]  rounded-xl`}
        >
          <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
            Discard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SubscriptionPackages");
          }}
          className={`py-3  w-[29%]  bg-[#2F80ED]  rounded-xl`}
        >
          <Text className="text-[16px] font-semibold text-center text-white">
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Designation = () => {
  return (
    <View>
      <Text className="text-[12px] font-bold text-[#828282]">Types</Text>

      <Checkbox label="Follow Up" />
      <Checkbox label="Pending Visits" />
      <Checkbox label="Send Docs" />
      <Checkbox label="Sample Tasks" />

      <Text className="text-[12px] font-bold text-[#828282] mt-6">
        Sub-task Types
      </Text>

      <Checkbox label="Call" />
      <Checkbox label="Mail" />
      <Checkbox label="Message" />
      <Checkbox label="Brochures" />
      <Checkbox label="Catalogue" />
      <Checkbox label="Invites" />
    </View>
  );
};

const InviteUserScreen = () => {
  const navigation = useNavigation();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const handleFilterScreen = () => {
    if (isFilterVisible === false) {
      setIsFilterVisible(true);
    } else {
      setIsFilterVisible(false);
    }
  };
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
            {isFilterVisible ? (
              <>
                <Text className="text-[18px] font-[500]">Invitees Filters</Text>
              </>
            ) : (
              <>
                <View className="flex flex-row items-center gap-4">
                  <IcMore />
                  <Text className="text-[18px] font-[500]">
                    Exhibition Master
                  </Text>
                </View>
              </>
            )}

            <TouchableOpacity
              onPress={handleFilterScreen}
              style={{
                backgroundColor: isFilterVisible ? "#FFF6DE" : "white",
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

          {isFilterVisible ? (
            <>
              <Filter />
            </>
          ) : (
            <>
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
            </>
          )}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default InviteUserScreen;
