import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IcSearch from "../../assets/icons/ic_search.svg";
import Checkbox from "../../components/ui/Checkbox";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcMore from "../../assets/icons/ic_exhibition.svg";
import Button from "../../components/ui/Button";

const ExhibitionFilter = () => {
  const [activeButton, setActiveButton] = useState(0);
  const items = [
    { label: "Location", value: "Task Type" },
    { label: "Designation", value: "Store/Company" },
  ];
  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />

      <View className="my-4">
        <View className="px-4">
          <Text className="text-[18px] font-[500]">Invitees Filter</Text>
        </View>
        <View className="bg-white pt-4">
          <View className="flex flex-row">
            <View className="w-[35%]">
              {items.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setActiveButton(index);
                  }}
                  style={{
                    backgroundColor:
                      activeButton === index ? "white" : "#F8F8F8",
                    padding: 20,
                    paddingVertical: 26,
                    borderBottomWidth: index > 0 ? 0.8 : 0,
                    borderTopWidth: index > 0 ? 0.8 : 0,
                    borderColor: "#E1E1E1",
                  }}
                >
                  <Text className="text-center w-full text-[12px] font-medium">
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View className="w-[65%] px-4">
              {activeButton === 0 ? <Location /> : null}
              {activeButton === 1 ? <Designation /> : null}
            </View>
          </View>
          {/*   
          <Text className="text-[12px] italic text-[#828282] ">
            Powered by ClearResults
          </Text> */}
        </View>
      </View>
    </Screen>
  );
};

const Location = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text className="text-[12px] font-bold text-[#828282]">
        Search States
      </Text>
      <View className="w-56 mb-6 mt-2 flex flex-row items-center border border-blue-300 p-2 rounded-lg">
        <View className="mr-2">
          <IcSearch />
        </View>
        <TextInput className=" " placeholder="Search state" />
      </View>

      <Text className="text-[12px] font-bold text-[#828282]">States</Text>

      <Checkbox label="Maharashtra" />
      <Checkbox label="Gujarat" />
      <Checkbox label="Madhya Pradesh" />
      <Checkbox label="West Bengal" />

      <Text className="text-[12px] font-bold text-[#828282] mt-6">City</Text>

      <Checkbox label="Mumbai" />
      <Checkbox label="Pune" />
      <Checkbox label="Nagpur" />
      <Checkbox label="Indore" />
      <Checkbox label="Bhopal" />
      <Checkbox label="Kalkata" />

      <View className=" flex flex-row items-center gap-2 mt-4">
        <Button varient={"outline"} onPress={()=>navigation.navigate("InviteUser")}>
          Discard
        </Button>
        <Button
          varient={"primary"} 
          onPress={() => {
            navigation.navigate("InviteUser");
          }}
        >
          Apply
        </Button>
      </View>
    </View>
  );
};

const Designation = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.navigate("InviteUser");
    }
  return (
    <View>
      <Text className="text-[12px] font-bold text-[#828282]">Types</Text>

      <Checkbox label="Follow Up" />
      <Checkbox label="Pending Visits" />
      <Checkbox label="Send Docs" />
      <Checkbox label="Sample Tasks" />

      <Text className="text-[12px] font-bold text-[#828282] mt-6">
        Sub-task Types
      </Text>

      <Checkbox label="Call" />
      <Checkbox label="Mail" />
      <Checkbox label="Message" />
      <Checkbox label="Brochures" />
      <Checkbox label="Catalogue" />
      <Checkbox label="Invites" />


      <View className="flex flex-row py-3">
        <Button varient={"outline"} onPress={handleBack}>
          Discard
        </Button>
        <Button varient={"primary"} onPress={handleBack}>
          Apply
        </Button>
      </View>
    </View>
  );
};

export default ExhibitionFilter;
