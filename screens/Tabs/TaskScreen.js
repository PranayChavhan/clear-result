import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcFilter from "../../assets/icons/ic_filter.svg";
import IcFilterDown from "../../assets/icons/ic_filter_down.svg";
import Constants from "expo-constants";
import TaskTopNavigation from "../../components/TaskTopNavigation";
import IcSearch from "../../assets/icons/ic_search.svg";
const TaskScreen = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleFilterScreen = () => {
    if (isFilterVisible === false) {
      setIsFilterVisible(true);
    } else {
      setIsFilterVisible(false);
    }
  };

  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: Constants.statusBarHeight,
          backgroundColor: "white",
          paddingBottom: 10,
        }}
      >
        <TopBar logo={CrLogo} />
        <View className="">
          <View className="flex flex-row items-center justify-between mt-4 px-4">
            <Text
              className="text-[18px]"
              style={{ fontFamily: "Poppins-Regular", fontWeight: 600 }}
            >
              {isFilterVisible ? "Task Filters" : "Tasks"}
            </Text>

            <View className="flex flex-row items-center gap-2">
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 5,
                  elevation: 5,
                }}
                activeOpacity={0.8}
              >
                <Text
                  style={{
                    color: "#2F80ED",
                    fontFamily: "Poppins-Regular",
                    marginRight: 5,
                  }}
                >
                  My Tasks
                </Text>
                <IcFilterDown />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleFilterScreen}
                style={{
                  backgroundColor: isFilterVisible ? "#FFF6DE" : "white",
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 5,
                }}
              >
                <IcFilter />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      {isFilterVisible ? (
        <>
          <Filter />
        </>
      ) : (
        <>
          <TaskTopNavigation />
        </>
      )}
    </>
  );
};

const Filter = () => {
  const [activeButton, setActiveButton] = useState(0);
  const items = [
    { label: "Task Type", value: "Task Type" },
    { label: "Store/Company", value: "Store/Company" },
    { label: "Event/Exhibition", value: "Event/Exhibition" },
    { label: "Contact Person", value: "Contact Person" },
  ];
  return (
    <View className="bg-white h-screen pt-4">
      <View className="flex flex-row h-full">
        <View className="w-[35%]">
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setActiveButton(index);
              }}
              style={{
                backgroundColor: activeButton === index ? "white" : "#F8F8F8",
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
        <View className="w-full px-4">
          {activeButton === 0 ? <TaskType /> : null}
          {activeButton === 1 ? <StoreCompany /> : null}
          {activeButton === 2 ? <EventExhibition /> : null}
          {activeButton === 3 ? <ContactPerson /> : null}
        </View>
      </View>

      <Text className="text-[12px] italic text-[#828282] absolute bottom-[24%] left-[36%]">
        Powered by ClearResults
      </Text>
    </View>
  );
};

const Checkbox = ({ label }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setChecked(!isChecked)}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: isChecked ? "#2F80ED" : "gray",
          marginRight: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isChecked ? "#2F80ED" : "white",
        }}
      >
        {isChecked && <Text style={{ color: "white", fontSize: 14 }}>✓</Text>}
      </View>
      <Text style={{ fontSize: 14, fontWeight: 600 }}>{label}</Text>
    </TouchableOpacity>
  );
};

const TaskType = () => {
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
    </View>
  );
};

const StoreCompany = () => {
  return (
    <View>
      <Text className="text-[12px] font-bold text-[#828282]">
        Company/Store
      </Text>

      <Text className="text-[14px] mt-4 mb-1 font-bold text-[#828282]">
        Email Address
      </Text>

      <View className="flex flex-row items-center justify-start border-[0.8px] border-[#2F80ED] rounded-md w-[65%] px-2">
        <IcSearch style={{ marginRight: 2 }} />
        <TextInput
          style={{
            padding: 8,
          }}
          placeholder="Search store/company"
        />
      </View>

      <Checkbox label="Shopper Shop" />
      <Checkbox label="Anouk" />
      <Checkbox label="H&M" />
      <Checkbox label="Japore" />
      <Checkbox label="Reebok" />
      <Checkbox label="Marks & Spencers" />
      <Checkbox label="Global Desi" />
      <Checkbox label="Sample Store 1" />
      <Checkbox label="Sample Store 2" />
      <Checkbox label="Sample Store 3" />
    </View>
  );
};


const EventExhibition = () => {
  return (
    <View>
      <Text>Event Exhibition</Text>
    </View>
  )
}

const ContactPerson = () => {
  return (
    <View>
      <Text>Constact Person</Text>
    </View>
  )
}
export default TaskScreen;
