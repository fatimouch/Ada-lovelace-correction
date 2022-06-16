import React from 'react';
import {Text,View,Button} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bienvenue sur le site</Text>
        <Button title='Voir la fiche' onPress={() =>{navigation.navigate('Secondary')}} />
      </View>
    );
  }