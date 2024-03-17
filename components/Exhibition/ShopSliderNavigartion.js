import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import IcRight from "../../assets/icons/ic_right.svg";
import IcThreeDotBlack from "../../assets/icons/ic_three_dot_black.svg";



const ShopSliderNavigartion = () => {
    const [activeTab, setActiveTab] = useState("Contact Person");

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
                <TabButton label="Contact Person" onPress={() => handleTabPress("Contact Person")} active={activeTab === "Contact Person"} />
                <TabButton label="Agents" onPress={() => handleTabPress("Agents")} active={activeTab === "Agents"} />
                <TabButton label="Distributor" onPress={() => handleTabPress("Distributor")} active={activeTab === "Distributor"} />
                <TabButton label="Ad" onPress={() => handleTabPress("Ad")} active={activeTab === "Ad"} />
            </View>
            <View style={{ backgroundColor: 'white' }}>
                {activeTab === "Contact Person" && <ContactPersonTab />}
                {activeTab === "Agents" && <AgentsTab />}
                {activeTab === "Distributor" && <DistributorTab />}
                {activeTab === "Ad" && <AdTab />}
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

const ContactPersonTab = () => {
    return (
        <View className="border-[0.2px] border-gray-200 rounded-b-lg shadow-2xl bg-white p-2 px-4" >
            <View className="flex flex-row items-center justify-between my-2">
                
                <View className="flex flex-row items-center gap-2">
                <IcRight/>
                    <Image source={require('../../assets/images/img.png')} className="rounded-full w-8 h-8" />
                    <View>
                        <View className="flex flex-row items-center gap-1">
                        <Text className="text-[14px] font-bold">
                        Praveen Sharma 
                        </Text>
                        <Text className="text-[12px] italic font-semibold">(senior manager)</Text>
                        </View>
                        <Text className="text-[10px] text-gray-400">
                        Last interacted: 05 Oct 2023
                        </Text>
                    </View>
                </View>
                <IcThreeDotBlack/>
            </View>


            <View className="flex flex-row items-center justify-between my-2">
                
                <View className="flex flex-row items-center gap-2">
                <IcRight/>
                    <Image source={require('../../assets/images/img.png')} className="rounded-full w-8 h-8" />
                    <View>
                        <View className="flex flex-row items-center gap-1">
                        <Text className="text-[14px] font-bold">
                        Praveen Sharma 
                        </Text>
                        <Text className="text-[12px] italic font-semibold">(senior manager)</Text>
                        </View>
                        <Text className="text-[10px] text-gray-400">
                        Last interacted: 05 Oct 2023
                        </Text>
                    </View>
                </View>
                <IcThreeDotBlack/>
            </View>
        </View>
    );
}

const AgentsTab = () => {
    return (
        <View style={{ backgroundColor: 'blue', height: 200, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Agents</Text>
        </View>
    );
}

const DistributorTab = () => {
    return (
        <View style={{ backgroundColor: 'green', height: 200, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Distributor</Text>
        </View>
    );
}

const AdTab = () => {
    return (
        <View style={{ backgroundColor: 'yellow', height: 200, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Ad</Text>
        </View>
    );
}

export default ShopSliderNavigartion;
