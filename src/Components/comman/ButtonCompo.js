import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { useColorTheme } from "../../constants/Colors";


const ButtonCompo = (props) => {
  const colors = useColorTheme()
  return (
    <View style={{ alignItems: "center" }}>
      <Pressable
        style={[styles.logout, { backgroundColor: props.color,borderColor:colors.black }]}
        onPress={props.event}
      >
        <Text style={[styles.text,{color:colors.black}]}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonCompo;

const styles = StyleSheet.create({
  logout: {
    borderWidth: 1,
    width: "80%",
    borderRadius: moderateScale(9),
    padding: moderateVerticalScale(10),
    marginBottom: moderateVerticalScale(10),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    
    fontSize: 18,
    fontWeight: "500",
  },
});
