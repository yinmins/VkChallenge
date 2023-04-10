import React from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import {titleStyle} from './title.style';

export default function TitleScreen() {
  return (
    <View style={titleStyle.title_center}>
      <Text style={titleStyle.title_on} variant="headlineLarge">
        ONE
        <Text style={titleStyle.title_energy} variant="headlineLarge">
          NERGY
        </Text>
      </Text>
    </View>
  );
}
