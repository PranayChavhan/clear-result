import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import HomeScreen from "../dashboard/HomeScreen";
import CrLogo from "../../assets/images/cr_logo.png";
import InputFeild from "../../components/ui/InputFeild";
import IcSearch from "../../assets/icons/ic_search.svg";
import UserListItem from "../../components/exhibition/UserListItem";
import ExhibitionCard from "../../components/exhibition/ExhibitionCard";
import IcCall from "../../assets/icons/ic_call.svg";
import IcCalendar from "../../assets/icons/ic_calendar.svg";
import Avatar02 from "../../assets/icons/avatar_02.svg";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  const [result, setResult] = useState("");

  const handleSearchChange = (e) => {
    //
    setSearch(e);
  };

  useEffect(() => {
    if (search.includes("Rahul")) {
      setResult("user");
      console.log("user");
    } else if (search.includes("Exhibi")) {
      setResult("exhibition");
      console.log("exhibition");
    } else if (search.includes("Task")) {
      setResult("task");
      console.log("task");
    }
  }, [search]);

  return (
    <Screen>
      <TopBar logo={CrLogo} />
      {/* Search Box */}
      <View>
        <View className="px-4 ">
          <Text className="py-2 text-gray-500">Search</Text>
          <View className="flex items-center bg-white flex-row border border-blue-300 rounded-md p-2  ">
            <View className="mr-2">
              <IcSearch />
            </View>
            <TextInput
              className="w-full"
              placeholder="search"
              value={search}
              onChangeText={(e) => handleSearchChange(e)}
            />
          </View>
        </View>
      </View>

      <View className="mt-4 px-4">
        {result === "user" ? (
          <UserListItem
            imageSource={require("../../assets/images/profile3.png")}
            name="Mohit Kale"
            email="kale.m@gmail.com"
            isChecked={false}
          />
        ) : result === "exhibition" ? (
          <ExhibitionCard
            name="Exhibition Name 1"
            startDate="23rd Oct 2023"
            endDate="25th Oct 2023"
            startTime="10:00am"
            endTime="1:00pm"
            link="InviteUser"
          />
        ) : (
          result === "task" && (
            <View className="border-[0.8px] border-gray-300 bg-white p-4 rounded-lg mb-4">
              <View className="flex flex-row items-start justify-between">
                <View>
                  <Text className="text-[18px] font-bold">
                    Follow up mode:Calling
                  </Text>
                  <Text className="text-[12px] italic text-[#828282] mt-1">
                    Rahul Shah : H&M
                  </Text>
                </View>
                <View>
                  <IcCall />
                </View>
              </View>

              <View className="flex flex-row items-center justify-between border-t-[0.8px] border-gray-300 mt-4 pt-1">
                <View className="flex flex-row items-center gap-1">
                  <IcCalendar />
                  <Text className="text-[14px] text-[#828282]">
                    Mon, 10 July 2022
                  </Text>
                </View>
                <View>
                  <Avatar02 />
                </View>
              </View>
            </View>
          )
        )}
      </View>
    </Screen>
  );
};

export default SearchScreen;
