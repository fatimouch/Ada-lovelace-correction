import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default function PersonnageScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.txt}>Ada Lovelace, de son nom complet Augusta Ada King, comtesse de
                Lovelace, née Ada Byron le 10 décembre 1815 à Londres et morte
                le 27 novembre 1852 à Marylebone dans la même ville, est une
                pionnière de la science informatique.
        </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    txt:
    {
      flexDirection: 'row',
      padding: 52,
    }
  });