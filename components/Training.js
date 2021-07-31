import React from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../screens/WelcomePage';
import { lightStyles } from '../styles/commonStyles';
import SalesPlatform from '../screens/SalesPlatform';

const TrainingStack = createStackNavigator();

export default function () {

  const styles = lightStyles

  return (
  <TrainingStack.Navigator>
    <TrainingStack.Screen component={SalesPlatform} name="Training" options={{
        title: "Training",
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerLeft: null
      }} />
      
  </TrainingStack.Navigator>
  )
}