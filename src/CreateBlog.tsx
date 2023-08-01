import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Button, Text, View} from 'react-native';
import axios from 'axios';

function CreateBlog() {
  const url = 'http://localhost:3000/blog/';
  const [blogObject, setBlogObject] = useState<{
    bid: string;
    user_id: string;
    heading: string;
    content: string;
    published_date: string;
  }>({bid: '', user_id: '', heading: '', content: '', published_date: ''});
  const [response, setResponse] = useState('');
  const createYourBlog = async () => {
    try {
      const res = await axios.post(url + 'add', blogObject);
      if (res.data === 'record Inserted') {
        setResponse('You have Inserted Your Blog');
      }
    } catch (e) {
      return e;
    }
  };

  return (
    <View>
      <Text>Blog Id</Text>
      <TextInput
        value={blogObject.bid}
        onChangeText={value => setBlogObject(prev => ({...prev, bid: value}))}
      />
      <Text>user Id</Text>
      <TextInput
        value={blogObject.user_id}
        onChangeText={value =>
          setBlogObject(prev => ({...prev, user_id: value}))
        }
      />
      <Text>Heading</Text>

      <TextInput
        value={blogObject.heading}
        onChangeText={value =>
          setBlogObject(prev => ({...prev, heading: value}))
        }
      />
      <Text>Content</Text>

      <TextInput
        value={blogObject.content}
        onChangeText={value =>
          setBlogObject(prev => ({...prev, content: value}))
        }
      />
      <Text>Published Date</Text>

      <TextInput
        value={blogObject.published_date}
        onChangeText={value =>
          setBlogObject(prev => ({...prev, published_date: value}))
        }
      />
      <Button title="Submit" onPress={() => createYourBlog()} />
      <Text>{response}</Text>
    </View>
  );
}

export default CreateBlog;
