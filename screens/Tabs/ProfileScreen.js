import { Text, ScrollView, View, Image } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import TopBar from "../../components/TopBar";
import ProfileContactCard from "../../components/profile/ProfileContactCard";
import ProfileSettingsCard from "../../components/profile/ProfileSettingsCard";
import IcTheme from "../../assets/icons/ic_set_theme.svg";
import IcFonts from "../../assets/icons/ic_set_fonts.svg";
import IcLanguage from "../../assets/icons/ic_set_language.svg";
import IcNotification from "../../assets/icons/ic_set_notification.svg";
import IcSms from "../../assets/icons/ic_set_sms.svg";
import IcEmail from "../../assets/icons/ic_set_email.svg";

import IcAdditional from "../../assets/icons/ic_set_additional.svg";

const settings1 = [
  {
    title: "Theme",
    desc: "Theme our wa fora ersonalized touch",
    icon: <IcTheme style={{ width: 20, height: 20 }} />,
    nav: "Theme",
  },
  {
    title: "Fonts",
    desc: "Style your app with the perfect font",
    icon: <IcFonts style={{ width: 20, height: 20 }} />,
    nav: "Fonts",
  },
  {
    title: "Language",
    desc: "Speak Your language, personalise your experience",
    icon: <IcLanguage style={{ width: 20, height: 20 }} />,
    nav: "Language",
  },
];
const settings2 = [
  {
    title: "Push Notification",
    desc: "Stay in loop - tailor your notifications, your way",
    icon: <IcNotification style={{ width: 20, height: 20 }} />,
    nav: "PushNotification",
  },
  {
    title: "SMS Gateway",
    desc: "Text your way customize SMS prefrences only",
    icon: <IcSms style={{ width: 20, height: 20 }} />,
    nav: "SMSGateway",
  },
  {
    title: "Email Setup",
    desc: "Speak Your language, personalise your experience",
    icon: <IcEmail style={{ width: 20, height: 20 }} />,
    nav: "EmailSetup",
  },
];

const settings3 = [
  {
    title: "Additional Settings",
    desc: "Personalised configurations at your fingertips",
    icon: <IcAdditional style={{ width: 20, height: 20 }} />,
  },
];

const ProfileScreen = () => {
  return (
    <Screen className={`bg-gray-100`}>
      <TopBar />
      <ScrollView>
        {/* Profile Card */}
        <ProfileContactCard />

        {/* Settings Card */}
        <ProfileSettingsCard data={settings1} />

        {/* Settings Card */}
        <ProfileSettingsCard data={settings2} />
        <ProfileSettingsCard data={settings3} />
        <View className="h-32"></View>
      </ScrollView>
    </Screen>
  );
};

export default ProfileScreen;
