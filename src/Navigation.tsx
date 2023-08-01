import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import DrawerNavigation from './Drawer';
import CreateBlog from './CreateBlog';
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="CreateBlog" component={CreateBlog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
