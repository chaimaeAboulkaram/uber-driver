import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Auth} from 'aws-amplify';
export default function CustomeDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: 'black', padding: 15}}>
        {/**User Row */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#c1c1c1',
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{color: 'white', fontSize: 24}}>User name</Text>
            <Text style={{color: '#343436'}}>5.00 *</Text>
          </View>
        </View>
        {/**Messages Row */}
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#222222',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Pressable onPress={() => console.warn('Messages')}>
            <Text style={{color: 'white', paddingVertical: 5}}>Messages</Text>
          </Pressable>
        </View>
        {/**Do more */}
        <Pressable onPress={() => console.warn('Do more')}>
          <Text style={{color: '#6f6f70', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </Pressable>
        {/**Make money */}
        <Pressable onPress={() => console.warn('Make money driving')}>
          <Text style={{color: 'white', paddingVertical: 5}}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
      {/**Log Out */}
      <Pressable onPress={() => Auth.signOut()}>
        <Text style={{padding: 5, paddingLeft: 20}}>Log Out</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
}
