import React, { useState, useEffect } from "react";
import { Image, ActivityIndicator, TouchableOpacity, Text, View, Button, Switch, Animated, TouchableWithoutFeedback } from "react-native";
import { commonStyles, darkStyles, lightStyles } from "../styles/commonStyles";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const styles = lightStyles

function EventsHomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Day One Schedule</Text>
        <Text></Text>
        <Text>1. The Intl SOS Journey</Text>
        <Text></Text>
        <Text>2. Business Overview</Text>
        <Text></Text>
        <Text>3. First Call and our integrated approach</Text>
        <Text></Text>
        <Text></Text>
        <Button
            onPress={() =>navigation.navigate ("Events Second")}
            title ="Click to Second Day"
        ></Button>
      </View>
    );
  }

function EventsSecondScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Day Two Schedule</Text>
            <Text></Text>
            <Text>ABL Sales Solutions and Capabilities</Text>
            <Text></Text>
            <Text>Integration and Collaboration with </Text>
            <Text>our Health and Security Partners</Text>
            <Text></Text>
            <Text></Text>
            <Button
            onPress={() =>navigation.navigate ("Events Third")}
            title ="Click to Third Day"
        ></Button>
        </View>
    );
 }

 function EventsThirdScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Day Three Schedule</Text>
            <Text></Text>
            <Text>Let's party</Text>
            <Text>Let's Boogie</Text>
            <Text>Let's be silly</Text>
            <Text></Text>
            <Button
            onPress = {() => navigation.popToTop()}
            title = "Back to top"
            ></Button>
        </View>
    );
 }
  const Stack = createStackNavigator ();

  export default function EventsStack() {
      return (
          <Stack.Navigator>
              <Stack.Screen name="Events Home" component ={EventsHomeScreen}/>
              <Stack.Screen name="Events Second" component ={EventsSecondScreen}/>
              <Stack.Screen name="Events Third" component ={EventsThirdScreen}/>
          </Stack.Navigator>
      )
  }
