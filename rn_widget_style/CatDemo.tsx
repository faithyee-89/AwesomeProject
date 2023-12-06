/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
  const name = '喵喵';
  return (
    <View>
      <Text>Hello, I am...{name}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
};

export default Cat;
