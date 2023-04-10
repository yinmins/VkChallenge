import React from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';

export default function ApplicationScreen({navigation, route}: any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Application!</Text>
    </View>
  );
}
