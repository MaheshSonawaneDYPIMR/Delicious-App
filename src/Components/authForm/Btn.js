import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { useColorTheme } from '../../constants/Colors';

const Btn = (props) => {
    const colors = useColorTheme()
  return (
    <Pressable
      onPress={props.event}
      style={{
        width: moderateScale(175),
        backgroundColor: colors.tertiary,
        padding: moderateScale(13),
        borderRadius: moderateScale(7),
        marginTop: moderateVerticalScale(50),
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 0.8,
        borderColor: "gray",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {props.text}
      </Text>
    </Pressable>
  );
}

export default Btn

const styles = StyleSheet.create({})