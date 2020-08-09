import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function details({ navigation }) {
  const desc = navigation.getParam('desc');
  
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          { navigation.getParam('id') }
        </Text>
        <Text>{ navigation.getParam('f_name') }</Text>
        <Text>{ navigation.getParam('l_name') }</Text>
        <Text>{ navigation.getParam('desc') }</Text>
      </Card>
    </View>
  );
}

