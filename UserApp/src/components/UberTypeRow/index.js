import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
export default function UberTypeRow(props) {
  const {type, onPress, isSelected} = props;
  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    }
    return require('../../assets/images/UberXL.jpeg');
  };
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? '#efefef' : 'white',
        },
      ]}>
      {/**Image */}
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}
          <Ionicons name={'person'} size={16} color={'#484648'} />3
        </Text>
        <Text style={styles.time}>8:03 PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#2cba6b'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </Pressable>
  );
}
