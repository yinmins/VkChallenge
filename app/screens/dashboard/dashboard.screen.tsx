import React from 'react';
import {Card, Provider as PaperProvider} from 'react-native-paper';
import {Text} from 'react-native-paper';
import {SafeAreaView, View} from 'react-native';
import {styles} from './dashboard.style';
import TitleScreen from '../common/title/title.screen';

export default function HomeScreen({navigation, route}: any) {
  const table_header: any = ['Monthly Matrics', 'Weekly Matrics'];
  const table_data: any = [
    ['Average Consumption', '143.93kwh'],
    ['Average Cost', 'SGD 45.01'],
    ['Average Carbon Footprint', '58.39 kg'],
  ];
  return (
    <PaperProvider>
      <SafeAreaView>
        <TitleScreen />
        <Card>
          <Text>Dashboard</Text>
        </Card>
      </SafeAreaView>
    </PaperProvider>
  );
}
