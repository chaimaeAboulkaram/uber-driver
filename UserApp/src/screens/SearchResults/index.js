import React, {useState} from 'react';
import {View, Text, Dimensions, Alert} from 'react-native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import {useRoute, useNavigation} from '@react-navigation/native';
import {createOrder} from '../../graphql/mutations';

export default function SearchResults() {
  const typeState = useState(null);
  const route = useRoute();
  const navigation = useNavigation();
  const {originPlace, destinationPlace} = route.params;

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }

    // submit to server
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
  
      const date = new Date();
      const input = {
        createdAt: date.toISOString(),
        type, //the name and the key value is the same
        originLatitude: originPlace.details.geometry.location.lat,
        oreiginLongitude: originPlace.details.geometry.location.lng,

        destLatitude: destinationPlace.details.geometry.location.lat,
        destLongitude: destinationPlace.details.geometry.location.lng,

        userId: userInfo.attributes.sub,
        carId: userInfo.attributes.sub,
        status: 'NEW',
      };

      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input: input,
        }),
      );

      console.log(response);

      navigation.navigate('OrderPage', {id: response.data.createOrder.id});
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <View style={{height: 400}}>
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
}
