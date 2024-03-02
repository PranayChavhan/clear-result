import { View, Text, Image } from 'react-native'
import React from 'react'
import IcSettTheme from '../../assets/icons/ic_set_theme.svg'


const ProfileSettingsCard = ({ data }) => {
    return (
        <View className={`rounded-xl  sm flex flex-col p-4 shadow-md bg-white m-4`}>

            {
                data.map((d, i) => (
                    <View>
                        <View key={i} className={`  flex gap-4 flex-row justify-start items-center `}>
                            <View className={``}>
                                {d.icon ? d.icon : <IcSettTheme />}
                            </View>
                            <View className="flex gap-y-2">
                                <Text className="font-medium text-sm">{d.title}</Text>
                                <Text className="text-xs text-gray-600">{d.desc}</Text>
                            </View>
                        </View>
                        {i != 2 && <View className={`w-full my-2 h-[0.3px] bg-gray-400`} />}
                    </View>
                ))
            }


        </View>
    )
}

export default ProfileSettingsCard