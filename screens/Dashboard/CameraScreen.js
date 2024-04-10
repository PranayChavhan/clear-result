import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect } from "react";
import Screen from "../../components/ui/Screen";

const CameraScreen = () => {
  // camera
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [startCamera, setStartCamera] = useState(false);

  // open camera
  useEffect(() => {
    //Get camera permission
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();

    if (permission?.status === "granted") {
      setStartCamera(true);
    } else if (permission?.status === "undetermined") {
      requestPermission();
    } else {
      alert("Camera permission is required to use this feature");
    }
  }, [permission]);

  return (
    <Screen>
      <View className="h-screen mb-32 pb-32 ">
        <Camera
          style={{ flex: 1 }}
          type={type}
          ref={(ref) => {
            camera = ref;
          }}
          ratio="16:9"
        >
          <View className="  h-40  bottom-0 right-0 left-0 absolute flex items-center justify-center">
            <TouchableOpacity>
              <View className="bg-transparent border-4 border-white rounded-full w-24 h-24 flex items-center justify-center">
                <View className="bg-white rounded-full w-20 h-20"></View>
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </Screen>
  );
};

export default CameraScreen;
