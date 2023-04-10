import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import SettingsScreen from '../../settings/settings.screen';
import ApplicationScreen from '../../application/application.screen';
import DashboardScreen from '../../dashboard/dashboard.screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import HomeScreen from '../../home/home.screen';

const Tab = createMaterialBottomTabNavigator();
export default function BottomTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Application"
        component={ApplicationScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="power-plug" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="chart-box-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
