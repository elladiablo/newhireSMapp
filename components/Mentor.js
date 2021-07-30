import React from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../screens/WelcomePage';
import { lightStyles } from '../styles/commonStyles';
import MentorScreen from '../screens/MentorScreen';

const MentorStack = createStackNavigator();

export default function Mentor() {

  const styles = lightStyles

  return (
  <MentorStack.Navigator>
    <MentorStack.Screen component={MentorScreen} name="Mentors" options={{
        title: "Intl.SOS Learning Mentors",
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerLeft: null
      }} />
      
  </MentorStack.Navigator>
  )
}
