import React, { useState, useEffect } from "react";
import { Image, ActivityIndicator, TouchableOpacity, Text, View, Button, Switch, Animated, TouchableWithoutFeedback,SafeAreaView, ScrollView, } from "react-native";
import { commonStyles, darkStyles, lightStyles } from "../styles/commonStyles";
import { List, Card, Paragraph, Title } from 'react-native-paper';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const styles = lightStyles

function EventsHomeScreen({navigation}) {
    return (
      <View >
        <SafeAreaView>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Content>
           
          </Card.Content>
          <Card.Cover style={{marginTop: 5, height: 200
          }} source={{ uri: "https://mms.businesswire.com/media/20161128005875/en/557130/5/2738807_International_SOS_RGB_hr.jpg?download=1"}}/>
           {/* <Title style={{fontSize:30}}>Hi New Hire</Title> */}
           <Title></Title>
          <Paragraph style ={{fontSize:20}}>Welcome to the International SOS Sales & Marketing Team in Asia Pacific. </Paragraph>
          <Paragraph></Paragraph>
          <Paragraph style ={{fontSize:15}}>We look forward to accompany you on your learning journey over the next 365 days.</Paragraph>
          <Paragraph></Paragraph>
          <Paragraph>You will go through training on our Solutions from our Assistance Business Line as well as Medical Services Business Line.</Paragraph>
          <Paragraph></Paragraph>
          <Paragraph>I am sure you have questions so please check out some of the answers we have prepared for you by clicking on the FAQ button below</Paragraph>
          </Card>

      </ScrollView>
    </SafeAreaView>
    <Text></Text>
        <Button
            onPress={() =>navigation.navigate ("Some Questions")}
            title ="Click to FAQ"
        ></Button>
      </View>
    );
  }

function EventsSecondScreen({navigation}) {
    return (
<> 
        <View style={{ flex: 0, maxWidth:500, justifyContent: 'center', alignItems: 'left', overflow: 'hidden' }}>
            {/* <SafeAreaView> */}
            <Text>These are the questions that we have prepared for you to review</Text>
            <Text></Text>
            <Text>ABL Sales Solutions and Capabilities</Text>
            <Text></Text>
            <Text>Integration and Collaboration with </Text>
            <Text>our Health and Security Partners </Text>
            <Text style={{maxWidth:100, overflow:'hidden'}}>our Health and Security Partners YyyyyyyyyyyyyyyyyyyyybybbybybybbybybybybybybybybybybybybybyXOUCH</Text>
            <Text></Text>
            <Text></Text>
            {/* </SafeAreaView> */}
           </View>
             

<ScrollView style={{ flex: 0}} >
        <List.Section title= "Frequently Asked Questions">
          <List.Accordion
            title="What is this for?">
              <List.Item title ="Learn more about International SOS solutions" />
              <List.Item title ="Learn more about International SOS solutions" />
          </List.Accordion>
          <List.Accordion
            title ="Will there be pre-work for completion?">
              <List.Item title ="Yes, there is pre-work"></List.Item>
              <List.Item title ="You can find them at Sales Learning Platform"></List.Item>
            </List.Accordion>
            <List.Accordion
            title ="Where can I find more information?">
              <List.Item title ="Ping IntlSOS Sales Guru Bot on Telegram"></List.Item>
            </List.Accordion>
        </List.Section>
        <Button
            onPress={() =>navigation.navigate ("What You Do")}
            title ="Click to What You Should Do"
        ></Button>
        </ScrollView>
        
            
        </>
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
            title = "Back to Start Page"
            ></Button>
        </View>
    );
 }
  const Stack = createStackNavigator ();

  export default function EventsStack() {
      return (
          <Stack.Navigator>
              <Stack.Screen name="Your Personalised Learning Journey" component ={EventsHomeScreen}/>
              <Stack.Screen name="Some Questions" component ={EventsSecondScreen}/>
              <Stack.Screen name="What You Do" component ={EventsThirdScreen}/>
          </Stack.Navigator>
      )
  }
