import React, { useState, useEffect } from "react";
import { Image, ActivityIndicator, TouchableOpacity, Text, View, Button, Switch, Animated, TouchableWithoutFeedback } from "react-native";
import { commonStyles, darkStyles, lightStyles } from "../styles/commonStyles";

export default function WelcomePage({ navigation }) {

    const styles = lightStyles

return (
    <View style={[styles.container, { alignItems: "center" }]}>
      <Text style={[styles.title, styles.text, {marginTop: 30}]}>
        HELLO!
      </Text>
      
      <Text>
        Welcome to International SOS Sales & Marketing!
      </Text>

      <Button
            onPress={() =>navigation.navigate ("Events Second")}
            title ="Click to Sales Platform"
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

  