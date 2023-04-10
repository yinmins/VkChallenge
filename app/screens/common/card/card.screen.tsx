import React from 'react';
import {View} from 'react-native';
import {cardStyles} from './card.style';

export default function Card(props: any) {
  return (
    <View style={cardStyles.card}>
      <View style={cardStyles.cardContent}>{props.children}</View>
    </View>
  );
}
