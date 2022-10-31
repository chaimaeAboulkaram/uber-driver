/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
import {getCarId} from './src/graphQl/queries';
import {createCar} from './src/graphQl/mutations';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
const App = () => {
  useEffect(() => {
    const updateUserCar = async () => {
      //Get authenticated User
      const authenticatedUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!authenticatedUser) {
        return;
      }
      //console.log(authenticatedUser.attributes.sub);
      //Check if user has alredy a car
      
      const carData = await API.graphql(
        graphqlOperation(getCarId,  {id: authenticatedUser.attributes.sub}),
      );
      //console.log(carData);
      if (carData.data.getCar) {
        console.log('User already has a car assigned');
        return;
      }
      
      //If not, create a new car for the user
      const newCar = {
        id: authenticatedUser.attributes.sub,
        type: 'UberX',
        driverId: authenticatedUser.attributes.sub,
      };
      await API.graphql(graphqlOperation(createCar, {input: newCar}));
    };
    updateUserCar();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default withAuthenticator(App);
