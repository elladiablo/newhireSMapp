import React from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../screens/WelcomePage';
import { lightStyles } from '../styles/commonStyles';

const JourneyStack = createStackNavigator();

export default function Journey() {

  const styles = lightStyles

  return (
  <JourneyStack.Navigator>
    <JourneyStack.Screen component={WelcomePage} name="Welcome" options={{
        title: "Welcome to Intl. SOS",
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerLeft: null
      }} />
      
  </JourneyStack.Navigator>
  )
}