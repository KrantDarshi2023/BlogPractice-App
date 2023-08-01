import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function Home({navigation}: any) {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Already a User? Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>New User? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
