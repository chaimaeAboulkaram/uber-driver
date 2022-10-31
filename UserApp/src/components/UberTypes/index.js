import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assets/data/types';
export default function UberTypes({typeState, onSubmit }) {
  const [selectedType, setSelectedType] = typeState
  
  return (
    <View>
      {typesData.map(type => (
        <UberTypeRow
          type={type}
          key={type.id}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      ))}
      <Pressable onPress={onSubmit } style={styles.confirmButton}>
        <Text style={styles.buttonText}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
}
