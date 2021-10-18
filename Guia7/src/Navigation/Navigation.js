import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/Home';
import AboutStack from '../screens/About';
import ContactStack from '../screens/Contact';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab=createBottomTabNavigator();
export default function Navigation(){
return(
<Tab.Navigator>
<Tab.Screen name="Gatos" component={HomeStack} options={{
          tabBarLabel: 'Gatos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cat" color={color} size={size} />
          ),
        }}/>
<Tab.Screen name="Perros" component={AboutStack}  options={{
          tabBarLabel: 'Perros',
          tabBarIcon: ({ color, size }) => (
            <Icon name="dog" color={color} size={size} />
          ),
        }}/>
</Tab.Navigator>
);
}