import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView, Text} from 'react-native';
import Card from '../common/card/card.screen';
import TitleScreen from '../common/title/title.screen';

const SettingsScreen = ({navigation, route}: any) => {
  return (
    <PaperProvider>
      <SafeAreaView>
        <TitleScreen />
        <Card>
          <Text>Setting Screen</Text>
        </Card>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default SettingsScreen;
