import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Screen from "../../components/ui/Screen";
import CrLogo from "../../assets/images/cr_logo.png";
import ImgDarkMode from "../../assets/images/theme_dark.png";
import ImgLightMode from "../../assets/images/theme_light.png";
import ImgSystemMode from "../../assets/images/theme_system.png";
import HeroImg from "../../assets/images/email-setup.svg";

import TopBar from "../../components/ui/TopBar";
import InputFeild from "../../components/ui/InputFeild";

import IcEdit from "../../assets/icons/ic_edit.svg";

const EmailSetupScreeen = ({ route }) => {
  const [tab, setTab] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const template = route?.params?.template;

  useEffect(() => {
    if (template) {
      setTab(1);
    }
  }, [template]);

  return (
    <Screen>
      <TopBar logo={CrLogo} />
      <View className="p-4">
        <Text className="font-bold text-md">Email Setup</Text>
      </View>
      {tab === 0 && <NewEmail setTab={setTab} />}
      {tab === 1 && (
        <EmailForm
          title={title}
          setTitle={setTitle}
          desc={description}
          setDesc={setDescription}
          setTab={setTab}
        />
      )}

      {tab === 2 && (
        <View className="flex flex-col gap-3 p-4">
          <EmailCard
            title="Task Remainder"
            description="This is a test description"
          />
          <EmailCard
            title="Task Remainder"
            description="This is a test description"
          />
          <EmailCard
            title="Task Remainder"
            description="This is a test description"
          />
          <EmailCard
            title="Task Remainder"
            description="This is a test description"
          />
          <TouchableWithoutFeedback onPress={() => setTab(1)}>
            <Text className="text-[16px] font-medium text-center mt-4 text-[#2F80ED] underline">
              Create New
            </Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </Screen>
  );
};

export default EmailSetupScreeen;

const NewEmail = ({ setTab }) => {
  const navigation = useNavigation();
  return (
    <>
      <View className="w-full flex items-center justify-center">
        <HeroImg />
        <Text className="font-semibold text-sm ">Email Templates</Text>

        <Text className="text-xs font-light mt-3">
          You can create Email Templates for multiple tasks.
        </Text>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("EmailTemplate")}
        >
          <View className=" m-3 bg-blue-500 p-4 py-3  rounded-xl mt-6 items-center justify-center">
            <Text className="text-white text-center">Start Creating</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const EmailForm = ({ title, setTitle, desc, setDesc, setTab }) => {
  return (
    <View className="px-4">
      <View className="mt-4">
        <Text className="text-[13px] font-medium text-[#828282] mb-2">
          Email Title
        </Text>
        <InputFeild
          placeholder="Enter the title for the task"
          value={title}
          onChangeText={(e) => setTitle(e)}
          secureTextEntry={false}
        />
      </View>
      <View className="mt-4">
        <Text className="text-[13px] font-medium text-[#828282] mb-2">
          Email Content
        </Text>
        <InputFeild
          placeholder="Enter the title for the task"
          value={desc}
          lineCount={4}
          onChangeText={(e) => setDesc(e)}
          secureTextEntry={false}
        />
      </View>
      <View className="flex flex-row gap-3 mt-3">
        <TouchableWithoutFeedback onPress={() => setTab(0)}>
          <View className="border flex-1 m-3 border-blue-500 px-4 py-3 rounded-xl mt-4 items-center justify-center">
            <Text className="text-blue-500 text-center">Discard</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setTab(2)}>
          <View className=" flex-1 m-3 bg-blue-500 px-4 py-3 rounded-xl mt-4 items-center justify-center">
            <Text className="text-white text-center">Save</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <TouchableWithoutFeedback>
        <Text className="text-[16px] font-medium text-center mt-4 text-[#2F80ED] underline">
          Save & Create New
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const EmailCard = ({ title, description }) => {
  return (
    <View className="p-2">
      <View className="flex  justify-center bg-gray-200 p-4 rounded-md">
        <View className="flex pb-4 justify-between flex-row items-center">
          <Text>{title}</Text>
          <IcEdit />
        </View>
        <Text className="text-xs">{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
