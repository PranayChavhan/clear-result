import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import ShopCard from "../../components/exhibition/ShopCard";
import ShopSliderNavigartion from "../../components/exhibition/ShopSliderNavigartion";
import TasksTabs from "../../components/exhibition/TasksTabs";
import IcClipPurple from "../../assets/icons/ic_clip_purple.svg";
import IcDoc from "../../assets/icons/ic_doc.svg";

import IcAttachment from "../../assets/icons/ic_attach.svg";
import BottomSheet, {
  BottomSheetView,
  useBottomSheet,
} from "@gorhom/bottom-sheet";
import InputFeild from "../../components/ui/InputFeild";
import Button from "../../components/ui/Button";
import SuccessToast from "../../components/SuccessToast";

const ShopProfileScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const snapPoints = useMemo(() => ["65%"], []);

  const [bottomSheetModal, setBottomSheetModal] = useState(false);
  const [bottomCancelSheetModal, setBottomCancelSheetModal] = useState(false);

  const bottomSheetRef = useRef(null);

  const bottomCancelSheetRef = useRef(null);


  const [notification, setNotification] = useState("");

  useEffect(() => {
    bottomSheetRef.current?.close();
    bottomCancelSheetRef.current?.close();
  }, []);

  const toggleDueTaskBottomSheet = () => {
    //toggle
    bottomSheetRef.current?.expand();
    setBottomSheetModal(true);
  };

  const openBottomCancelSheet = () => {
    //toggle
    bottomCancelSheetRef.current?.expand();
    bottomSheetRef.current?.close();
    setBottomSheetModal(false);
    setBottomCancelSheetModal(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setNotification("");
    }, 3000);
  }
  , [notification]);


  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <>
      <Screen className="bg-white">
        <TopBar logo={CrLogo} />

        <ScrollView
          contentContainerStyle={{ paddingBottom: 180 }}
          showsVerticalScrollIndicator={false}
          className="px-4 py-4"
        >

          
          {notification!="" && <SuccessToast text={notification} onPress={()=>setNotification("")} />}
          <ShopCard />

          <ShopSliderNavigartion clickItemTask={toggleDueTaskBottomSheet} />

          <TasksTabs clickDueTask={toggleDueTaskBottomSheet} />

          <View className="bg-white border-[0.2px] border-gray-200 rounded-b-lg shadow-2xl p-2 px-4 mt-8 rounded-md">
            <View className="flex flex-row items-center gap-2">
              <IcDoc />
              <Text className="text-[14px] font-bold">Documents</Text>
            </View>

            <View className="flex flex-row items-center p-2 border-[0.8px] rounded-xl my-4 border-gray-400">
              <IcAttachment />
              <View className="ml-3">
                <Text className="font-bold">whatsapp invite</Text>
                <Text className="text-gray-400">10 MB PNG</Text>
              </View>
            </View>

            <View className="flex flex-row items-center p-2 border-[0.8px] rounded-xl mb-4 border-gray-400">
              <IcAttachment />
              <View className="ml-3">
                <Text className="font-bold">whatsapp invite</Text>
                <Text className="text-gray-400">10 MB PNG</Text>
              </View>
            </View>
          </View>

          <Text className="text-[12px] italic text-[#828282] absolute bottom-[12%] left-[33%]">
            Powered by ClearResults
          </Text>
        </ScrollView>

        {/* Bottom Sheet */}
      </Screen>
      <BottomSheet
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        onClose={() => setBottomSheetModal(false)}
        backdropComponent={({ style }) =>
          bottomSheetModal && (
            <View style={[style, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]} />
          )
        }
      >
        <BottomSheetView
          className="shadow-md bg-amber-50 shadow-gray-400 z-50 p-8"
          style={{ paddingHorizontal: 12 }}
        >
          <View className="flex items-center justify-center p-3 gap-x-2 flex-row border-b border-gray-200 ">
            <Text className="text-lg font-semibold ">Due Task</Text>
          </View>

          <View className="flex items-center justify-start py-2 gap-x-2 flex-row">
            <Image
              source={require("../../assets/images/img.png")}
              className="rounded-full w-10 h-10"
            />
            <Text className="text-sm text-gray-600">Praveen Sharma</Text>
          </View>

          <View className="p-4 border border-gray-300 rounded-2xl ">
            <Text className="font-medium">Email Invite Template</Text>
            <Text className="text-gray-400">
              Hope You are doing well this email is...
            </Text>
            <View className="flex flex-row items-center gap-x-2 py-2">
              <View className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <IcClipPurple />
              </View>
              <Text className="text-xs text-gray-400 ">Attach for invite</Text>
            </View>
          </View>
          {/* Input  */}

          <View className="mt-4">
            <Text className="text-[13px] font-medium text-[#828282] mb-2">
              Email Address
            </Text>
            <InputFeild
              placeholder="Enter the email address"
              secureTextEntry={false}
            />
          </View>

          <View className="mt-4 flex flex-row items-center justify-between">
            <Button
              varient="primary"
              onPress={() => {
                setNotification("Email has been successfully sent to Praveen!")
                bottomSheetRef.current.close();

              }}
            >
              Send
            </Button>
            <Button
              onPress={openBottomCancelSheet}
              varient="outline"
            >
              Discard
            </Button>
          </View>
        </BottomSheetView>
      </BottomSheet>

      <BottomSheet
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose
        ref={bottomCancelSheetRef}
        onChange={handleSheetChanges}
        onClose={() => setBottomCancelSheetModal(false)}
        backdropComponent={({ style }) =>
          bottomCancelSheetModal && (
            <View style={[style, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]} />
          )
        }
      >
        <BottomSheetView style={{ paddingHorizontal: 12 }}>
          <View className="flex items-center justify-center p-3 gap-x-2 flex-row border-b border-gray-200 ">
            <Text className="text-lg font-semibold ">Cancelling Task</Text>
          </View>
          {/* Input  */}

          <View className="flex items-center mt-2 flex-row">
            <Text className="text-gray-500 text-xs"> Current Task:</Text>
            <Text className="text-gray-800 text-sm ml-2">Follow Up (Call)</Text>
          </View>
          <View className="mt-4">
            <Text className="text-[13px] font-medium text-[#828282] mb-2">
              Reschedule Task Dates
            </Text>
            <InputFeild placeholder="Oct 10, 2023" secureTextEntry={false} />
          </View>
          {/* Input  */}
          <View className="mt-4">
            <Text className="text-[13px] font-medium text-[#828282] mb-2">
              Add Comments/Notes
            </Text>
            <InputFeild
              placeholder="The Lead Ask to contact in few days"
              secureTextEntry={false}
            />
          </View>
          {/* Input  */}
          <View className="mt-4">
            <Text className="text-[13px] font-medium text-[#828282] mb-2">
              Transfer To
            </Text>
            <InputFeild
              placeholder="Search and Select Person"
              secureTextEntry={false}
            />
          </View>

          <View className="mt-4 flex flex-row items-center justify-between">
            <Button varient="primary" onPress={()=>{
              setNotification("Praveen’s task rescheduled & transferred to Amit!");
              bottomCancelSheetRef.current.close();
            }}>Send</Button>
            <Button
              onPress={() => bottomCancelSheetRef.current.close()}
              varient="outline"
            >
              Discard
            </Button>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default ShopProfileScreen;
