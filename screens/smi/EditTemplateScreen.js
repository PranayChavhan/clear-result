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

import IcDesign from "../../assets/icons/ic_ed_design.svg";
import IcFont from "../../assets/icons/ic_ed_font.svg";
import IcUpload from "../../assets/icons/ic_ed_upload.svg";
import IcShare from "../../assets/icons/ic_ed_share.svg";

import IcArrowBack from "../../assets/icons/ic_arrowback_round.svg";
import IcArrowFront from "../../assets/icons/ic_arrowfront_round.svg";
import Button from "../../components/ui/Button";

const EditTemplateScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const snapPoints = useMemo(() => ["25%", "70%"], []);
  const textSnapPoints = useMemo(() => ["30%"], []);
  const shareSnapPoints = useMemo(() => ["45%"], []);

  const designSheetRef = useRef(null);

  const textSheetRef = useRef(null);

  const shareSheetRef = useRef(null);

  const navigation = useNavigation();

  //open bottom sheet
  const openDesignSheet = () => {
    designSheetRef.current?.expand();
  };

  const openTextSheet = () => {
    textSheetRef.current?.expand();
  };

  return (
    <Screen>
      <TopBar logo={CrLogo} />
      <ScrollView className="h-full">
        <View className="flex items-start p-4">
          <View className="p-2 rounded-lg bg-gray-200 flex flex-row ">
            <TouchableOpacity className="px-2">
              <IcArrowBack />
            </TouchableOpacity>
            <TouchableOpacity className="px-2">
              <IcArrowFront />
            </TouchableOpacity>
          </View>
        </View>

        {/* Post */}
        <View className="py-8  flex items-center ">
          <Image
            source={require("../../assets/images/social_post.png")}
            style={{
              height: Dimensions.get("window").height / 2,
              width: "80%",
            }}
            resizeMode="contain"
          />
        </View>

        {/* Bottom menu */}
        <View className="flex mt-36 flex-row justify-between px-4 py-4 bg-blue-50">
          <TouchableOpacity onPress={openDesignSheet}>
            <View className="flex items-center justify-center flex-col">
              <IcDesign />
              <Text className="text-sm mt-2">Designs</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={openTextSheet}>
            <View className="flex items-center justify-center flex-col">
              <IcFont />
              <Text className="text-sm mt-2">Text</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex items-center justify-center flex-col">
              <IcUpload />
              <Text className="text-sm mt-2">Upload</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => shareSheetRef?.current?.expand()}>
            <View className="flex items-center justify-center flex-col">
              <IcShare />
              <Text className="text-sm mt-2">Share</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Bottom Sheet  */}
      </ScrollView>

      {/* Design Bottom Sheet */}
      <BottomSheet
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        ref={designSheetRef}
      >
        <BottomSheetView
          className="shadow-md bg-amber-50 shadow-gray-400 z-50 p-8"
          style={{ paddingHorizontal: 12 }}
        >
          <View className="flex flex-col justify-center py-3 px-4 mb-3 border-b border-gray-200 ">
            <Text className="text-lg font-semibold  text-center">Design</Text>
          </View>
          {/* Options */}
          <TouchableOpacity>
            <View className="flex items-center gap-x-10 px-6 justify-center flex-row  object-contain">
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 120 }}
                source={require("../../assets/images/designs/design_1.png")}
                resizeMode="contain"
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 120 }}
                source={require("../../assets/images/designs/design_2.png")}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex items-center my-4 gap-x-10 px-6 justify-center flex-row  object-contain">
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 120 }}
                source={require("../../assets/images/designs/design_4.png")}
                resizeMode="contain"
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 120 }}
                source={require("../../assets/images/designs/design_6.png")}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex items-center my-4 gap-x-10 px-6 justify-center flex-row  object-contain">
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 120 }}
                source={require("../../assets/images/designs/design_3.png")}
                resizeMode="contain"
              />
              <Image
                className="flex-1 object-contain m-1 "
                style={{ objectFit: "contain", height: 120 }}
                source={require("../../assets/images/designs/design_4.png")}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>

      {/* Text Bottom Sheet */}
      <BottomSheet
        index={-1}
        snapPoints={textSnapPoints}
        enablePanDownToClose
        ref={textSheetRef}
      >
        <BottomSheetView
          className="shadow-md bg-amber-50 shadow-gray-400 z-50 p-8"
          style={{ paddingHorizontal: 12 }}
        >
          <View className="flex flex-col justify-center py-3 px-4 mb-3 border-b border-gray-200 ">
            <Text className="text-lg font-semibold  text-center">Text</Text>
          </View>

          <TouchableOpacity
            onPress={() => textSheetRef.current?.close()}
            className={`py-3 border-[1px]  mx-1 border-[#2F80ED] bg-[#2F80ED] rounded-xl `}
          >
            <Text
              className={`text-sm font-semibold text-center
                text-white
              `}
            >
              Add a Text Box
            </Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>

      {/* Share bottom Sheet */}
      <BottomSheet
        index={-1}
        snapPoints={shareSnapPoints}
        enablePanDownToClose
        ref={shareSheetRef}
      >
        <BottomSheetView
          className="shadow-md bg-amber-50 shadow-gray-400 z-50 p-8"
          style={{ paddingHorizontal: 12 }}
        >
          <View className="flex flex-col justify-center py-3 px-4 mb-3 border-b border-gray-200 ">
            <Text className="text-lg font-semibold  text-center">
              Share a Post
            </Text>
          </View>

          <View className="px-4">
            <Image
              source={require("../../assets/images/social_share.png")}
              className="w-full mb-4 "
              style={{
                height: Dimensions.get("screen").width * (9 / 16) + 12,
              }}
              resizeMode="contain"
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </Screen>
  );
};

//

export default EditTemplateScreen;
