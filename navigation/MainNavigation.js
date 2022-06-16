import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import SecondaryNavigation from "./SecondaryNavigation";


export default function MainNavigation () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ title: 'Accueil' }} component={HomeScreen} />
                <Stack.Screen name="Secondary" options={{ title: 'deuxieme' }} component={ SecondaryNavigation } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}