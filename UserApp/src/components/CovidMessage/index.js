import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        La majorité des personnes atteintes de la COVID-19 ne ressentiront que
        des symptômes bénins ou modérés et guériront sans traitement
        particulier. Cependant, certaines tomberont gravement malades et auront
        besoin de soins médicaux.
      </Text>
      <Text style={styles.learnMore}> Learn More</Text>
    </View>
  );
};

export default CovidMessage;
