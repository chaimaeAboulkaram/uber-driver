import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionPresets} from '@react-navigation/stack';
import OrderScreen from '../screens/OrderScreen'; 
const Stack = createStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS, //ModalPresentationIOS
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
      <Stack.Screen name="OrderPage" component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
