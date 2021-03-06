import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BlogStack from '../components/BlogStack';
import AccountStack from '../components/AccountStack';
import Journey from '../components/Journey';
import Mentor from '../components/Mentor';
import Training from '../components/Training';
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function LoggedInStack() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Blog') {
            iconName = "comments"
          }
          
else if (route.name === 'Training') {
  iconName = "globe"
}

          else if (route.name === 'Journey') {
            iconName = "home"
          }

          else if (route.name === 'Mentor') {
            iconName = "user-plus"
          }

          else if (route.name === 'Settings') {
            iconName = "cog"
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'red',
        style: {
          backgroundColor: "blue",
        }
      }}>
        <Tab.Screen name="Journey" component={Journey} />
        <Tab.Screen name = "Training" component={Training}/>
        <Tab.Screen name="Mentor" component={Mentor}/>
        <Tab.Screen name="Blog" component={BlogStack} />
        <Tab.Screen name="Settings" component={AccountStack} />
      </Tab.Navigator>
  )
} 