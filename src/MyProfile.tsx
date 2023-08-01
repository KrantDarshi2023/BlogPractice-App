import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

function MyProfile() {
  const url = 'http://localhost:3000/users/';
  const [myprofile, setMyProfile] = useState<any>([]);
  useEffect(() => {
    const getAll = async () => {
      try {
        const id = await AsyncStorage.getItem('id');
        const token = await AsyncStorage.getItem('token');

        const res = await axios.get(url + 'userDetails/' + id, {
          headers: {Authorization: `Bearer ${token}`},
        });
        console.log(res.data);
        if (res.data) {
          console.log(res.data);
          setMyProfile(res.data);
        }
      } catch (e) {}
    };
    getAll();
  }, []);
  return (
    <View>
      <FlatList
        data={myprofile}
        renderItem={({item}) => (
          <Text>
            Id: {item.user_id}
            Email: {item.email}
            First name: {item.first_name}
            Last name:{item.last_name}
            Gender: {item.gender}
          </Text>
        )}
      />
    </View>
  );
}

export default MyProfile;
