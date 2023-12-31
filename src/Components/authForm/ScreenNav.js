import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters';
import { useColorTheme } from '../../constants/Colors';


const ScreenNav = (props) => {
  const color = useColorTheme()
  return (
    <Pressable
      onPress={props.event}
      style={{ marginTop: 20, alignItems: "center" }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            color: "black",
            fontWeight: "500",
          }}
        >
          {props.text}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            color: colors.quadry,
            fontWeight: "500",
            marginLeft: moderateScale(3),
          }}
        >
          {props.colorText}
        </Text>
      </View>
    </Pressable>
  );
}

export default ScreenNav

const styles = StyleSheet.create({})