import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomeDrawer from './CustomeDrawer'
const Drawer = createDrawerNavigator();

const Screen = props => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.name}</Text>
    </View>
  );
};

const RouteNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomeDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{headerShown: false}}
        />

        <Drawer.Screen name="Your Trips" options={{headerShown: false}}>
          {() => <Screen name={'Your Trips'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Help" options={{headerShown: false}}>
          {() => <Screen name={'Help'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet" options={{headerShown: false}}>
          {() => <Screen name={'Wallet'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings" options={{headerShown: false}}>
          {() => <Screen name={'Settings'} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigator;
