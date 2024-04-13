import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import IcFilter from "../assets/icons/ic_filter.svg";
import IcContact from "../assets/icons/ic_contact_orange.svg";
import IcBadge from "../assets/icons/ic_badge_orange.svg";
import IcBoard from "../assets/icons/ic_board_orange.svg";
import IcBlock from "../assets/icons/ic_block_orange.svg";
import IcWin from "../assets/icons/ic_win_orange.svg";
import IcClose from "../assets/icons/ic_close_orange.svg";
import SubscriptionStatBox from "./SubscriptionStatBox";

const SubscriptionCard = ({ type }) => {
  const { width, height } = Dimensions.get("window");
  const navigator = useNavigation();

  const handleOpenProspects = () => {
    console.log("Open Prospects");
    navigator.navigate("Prospects");
  };
  return (
    <View style={{width:Dimensions.get("window").width-28, paddingEnd:10, paddingVertical:5}}>
      <View className="p-4 rounded-3xl bg-orange-100 h-auto flex flex-col overflow-hidden">
        {/* Title */}
        <View>
          <Text
            className={"text-xl font-semibold "}
            style={{
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {type}
          </Text>
          <Text
            className={"text-sm font-semibold"}
            style={{
              fontFamily: "Poppins-Regular",
            }}
          >
            View prospect status list for interacting
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={handleOpenProspects}>
          <ImageBackground
            source={require("../assets/images/bg-filter-card.png")}
            resizeMode="cover"
            className={`absolute h-16 right-0  p-4 rounded-tr-3xl`}
          >
            <IcFilter />
          </ImageBackground>
        </TouchableWithoutFeedback>

        {/* Grid */}

        <View className="flex flex-col gap-x-2 mt-2">
          <View className="flex flex-row  justify-between items-center">
            {/* Status Items */}
            <SubscriptionStatBox
              title="55"
              desc="Total"
              logo={<IcContact width="24" height="24" />}
            />
            <SubscriptionStatBox
              title="07"
              desc="Pending Visit"
              logo={<IcBoard width="24" height="24" />}
            />
          </View>

          <View className="flex flex-row  justify-between items-center">
            {/* Status Items */}
            <SubscriptionStatBox
              title="05"
              desc="Negotiation"
              logo={<IcBadge width="24" height="24" />}
            />
            <SubscriptionStatBox
              title="12"
              desc="InActive"
              logo={<IcBlock width="24" height="24" />}
            />
          </View>
          <View className="flex flex-row  justify-between items-center">
            {/* Status Items */}
            <SubscriptionStatBox
              title="15"
              desc="Win"
              logo={<IcWin width="24" height="24" />}
            />
            <SubscriptionStatBox
              title="06"
              desc="Closed"
              logo={<IcClose width="24" height="24" />}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SubscriptionCard;
