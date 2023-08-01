import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyProfile from './MyProfile';
import MyBlogs from './MyBlogs';
import Logout from './Logout';
import Blogs from './Blogs';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Blogs" useLegacyImplementation={false}>
      <Drawer.Screen name="Blogs" component={Blogs} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="MyBlogs" component={MyBlogs} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
