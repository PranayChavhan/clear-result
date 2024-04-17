import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import { ScrollView } from "react-native-gesture-handler";
import NotificationCard from "../../components/NotificationCard";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcTask from "../../assets/icons/active_tasks.svg";
import IcExhibition from "../../assets/icons/ic_exhibition.svg";
import IcNotification from "../../assets/icons/ic_bell.svg";


const notifications = [
  {
    title: "New task added!",
    description: "A follow up task for Praveen Sharma has been added!",
    time: "2 days ago",
    icon: <IcTask width={24} height={24} />,
  },
  {
    title: "In Explore the new Exhibition!",
    description: "There is a new exhibition happening in your city.",
    time: "6 days ago",
    icon: <IcExhibition width={24} height={24} />,
  },
  {
    title: "A Task Reminder!",
    description: "Follow up email to Rahul Shah by tomorrow.",
    time: "9 days ago",
    icon: <IcExhibition width={24} height={24} />,

  },
  {
    title: "Its Rahul Shah's Birthday!",
    description: "Wish Rahul Shah today, it's his Birthday.",
    time: "1 hour ago",
    icon: <IcNotification width={24} height={24} />,
  },
  {
    title: "Rahul Shah's Anniversary",
    description: "Wish Rahul Shah, it's his anniversary today.",
    time: "10 mins ago",
    icon: <IcNotification width={24} height={24} />,
  },
  {
    title: "Subscription Renewal",
    description: "It's time to Renew your Subscription plan",
    time: "8 mins ago",
    icon: <IcNotification width={24} height={24} />,
  },
  {
    title: "Lead attended Exhibition",
    description: "Rahul Shah, your lead has attended the exhibition",
    time: "5 mins ago",
    icon: <IcNotification width={24} height={24} />,
  },
];

const NotificationScreen = () => {
  return (
    <Screen className="bg-white">
        <TopBar logo={CrLogo}/>
      <ScrollView>
        <View className="p-4">
          <Text className="text-lg font-medium">Notifications</Text>
        </View>
        {
            notifications.map((notification, index) => (
                <NotificationCard
                key={index}
                title={notification.title}
                description={notification.description}
                time={notification.time}
                icon={notification.icon}
                />
            )) 
        }
        <View className="mb-32 mt-12">
            <Text className="text-gray-400 text-center italic text-sm text-light">
              Powered By ClearResult
            </Text>
        </View>
        


      </ScrollView>
    </Screen>
  );
};

export default NotificationScreen;
