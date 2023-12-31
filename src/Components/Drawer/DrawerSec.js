import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateVerticalScale } from "react-native-size-matters";
import { useColorTheme } from "../../constants/Colors";


const DrawerSec = (props) => {
  colors =useColorTheme()
  
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: moderateVerticalScale(10),
        alignItems: "center",
        width: "70%",
        alignContent: "center",
      }}
    >
      <View
        style={{
          marginRight: moderateVerticalScale(30),
          height: moderateVerticalScale(35),
          width: moderateVerticalScale(35),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>{props.icon}</View>
      </View>
      <View
        style={{
          alignSelf: "center",
          height: moderateVerticalScale(35),
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            color:colors.black
          }}
        >
          {props.name}
        </Text>
      </View>
    </View>
  );
};

export default DrawerSec;

const styles = StyleSheet.create({});
