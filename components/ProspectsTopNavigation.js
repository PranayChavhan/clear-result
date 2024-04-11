import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IcPhone from "../assets/icons/ic_phone.svg";
import Avatar01 from "../assets/icons/avatar_01.svg";
import Avatar02 from "../assets/icons/avatar_02.svg";
import IcShop from "../assets/icons/ic_shop.svg";
import IcCalendar from "../assets/icons/ic_calendar.svg";
import IcMail from "../assets/icons/ic_mail.svg";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, {
  BottomSheetView,
  useBottomSheet,
} from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native";
import { FlatList, Swipeable } from "react-native-gesture-handler";
import ProspectUserListItem from "./dashboard/ProspectUserListItem";
import InputFeild from "./ui/InputFeild";
const Tab = createMaterialTopTabNavigator();

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Kia Doe",
    email: "kia@gmail.com",
  },
];

const ProspectsTopNavigation = ({ bulkDelete, bulkTransfer }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: "uppercase",
          flex: 1,
          width: "100",
        },
        tabBarPressColor: "#FFBF1A0D",
        indicatorStyle: {
          backgroundColor: "#2F80ED",
          width: 0.65,
          height: 4,
          marginBottom: -1,
        },
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: "auto", padding: 10 },
        scrollEnabled: false, // Set to false for horizontal scrolling
        tabBarStyle: {
          backgroundColor: "#fff9e9",
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#E1E1E1",
        },
      }}
    >
      <Tab.Screen
        name="To be contacted"
        children={() => (
          <UserDetailsTabView
            bulkDelete={bulkDelete}
            bulkTransfer={bulkTransfer}
          />
        )}
      />
      <Tab.Screen
        name="Pending Vist "
        children={() => (
          <UserDetailsTabView
            bulkDelete={bulkDelete}
            bulkTransfer={bulkTransfer}
          />
        )}
      />
      <Tab.Screen
        name="Pending"
        children={() => (
          <UserDetailsTabView
            bulkDelete={bulkDelete}
            bulkTransfer={bulkTransfer}
          />
        )}
      />
      <Tab.Screen
        name="Negotiation"
        children={() => (
          <UserDetailsTabView
            bulkDelete={bulkDelete}
            bulkTransfer={bulkTransfer}
          />
        )}
      />
      <Tab.Screen
        name="Inactive"
        children={() => (
          <UserDetailsTabView
            bulkDelete={bulkDelete}
            bulkTransfer={bulkTransfer}
          />
        )}
      />
    </Tab.Navigator>
  );
};

const UserDetailsTabView = ({ bulkTransfer, bulkDelete }) => {
  const snapPoints = useMemo(() => ["60%", "80%"], []);
  const resSnapPoints = useMemo(() => ["95%"], []);

  const [companyName, setCompanyName] = useState("");

  const navigation = useNavigation();
  const buttonsData = [
    { label: "Follow Ups", count: "02" },
    { label: "Pending Visits", count: "04" },
    { label: "Send Docs", count: "01" },
    { label: "Sample Text", count: "03" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const bottomSheetRef = useRef(null);
  const bottomSheetRescheduleRef = useRef(null);

  const toggleUserBottomSheet = () => {
    //toggle
    if (isVisible) {
      bottomSheetRef.current?.close();
      setIsVisible(false);
    } else {
      bottomSheetRef.current?.expand();
      setIsVisible(true);
    }
  };

  const toggleRecheduleBottomSheet = () => {
    //toggle
    if (isVisible) {
      bottomSheetRescheduleRef.current?.close();
      setIsVisible(false);
    } else {
      bottomSheetRescheduleRef.current?.expand();
      setIsVisible(true);
    }
  };

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View className="bg-gray-50 h-screen px-4 pt-4">
      <View className="flex border-amber-400 rounded-lg  flex-row   my-2 border text-amber-400 justify-between ">
        <View className="flex items-center flex-1 py-3">
          <Text className="text-sm text-amber-400">Today</Text>
        </View>
        <View className="flex-1 items-center border-x border-amber-300 py-3">
          <Text className="text-sm text-amber-400 flex-1 ">Tommorow</Text>
        </View>
        <View className="flex-1 items-center py-3">
          <Text className="text-sm text-amber-400">This Week</Text>
        </View>
      </View>

      {/* Bulk */}
      {bulkDelete && (
        <View className="p-2">
          <Text className="text-sm font-bold">Bulk Delete</Text>
          <Text className="text-sm text-gray-500">
            Select contacts which you want to delete
          </Text>
        </View>
      )}

      {bulkTransfer && (
        <View className="px-2 pb-3">
          <View className="py-2">
            <Text className="text-sm font-bold">Bulk Transfer</Text>
            <Text className="text-sm text-gray-500">
              Select contacts which you want to transfer
            </Text>
          </View>

          <InputFeild
            placeholder="Select & Search Person"
            value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>
      )}

      {/* Users */}

      <FlatList
        data={usersData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProspectUserListItem
            item={item}
            handleLeftSwipe={toggleRecheduleBottomSheet}
            handleRightSwipe={toggleUserBottomSheet}
            bulk={bulkDelete || bulkTransfer}
            toggle
          />
        )}
      />
      <View className="flex-row flex gap-3  mt-8">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateTask");
          }}
          className={`py-3 bg-white border-[1px] border-[#2F80ED] flex-1 rounded-xl`}
        >
          <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateTask");
          }}
          className={`py-3  border-[1px] border-[#2F80ED] bg-[#2F80ED] flex-1 rounded-xl`}
        >
          <Text className="text-[16px] font-semibold text-center text-white">
            Delete
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-[12px] italic text-[#828282] absolute bottom-[30%] left-[39%]">
        Powered by ClearResults
      </Text>

      {/* Create Seperate Bottom Sheet Later */}
      <BottomSheet
        snapPoints={snapPoints}
        enablePanDownToClose
        index={-1}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView
          style={styles.bottomSheet}
          className="shadow-md shadow-gray-400 p-8 px-16"
        >
          <View className="flex items-center justify-center p-3 gap-x-2 flex-row border-b border-gray-200 ">
            <Avatar02 width="48" height="48" />
            <Text className="text-lg font-semibold ">Kia Doe</Text>
          </View>

          <View className="flex items-center justify-start py-2 gap-x-2 flex-row">
            <IcPhone />
            <Text className="text-sm text-gray-600">+91 1234567890</Text>
          </View>

          <View className="flex items-center justify-start py-2 gap-x-2 flex-row">
            <IcMail />
            <Text className="text-sm text-gray-600">jhondoe@gmail.com </Text>
          </View>
          <View className="flex items-center justify-start py-2 gap-x-2 flex-row">
            <IcCalendar />
            <Text className="text-sm text-gray-600">Shopper Stop</Text>
          </View>
          <Text className="text-sm text-gray-600 pt-6">Last Interaction</Text>
          <View className="flex items-center justify-start gap-x-2 flex-row">
            <IcCalendar />
            <Text className="text-sm text-gray-600">01 April 2024</Text>
          </View>
          <Text className="text-sm text-gray-600 p-3">
            (Dummy text for comment) Think over UX for Login and Registration,
            create a flow using wireframes.
          </Text>
        </BottomSheetView>
      </BottomSheet>

      {/* Create Reschedule Bottom Sheet */}
      <BottomSheet
        snapPoints={resSnapPoints}
        index={-1}
        enablePanDownToClose
        ref={bottomSheetRescheduleRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView
          style={styles.bottomSheet}
          className="shadow-md shadow-gray-400  px-16"
        >
          <View className="border-b border-gray-300 flex pb-3  flex-row gap-x-2 items-center justify-center">
            <Avatar01 width="36" height="36" />
            <Text className="text-sm text-center font-semibold">
              Praveen Sharma
            </Text>
          </View>

          <View className="flex flex-row gap-x-1 py-4 items-center">
            <Text className="text-sm text-gray-500 ">
              Currently Assigned to:{" "}
            </Text>
            <Text className="text-lg text-gray-800">Rahul Sharma</Text>
          </View>
          <View className="">
            <Text className="text-[13px] font-medium text-[#828282] mb-2">
              Current Task
            </Text>
            <InputFeild
              placeholder="Follow up call"
              value={companyName}
              onChangeText={(text) => setCompanyName(text)}
              secureTextEntry={false}
            />
          </View>

          <View className="mt-4">
            <Text className="text-[13px] font-medium text-[#828282] mb-2">
              Transfer to
            </Text>
            <InputFeild
              placeholder="select & search Person"
              value={companyName}
              onChangeText={(text) => setCompanyName(text)}
              secureTextEntry={false}
            />
          </View>
          <View className="mt-4">
            <Text className="text-[13px] font-medium text-[#828282] mb-2">
              Date
            </Text>
            <InputFeild
              placeholder="Select Date"
              value={companyName}
              onChangeText={(text) => setCompanyName(text)}
              secureTextEntry={false}
            />
          </View>

          {/* Save and Discard */}

          <View className="flex-row flex gap-3  mt-3">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CreateTask");
              }}
              className={`py-3 bg-white border-[1px] border-[#2F80ED] flex-1 rounded-xl`}
            >
              <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
                Discard
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                bottomSheetRescheduleRef.current?.close();
              }}
              className={`py-3  border-[1px] border-[#2F80ED] bg-[#2F80ED] flex-1 rounded-xl`}
            >
              <Text className="text-[16px] font-semibold text-center text-white">
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: "white",
    padding: 16,
    height: "100%",
    shadowColor: "#c0c0c0",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default ProspectsTopNavigation;
