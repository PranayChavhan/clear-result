import { StyleSheet, Text, TextInput, View } from "react-native";
import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Screen from "../../components/ui/Screen";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcSearch from "../../assets/icons/ic_search.svg";
import SupportCard from "../../components/SupportCard";
import Button from "../../components/ui/Button";
import IcAttachGray from "../../assets/icons/ic_attach_gray.svg";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import NotificationCard from "../../components/NotificationCard";
import SuccessToast from "../../components/SuccessToast";

const faqs = [
  {
    question: "How does it benefit post-exhibition experiences?",
    answer:
      "It allows you to track leads generated during exhibitions, manage tasks related to follow-ups, and analyze social media interactions with potential clients.",
  },
  {
    question: "How can I add leads to the CRM app?",
    answer:
      "You can add leads to the CRM app to track generated leads, manage follow-up tasks, and analyze social media interactions with potential clients.",
  },
  {
    question: "How does the CRM app help analyze post-exhibition performance?",
    answer:
      "The CRM app helps analyze post-exhibition performance by tracking leads, managing follow-up tasks, and analyzing social media interactions with potential clients.",
  },
  {
    question:
      "What types of tasks can I manage in the app for post-exhibition follow ups?",
    answer:
      "In the app, you can manage tasks such as follow-up calls, emails, scheduling meetings, updating contact information, and analyzing social media interactions.",
  },
];

const SupportScreen = () => {
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(-1);

  const [bottomResSheetModal, setBottomResSheetModal] = useState(false);

  const snapPoints = useMemo(() => ["50%","85%"], []);

  const bottomSheetRef = useRef(null);

  const [notification, setNotification] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e);
  };

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
    setBottomResSheetModal(true);
  };

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleClick = (index) => {
    if (index == open) {
      setOpen(-1);
      return;
    }
    setOpen(index);
  };

  useEffect(() => {
    setTimeout(() => {
      setNotification("");
    }, 3000);
  }, [notification]);
  

  return (
    <>
      <Screen className="bg-white">
        <TopBar logo={CrLogo} />

        {
          notification!="" && (
            <SuccessToast text={notification} onPress={() => setNotification("")} />
          )
        }

        <View className="">
          <ScrollView>
            <View className="p-4">
              <Text className="text-lg font-medium">Help & Support</Text>
            </View>

            <View className="p-4 rounded-lg bg-blue-50 mx-4 flex justify-center items-center">
              <Text className="text-xs mb-2 font-medium">FAQ's</Text>
              <Text className="text-lg mt-2 text-center">
                Have any questions? We're here to assist you
              </Text>
              <View className="flex items-center bg-white flex-row shadow-gray-200 m-4 shadow-sm rounded-md p-2  ">
                <View className="mr-2">
                  <IcSearch />
                </View>
                <TextInput
                  className="w-full"
                  placeholder="Search Here"
                  value={search}
                  onChangeText={(e) => handleSearchChange(e)}
                />
              </View>
            </View>
            <View className="">
              {faqs.map((faq, index) => (
                <SupportCard
                  key={index}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  open={index == open}
                  handleClick={() => handleClick(index)}
                />
              ))}
            </View>

            <View className="p-4">
              <Button onPress={openBottomSheet} varient={"outline"}>
                Create Support Ticket
              </Button>
            </View>

            <View className="mb-32 mt-12">
              <Text className="text-gray-400 text-center italic text-sm text-light">
                Powered By ClearResult
              </Text>
            </View>
          </ScrollView>
        </View>
      </Screen>
      <BottomSheet
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        onClose={() => setBottomResSheetModal(false)}
        backdropComponent={({ style }) =>
          bottomResSheetModal && (
            <View style={[style, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]} />
          )
        }
      >
        <BottomSheetView
          style={styles.bottomSheet}
          className="shadow-md shadow-gray-400  px-16"
        >
          <View className="bg-white px-4">
            <View className="border-b border-gray-300 flex items-center p-2">
              <Text className="text-lg font-medium">Create Support Ticket</Text>
            </View>
            <View className="mt-4">
              <Text className="text-xs text-gray-500 py-2">Ticket Title</Text>
              <TextInput
                placeholder="Subject"
                className="border border-blue-400 p-2 rounded-lg"
              />
            </View>
            <View className="mt-4">
              <Text className="text-xs text-gray-500 py-2">Description</Text>

              <TextInput
                placeholder="Enter Ticket Description here"
                multiline
                numberOfLines={4}
                className="border border-blue-400 p-3 rounded-lg"
                style={{ textAlignVertical: "top" }}
              />
            </View>
            <View className="mt-4">
              <IcAttachGray />
            </View>
            <View className=" flex flex-row items-center gap-2 mt-4">
              <Button
                varient={"outline"}
                onPress={() => {
                    bottomSheetRef.current?.close();
                    setBottomResSheetModal(false);
                  }}
              >
                Discard
              </Button>
              <Button
                varient={"primary"}
                onPress={() => {
                  bottomSheetRef.current?.close();
                  setNotification("You have successfully created a support ticket and raised the issue.")
                  setBottomResSheetModal(false);
                }}
              >
                Save
              </Button>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: "white",
    height: "100%",
    shadowColor: "#c0c0c0",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
export default SupportScreen;
