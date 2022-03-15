import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

const Input = ({ value, placeholder, handleOnChangeText, ...props }) => {
    return (
        <View style={styles.inputContainer}>
          <TextInput
            {...props}
            value={value}
            placeholder={placeholder}
            onChangeText={(text) => handleOnChangeText(text)}
          />
        </View>
    )
}


export default Input;