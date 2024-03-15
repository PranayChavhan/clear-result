import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

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

export default Checkbox