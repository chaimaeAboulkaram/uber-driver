import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './placeRow';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};
export default function DestinationSearch() {
  const navigation = useNavigation();

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  }, [originPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Current Location"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Current location"
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            separator: styles.separator,
            listView: styles.listView,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyD_GtiiSMmx3NtcENTLbQyuRiyLVyWxoqo',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />
        <GooglePlacesAutocomplete
          placeholder="where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autoCompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyD_GtiiSMmx3NtcENTLbQyuRiyLVyWxoqo',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        {/** Circle near Origin input*/}
        <View style={styles.circle}></View>
        {/** Line between dots*/}
        <View style={styles.line}></View>
        {/** Square near Destination input*/}
        <View style={styles.square}></View>
      </View>
    </SafeAreaView>
  );
}
