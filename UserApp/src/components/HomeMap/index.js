import React, {useState, useEffect} from 'react';
import {View, FlatList, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {API, graphqlOperation} from 'aws-amplify';
import {listCars} from '../../graphql/queries';
//import cars from '../../assets/data/cars';
const HomeMap = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      //call the server
      try {
        const response = await API.graphql(graphqlOperation(listCars));
        //console.log(response.data.listCars.items);
        setCars(response.data.listCars.items);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCars();
  }, []); //[] makes sure that this is called whenever this component mount

  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  };
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{
        height: '100%',
        width: '100%',
      }}
      showsUserLocation={true}
      initialRegion={{
        latitude: 47.639674,
        longitude: 6.863849,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(car => {
        return (
          <Marker
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: 'contain',
                transform: [{rotate: `${car.heading}deg`}],
              }}
              source={getImage(car.type)}
            />
          </Marker>
        );
      })}
    </MapView>
  );
};

export default HomeMap;
