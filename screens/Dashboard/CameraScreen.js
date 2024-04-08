import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect } from "react";
import Screen from "../../components/ui/Screen";

const CameraScreen = () => {
  // camera
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [startCamera, setStartCamera] = useState(false);
  // kill this activity on back

  return (
    <Screen style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(ref) => {
          camera = ref;
        }}
      >
        <View className="bg-black/40 rounded-bl-3xl  h-20 "></View>

        <View className="bg-black/40 rounded-t-3xl  h-40  bottom-0 right-0 left-0 absolute flex items-center justify-center">
          <TouchableOpacity>
            <View className="bg-transparent border-4 border-white rounded-full w-24 h-24 flex items-center justify-center">
              <View className="bg-white rounded-full w-20 h-20"></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </Screen>
  );
};

export default CameraScreen;
