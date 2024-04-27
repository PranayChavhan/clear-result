import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
} from "react-native";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import Avatar02 from "../../assets/icons/avatar_02.svg";
import { Swipeable } from "react-native-gesture-handler";
import IcCloseX from "../../assets/icons/ic_close_x.svg";
import BgCorner from "../../assets/images/prospect_corner_bg.png";
import IcMore from "../../assets/icons/ic_vertical_dots.svg";
import Checkbox from "../ui/Checkbox";

const LeftSwipeActions = () => {
  return (
    <View className="flex items-center py-4">
      <View className="bg-green-500 flex-1 px-4 flex-row  flex items-center justify-center rounded-md ">
        <Text className="text-white text-center font-semibold px-8">
          Pravin's Task Completed!
        </Text>
        <IcCloseX />
      </View>
    </View>
  );
};
const rightSwipeActions = () => {
  return (
    <View className="flex items-center py-4">
      <View className="bg-amber-500 flex-1 px-4 flex-row  flex items-center justify-center rounded-md ">
        <Text className="text-white text-center font-semibold px-8">
          Rescheduling Task!
        </Text>
        <IcCloseX />
      </View>
    </View>
  );
};

const ProspectUserListItem = ({
  item,
  handleLeftSwipe,
  handleRightSwipe,
  bulk,
}) => {
  const swipeFromLeftOpen = () => {
    handleRightSwipe();
  };
  const swipeFromRightOpen = () => {
    handleLeftSwipe();
  };
  return (
    <Swipeable
      renderLeftActions={LeftSwipeActions}
      renderRightActions={rightSwipeActions}
      onSwipeableLeftOpen={swipeFromLeftOpen}
      onSwipeableRightOpen={swipeFromRightOpen}
    >
      <View className=" bg-white  shadow-sm m-2 border-gray-300 shadow-gray-500 rounded-xl ">
        <TouchableWithoutFeedback onPress={handleLeftSwipe}>
          <ImageBackground
            source={BgCorner}
            borderTopRightRadius={10}
            className="w-10 h-16 absolute top-0 right-0 rounded-tr-xl flex items-center pt-4"
          >
            <IcMore />
          </ImageBackground>
        </TouchableWithoutFeedback>
        <View className="py-6 rounded-lg p-2 flex-row items-center">
          {bulk ? <Checkbox /> : null}
          <Avatar02 width="64" height="64" />
          <View className="pl-2">
            <Text className="text-lg font-semibold">{item.name}</Text>
            <Text className="text-sm text-gray-400">{item.email}</Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default ProspectUserListItem;
