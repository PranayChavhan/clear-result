import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useMemo, useState, useEffect } from "react";
import Screen from "../../components/ui/Screen";
import IcTemplate from "../../assets/icons/ic_template.svg";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import { Image } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";

import IcEdit from "../../assets/icons/ic_edit.svg";
import IcCopy from "../../assets/icons/ic_copy_sheet.svg";
import IcDownload from "../../assets/icons/ic_down_sheet.svg";
import IcShare from "../../assets/icons/ic_share_sheet.svg";
import IcCopyLink from "../../assets/icons/ic_copy_link.svg";
import IcTrash from "../../assets/icons/ic_trash_sheet.svg";

const TemplateScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const [bottomSheetIndex, setBottomSheetIndex] = useState(-1);

  const bottomSheetRef = useRef(null);

  const [bottomSheetModal, setBottomSheetModal] = useState(false);

  const navigation = useNavigation();

  //open bottom sheet
  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
    setBottomSheetModal(true);
  };

  return (
    <>

    <Screen>
      <TopBar logo={CrLogo} />
      <ScrollView>
        <View className="flex flex-row gap-x-2 items-center px-6 py-4 ">
          <IcTemplate />
          <Text className="text-md font-medium">Templates for You</Text>
        </View>
        <View className="py-8">
          <TouchableOpacity onPress={openBottomSheet}>
            <View className="flex items-center justify-center flex-row max-h-[150px] object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-1.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-2.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={openBottomSheet}>
            <View className="flex items-center justify-center flex-row max-h-[150px] object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-3.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-4.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={openBottomSheet}>
            <View className="flex items-center justify-center flex-row max-h-[150px] object-contain">
              <Image
                className="flex-1 object-contain m-1"
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-5.png")}
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain" }}
                source={require("../../assets/images/posts/Post-6.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* Bottom Sheet  */}
      </ScrollView>
      </Screen>

      <BottomSheet
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        ref={bottomSheetRef}
        onChange={(index) => setBottomSheetIndex(index)}
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
          <View className="flex flex-col justify-center py-3 px-4 border-b border-gray-200 ">
            <Text className="text-lg font-semibold ">
              New Collection Poster
            </Text>
            <Text className="text-gray-400">
              Poster | Edited 37 Minutes Ago
            </Text>
          </View>
          {/* Options */}
          <View className="px-4">
            <TouchableOpacity
              onPress={() => navigation.navigate("EditTemplate")}
            >
              <View className="flex flex-row gap-x-2 items-center py-4">
                <IcEdit />
                <Text className="text-md font-medium">Edit Design</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="flex flex-row gap-x-2 items-center py-4">
                <IcCopy />
                <Text className="text-md font-medium">Make a Copy</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="flex flex-row gap-x-2 items-center py-4">
                <IcDownload />
                <Text className="text-md font-medium">Download</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="flex flex-row gap-x-2 items-center py-4">
                <IcShare />
                <Text className="text-md font-medium">Share</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="flex flex-row gap-x-2 items-center py-4">
                <IcCopyLink />
                <Text className="text-md font-medium">Copy Link</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="flex flex-row gap-x-2 items-center py-4">
                <IcTrash />
                <Text className="text-md font-medium">Move To Trash</Text>
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
</>
  );
};

//

export default TemplateScreen;
