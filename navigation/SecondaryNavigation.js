import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import PictureScreen from '../screens/PictureScreen';
import PersonnageScreen from '../screens/PersonnageScreen';
import BiographieScreen from '../screens/BiographieScreen';

export default function SecondaryNavigation () {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Picture" options={{ title: 'photo' }} component={PictureScreen} />
          <Drawer.Screen name="Personnage" component={PersonnageScreen} />
          <Drawer.Screen name="Biographie" component={BiographieScreen} />
        </Drawer.Navigator>
    )
}