import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'

import { useNavigation } from "@react-navigation/native";
import IcCM from "../../assets/icons/ic_cm.svg";
import IcCC from "../../assets/icons/ic_cc.svg";
import IcCW from "../../assets/icons/ic_cw.svg";

const TasksTabs = () => {
    const [activeTab, setActiveTab] = useState("Due Tasks");

    const handleTabPress = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#FFF7ED',
                elevation: 0,
                borderBottomWidth: 1,
                borderBottomColor: '#E1E1E1',
                marginTop: 20,
                borderTopRadius: 10,
                height: 60,
            }}>
                <TabButton label="Due Tasks" onPress={() => handleTabPress("Due Tasks")} active={activeTab === "Due Tasks"} />
                <TabButton label="All Tasks" onPress={() => handleTabPress("All Tasks")} active={activeTab === "All Tasks"} />
                
                </View>
            <View style={{ backgroundColor: 'white' }}>
                {activeTab === "Due Tasks" && <DueTasks />}
                {activeTab === "All Tasks" && <AllTasks />}
            </View>
        </View>
    );
}

const TabButton = ({ label, onPress, active }) => {
    return (
        <TouchableOpacity className={active ? ` border-b-4 -mb-[14px] pb-[19px] border-blue-500 ` : ``} onPress={onPress} style={{ paddingVertical: 10, }}>
            <Text
            style={{ fontSize: 12, fontWeight: 'bold',  paddingHorizontal: 26, color: active ? '#2F80ED' : '#000' }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const DueTasks = () => {
    const [activeButton, setActiveButton] = useState(0);
    const navigation = useNavigation();
    const buttonsData = [
      { label: 'Follow Ups', count: '02' },
      { label: 'Pending Visits', count: '04' },
      { label: 'Send Docs', count: '01' },
      { label: 'Sample Text', count: '03' },
    ];
  
    const handleButtonPress = (index) => {
      setActiveButton(index);
    };
  
    return (
      <View className="border-[0.2px] border-gray-200 rounded-b-lg shadow-2xl bg-white px-4 pt-4 ">
        <View className="flex flex-row items-center justify-between gap-4 mb-4">
          {buttonsData.map((button, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleButtonPress(index)}
              className={`${
                activeButton === index ? 'bg-[#BFF0FF80]' : 'bg-[#FAFAFA]'
              } w-16 rounded-md flex flex-col items-center justify-center p-2`}
            >
              <Text className="text-[22px] font-bold">{button.count}</Text>
              <Text className="text-wrap text-center text-[12px] font-normal">
                {button.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>


        <View className="flex flex-row items-center justify-between my-2">
                
                <View className="flex flex-row items-center gap-2">
                    <Image source={require('../../assets/images/img.png')} className="rounded-full w-10 h-10" />
                    <View>
                        <View className="flex flex-row items-center gap-1">
                        <Text className="text-[14px] font-bold">
                        Praveen Sharma 
                        </Text>
                        <Text className="text-[12px] italic font-semibold">(senior manager)</Text>
                        </View>
                        <Text className="text-[10px] text-gray-400">
                        Follow up mode: Email
                        </Text>
                    </View>
                </View>

                <IcCM/>
             
            </View>


            <View className="flex flex-row items-center justify-between my-2">
                
                <View className="flex flex-row items-center gap-2">
                    <Image source={require('../../assets/images/img.png')} className="rounded-full w-10 h-10" />
                    <View>
                        <View className="flex flex-row items-center gap-1">
                        <Text className="text-[14px] font-bold">
                        Praveen Sharma 
                        </Text>
                        <Text className="text-[12px] italic font-semibold">(senior manager)</Text>
                        </View>
                        <Text className="text-[10px] text-gray-400">
                        Follow up mode: Email
                        </Text>
                    </View>
                </View>

                <IcCC/>
             
            </View>

            <View className="flex flex-row items-center justify-between my-2">
                
                <View className="flex flex-row items-center gap-2">
                    <Image source={require('../../assets/images/img.png')} className="rounded-full w-10 h-10" />
                    <View>
                        <View className="flex flex-row items-center gap-1">
                        <Text className="text-[14px] font-bold">
                        Praveen Sharma 
                        </Text>
                        <Text className="text-[12px] italic font-semibold">(senior manager)</Text>
                        </View>
                        <Text className="text-[10px] text-gray-400">
                        Follow up mode: Email
                        </Text>
                    </View>
                </View>

                <IcCW/>
             
            </View>


        

       




        
      </View>
    );
}

const AllTasks = () => {
    return (
        <View style={{ backgroundColor: 'blue', height: 200, justifyContent: 'center', alignItems: 'center' }}>
            <Text>All Tasks</Text>
        </View>
    );
}

export default TasksTabs