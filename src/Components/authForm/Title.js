import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = (props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",

        alignSelf: "center",
      }}
    >
      <Text style={{ fontSize: 30, color: colors.quadry, fontWeight: "bold" }}>
       {props.title}
      </Text>
    </View>
  );
}

export default Title

const styles = StyleSheet.create({})