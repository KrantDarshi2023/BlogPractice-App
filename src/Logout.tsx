import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
function Logout({navigation}: any) {
  useEffect(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <View>
      <Text>Logout</Text>
    </View>
  );
}

export default Logout;
