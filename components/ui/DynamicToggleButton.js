import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

const DynamicToggleButton = ({ initialState, onToggle }) => {
  const [isActive, setIsActive] = useState(initialState);

  const toggleButton = () => {
    const newState = !isActive;
    setIsActive(newState);
    // Call the callback function with the updated state
    onToggle(newState);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleButton}>
      <View style={{
        width: 40,
        height: 20,
        borderRadius: 15,
        backgroundColor: isActive ? '#64A6FF' : 'gray',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 2,
      }}>
        <View style={{
          width: 16,
          height: 16,
          borderRadius: 13,
          backgroundColor: 'white',
          alignSelf: isActive ? 'flex-end' : 'flex-start',
        }} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DynamicToggleButton;
