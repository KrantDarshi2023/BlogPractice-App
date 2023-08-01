import React, {useState} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import axios from 'axios';

function Register() {
  const [id, setId] = useState('');
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = 'http://localhost:3000/users/add';
  const register = async () => {
    try {
      const res = await axios.post(url, {
        id: id,
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        email: email,
        password: password,
      });
      if (res.status === 200) {
        console.log(res.data);
        Alert.alert('Register Successfully');
      }
    } catch (e) {}
  };
  return (
    <View>
      <TextInput
        value={id}
        placeholder="enter your Id here"
        onChangeText={setId}
      />
      <TextInput
        value={first_name}
        placeholder="enter your firstname here"
        onChangeText={setFirst_Name}
      />
      <TextInput
        value={last_name}
        placeholder="enter your lastname here"
        onChangeText={setLast_Name}
      />
      <TextInput
        value={gender}
        placeholder="enter your gender here"
        onChangeText={setGender}
      />
      <TextInput
        value={email}
        placeholder="enter your email here"
        onChangeText={setEmail}
      />
      <TextInput
        value={password}
        placeholder="enter your password here"
        onChangeText={setPassword}
      />
      <Button onPress={() => register()} title="Register" />
    </View>
  );
}

export default Register;
