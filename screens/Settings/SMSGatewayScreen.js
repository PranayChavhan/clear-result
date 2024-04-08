import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/ui/Screen";
import CrLogo from "../../assets/images/cr_logo.png";
import ImgDarkMode from "../../assets/images/theme_dark.png";
import ImgLightMode from "../../assets/images/theme_light.png";
import ImgSystemMode from "../../assets/images/theme_system.png";
import HeroImg from "../../assets/images/sms-gateway.svg";

import TopBar from "../../components/ui/TopBar";
import InputFeild from "../../components/ui/InputFeild";

import IcEdit from "../../assets/icons/ic_edit.svg";

const SMSGatewayScreeen = () => {
  const [tab, setTab] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Screen>
      <TopBar logo={CrLogo} />
      <View className="p-4">
        <Text className="font-bold text-md">SMS Setup</Text>
      </View>
      {tab === 0 && <NewSMS setTab={setTab} />}
      {tab === 1 && (
        <SMSForm
          title={title}
          setTitle={setTitle}
          desc={description}
          setDesc={setDescription}
          setTab={setTab}
        />
      )}

      {tab === 2 && (
        <View className="flex flex-col gap-3 p-4">
          <SMSCard
            title="Task Remainder"
            description="This is a test description"
          />
          <SMSCard
            title="Task Remainder"
            description="This is a test description"
          />
          <SMSCard
            title="Task Remainder"
            description="This is a test description"
          />
          <SMSCard
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

export default SMSGatewayScreeen;

const NewSMS = ({ setTab }) => {
  return (
    <>
      <View className="w-full flex items-center justify-center">
        <HeroImg />
        <Text className="font-semibold text-sm ">
          Start Creating SMS Templates
        </Text>

        <Text className="text-xs font-light mt-3">
          You can create SMS Templates for multiple tasks.
        </Text>

        <TouchableWithoutFeedback onPress={() => setTab(1)}>
          <View className=" m-3 bg-blue-500 p-4 py-3  rounded-xl mt-6 items-center justify-center">
            <Text className="text-white text-center">Create Template</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const SMSForm = ({ title, setTitle, desc, setDesc, setTab }) => {
  return (
    <View className="px-4">
      <View className="mt-4">
        <Text className="text-[13px] font-medium text-[#828282] mb-2">
          SMS Title
        </Text>
        <InputFeild
          placeholder="Enter the title for the sms"
          value={title}
          onChangeText={(e) => setTitle(e)}
          secureTextEntry={false}
        />
      </View>
      <View className="mt-4">
        <Text className="text-[13px] font-medium text-[#828282] mb-2">
          SMS Content
        </Text>
        <InputFeild
          placeholder="Enter the title for the sms"
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

const SMSCard = ({ title, description }) => {
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
