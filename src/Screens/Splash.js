import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
  }, []);
  return (
    <View>
      <Text style={{ fontSize: 50, marginTop: 50 }}>Splash</Text>
    </View>
  );
};

export default Splash;
