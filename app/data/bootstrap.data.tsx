import {AirPollution} from '../models/airpollution';

export const AirConditioning = [
  new AirPollution('Others', '5.2%', 'rgb(171,247,255)'),
  new AirPollution('rigerator', '11.3%', 'rgb(207,255,191)'),
  new AirPollution('heater', '17.9%', 'rgb(250,215,165)'),
  new AirPollution('Air Conditioning', '65.6%', 'rgb(248,174,175)'),
];

export const pieData = [
  {
    name: 'Others',
    population: 5,
    color: 'rgb(171,247,255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'rigerator',
    population: 11,
    color: 'rgb(207,255,191)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'heater',
    population: 17,
    color: 'rgb(250,215,165)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Air Conditioning',
    population: 65,
    color: 'rgb(248,174,175)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];
