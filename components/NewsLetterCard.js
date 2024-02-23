import { View, Text, ImageBackground, Button, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import IcFilter from '../assets/icons/ic_filter.svg'

const NewsLetterCard = () => {
    const { width, height } = Dimensions.get('window')
    return (
        <View className={`w-screen pr-10 mr-3`}>
            <View className=" bg-white h-auto flex flex-col overflow-hidden rounded-3xl">
                <View className="h-32 relative rounded-3xl p-0 overflow-hidden">
                    <Image source={require("../assets/images/bg_newsletter.png")} resizeMode="cover" className={`h-full w-full`} />
                    <Image source={require("../assets/images/trending_badge.png")} resizeMode="cover" className={` absolute bottom-0 right-0`} />

                </View>
                <View className="px-4 py-2 gap-y-1">
                    {/* Title */}
                    <Text className={"text-xl font-semibold text-ellipsis line-clamp-1"} style={{ fontFamily: "Poppins-Regular" }}>Daily delivery service </Text>
                    {/* Grid */}
                    <View className="flex-row ">

                        <Text className={"text-sm text-amber-400  font-semibold text-ellipsis line-clamp-2"} style={{ fontFamily: "Poppins-SemiBold" }}>Includes: </Text>
                        <Text className={"text-sm font-semibold text-ellipsis line-clamp-2"} style={{ fontFamily: "Poppins-Regular" }}>Get daily news letter on your email</Text>
                    </View>
                    <Text className={"text-sm font-semibold text-ellipsis line-clamp-2"} style={{ fontFamily: "Poppins-Regular" }}>2 mins Read</Text>
                </View>

                <View className="flex flex-row justify-between px-4  gap-4">
                    <TouchableOpacity title="Subscribe" className="text-sm flex-grow flex items-center justify-center p-2 rounded-lg border-gray-300  border bg-white " >
                        <Text style={{ fontFamily: "Poppins-Regular" }}>Top Rated</Text>
                    </TouchableOpacity>
                    <TouchableOpacity title="Subscribe" className="text-sm flex-grow flex items-center justify-center p-2 rounded-lg border-gray-300  border bg-white " >
                        <Text style={{ fontFamily: "Poppins-Regular" }}>SugnUp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity title="Subscribe" className="text-sm flex-grow flex items-center justify-center p-2 rounded-lg border-gray-300  border bg-white " >
                        <Text style={{ fontFamily: "Poppins-Regular" }}>SugnUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NewsLetterCard