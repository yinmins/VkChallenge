import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

import Legend from './legend.screen';
import {PieChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

function SituationPieChart({title, data}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.chartContainer}>
          <PieChart
            data={data}
            width={screenWidth}
            height={310}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'15'}
            center={[10, 50]}
            absolute
          />
        </View>
        {/* 
        <View style={styles.legendContainer}>
          {data.map(({name, color}: any) => {
            return <Legend key={name} name={name} color={color} />;
          })}
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -40,
    marginLeft: -30,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bodyContainer: {
    flexDirection: 'row',
    verticalAlign: 'top',
    marginBottom: -30,
  },
  chartContainer: {
    flex: 1,
    marginBottom: 50,
  },
  legendContainer: {
    flex: 1,
    marginTop: 10,
  },
});

export default SituationPieChart;
