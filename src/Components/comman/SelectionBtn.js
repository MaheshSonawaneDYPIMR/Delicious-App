import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';


const SelectionBtn = ({btnText,pStyle,tStyle}) => {
  return (
    <View style={[styles.proInfo, { borderColor: colors.black }, pStyle]}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[styles.textInfo, { color: colors.black }, tStyle]}
      >
        {btnText}
      </Text>
    </View>
  );
  
}

export default SelectionBtn

const styles = StyleSheet.create({
     proInfo: {
    borderBottomWidth: 1,
    borderWidth: 0.8,
    height: moderateVerticalScale(28),
    justifyContent: "center",
    padding: moderateVerticalScale(0),
    
    borderRadius: 5,
    
  },
  textInfo: {
    fontSize: 17,
    fontWeight: "400"
  },
})