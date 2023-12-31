import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { useColorTheme } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
const CircularCategories = ({ name, image, event }) => {
  const navigation = useNavigation()
  const colors=useColorTheme()
  return (
    <View style={styles.Container}>
      <Pressable
        onPress={() =>
          navigation.navigate("CategoryProducts", {
            category: event,
          })
        }
      >
        <View>
          <Image
            style={[
              styles.circular,
              { borderColor: colors.gray, backgroundColor: colors.secondary },
            ]}
            source={image}
          />
        </View>
        <View>
          <Text style={[styles.text, { color: colors.black }]}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CircularCategories;

const styles = StyleSheet.create({
  Container: {
    height: verticalScale(70),
    width: verticalScale(70),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical:verticalScale(5)
  },
  circular: {
    height: verticalScale(60),
    width: verticalScale(60),
    borderRadius: verticalScale(60) / 2,
    borderWidth: 1,
    //borderColor:'gray',
   
    marginHorizontal: 10,
    marginBottom: 2,
  //  backgroundColor: secondary,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "500",
  },
});
