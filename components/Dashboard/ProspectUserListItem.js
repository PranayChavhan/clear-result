import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
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
import BottomSheet, {
  BottomSheetView,
  useBottomSheet,
} from "@gorhom/bottom-sheet";
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

const ProspectUserListItem = ({ item, handleLeftSwipe, handleRightSwipe }) => {
  const swipeFromLeftOpen = () => {
    toggleBottomSheet();
  };
  const swipeFromRightOpen = () => {
    toggleBottomSheet();
  };
  return (
    <Swipeable
      renderLeftActions={LeftSwipeActions}
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={handleLeftSwipe}
      onSwipeableLeftOpen={handleRightSwipe}
    >
      <View className=" bg-white  shadow-sm m-2 border-gray-300 shadow-gray-500 rounded-xl ">
        <View className="py-6 rounded-lg p-2 flex-row items-center gap-x-3">
          <Avatar02 width="64" height="64" />
          <View>
            <Text className="text-lg font-semibold">{item.name}</Text>
            <Text className="text-sm text-gray-400">{item.email}</Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default ProspectUserListItem;
