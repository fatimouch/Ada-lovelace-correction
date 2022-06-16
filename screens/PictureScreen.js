import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function PictureScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png' }}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    img:
    {
      flexDirection: 'row',
      width: 350,
      height: '40%',
    }
  });