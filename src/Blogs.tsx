import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, TextInput, View} from 'react-native';

function Blogs({navigation}: any) {
  const url = 'http://localhost:3000/blog/';
  const [blogId, setBlogId] = useState('');
  const [blogArray, setBlogArray] = useState<any>([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const id = await AsyncStorage.getItem('id');
        console.log(id);
        const res = await axios.get(url + 'allBlogs', {
          headers: {Authorization: `Bearer ${token}`},
        });
        console.log(token);
        if (res.data) {
          console.log(res.data);
          setBlogArray(res.data);
        }
      } catch (e) {}
    };
    getAll();
  }, []);
  useEffect(() => {
    const getAll = async () => {
      try {
        const res = await axios.get(url + 'blogById/' + blogId);
        if (res.data) {
          console.log(res.data);
          setBlogArray(res.data);
        }
      } catch (e) {}
    };
    getAll();
  }, [blogId]);

  return (
    <View>
      <View>
        <Button
          title="Create Blog"
          onPress={() => navigation.navigate('CreateBlog')}
        />
        <TextInput
          value={blogId}
          placeholder="Enter blogs id to search"
          onChangeText={setBlogId}
        />
        <FlatList
          data={blogArray}
          renderItem={({item}) => (
            <Text>
              {item.heading} {item.content} {item.published_date}
            </Text>
          )}
        />
      </View>
    </View>
  );
}

export default Blogs;
