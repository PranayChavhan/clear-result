import { View, TextInput } from 'react-native'
import React from 'react'


const InputFeild = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
  }) => {
    return (
      <View className="">
        <TextInput
          className="border border-gray-300 p-2 rounded-md"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
    );
  };
export default InputFeild