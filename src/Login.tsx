import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = 'http://localhost:3000/users/login';
  const login = async () => {
    try {
      const res = await axios.post(url, {
        email: email,
        password: password,
      });
      if (res.data === 'Wrong Credentials') {
        console.log(res.data);
        Alert.alert(res.data);
      } else if (res.data === 'Please Enter credentials') {
        Alert.alert(res.data);
      } else {
        console.log(res.data);
        const _storeData = async () => {
          try {
            await AsyncStorage.setItem('token', res.data.token);
            await AsyncStorage.setItem('id', String(res.data.id));
          } catch (error) {
            // Error saving data
          }
        };
        _storeData();
        Alert.alert('Login Successfully');
        navigation.navigate('DrawerNavigation');
      }
    } catch (e) {}
  };

  return (
    <View>
      <TextInput
        value={email}
        placeholder="enter your email here"
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        placeholder="enter your password here"
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Button onPress={() => login()} title="Login" />
    </View>
  );
}

export default Login;
