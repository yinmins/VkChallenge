import React, {useState} from 'react';
import {Button, Text, Provider as PaperProvider} from 'react-native-paper';
import {Dimensions, SafeAreaView, View} from 'react-native';
import Card from '../common/card/card.screen';
import {homeStyles} from './home.style';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TitleScreen from '../common/title/title.screen';
import SituationPieChart from '../chart/piechart.screen';
import {pieData} from '../../data/bootstrap.data';

export default function HomeScreen({navigation, route}: any) {
  const screenWidth = Dimensions.get('window').width;
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
  };
  const [date, setDate] = useState(new Date(1598051730000));
  const lightingIcon = (
    <MaterialCommunityIcons name={'lightning-bolt-outline'} />
  );
  const downIcon = <MaterialCommunityIcons name={'down'} />;
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <PaperProvider>
      <SafeAreaView>
        <TitleScreen />
        <Card>
          <Button
            icon="arrow-down"
            mode="contained"
            buttonColor="#ffff"
            textColor="#469C05"
            onPress={() => showDatepicker()}>
            {date.toLocaleString()}
          </Button>
        </Card>
        <Card>
          <SituationPieChart
            title="Monthly Expense"
            data={pieData}
            fillShadowGradient="#00b4d8"
            color="#0077b6"
          />
        </Card>
        <Card>
          <Text>Your Consumption Data</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Icon.Button
              name="lightning-bolt-outline"
              backgroundColor="#469C05">
              8.35kWaH
            </Icon.Button>
            <Text style={homeStyles.text_percent}>
              S$<Text>2.61 SGD</Text>
            </Text>
          </View>
        </Card>
        <Card>
          <Text>
            Comparison to the similar Condominium household in NEA study
          </Text>
          <Text style={homeStyles.text_percent}>Difference 20.63%</Text>
        </Card>
      </SafeAreaView>
    </PaperProvider>
  );
}
