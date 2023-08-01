import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

function MyBlogs() {
  const url = 'http://localhost:3000/blog/';
  const [myBlogsArray, setmyBlogsArray] = useState<any>([]);
  useEffect(() => {
    const getAll = async () => {
      try {
        const id = await AsyncStorage.getItem('id');
        const token = await AsyncStorage.getItem('token');

        const res = await axios.get(url + 'blogByUserId/' + id, {
          headers: {Authorization: `Bearer ${token}`},
        });
        console.log(res.data);
        if (res.data) {
          console.log(res.data);
          setmyBlogsArray(res.data);
        }
      } catch (e) {}
    };
    getAll();
  }, []);
  return (
    <View>
      <FlatList
        data={myBlogsArray}
        renderItem={({item}) => (
          <Text>
            {item.heading} {item.content} {item.published_date}
          </Text>
        )}
      />
    </View>
  );
}

export default MyBlogs;
