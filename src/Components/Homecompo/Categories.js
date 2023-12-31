import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import { useColorTheme } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const OfferBaner = (props) => {
  const { data } = props;
  const { text } = props;
  const colors = useColorTheme();
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.Container}>
        <View style={styles.Heading}>
          <View style={[styles.Lines, { borderColor: colors.black }]}></View>
          <View>
            <Text style={[styles.Text, { color: colors.black }]}>{text}</Text>
          </View>
          <View style={[styles.Lines, { borderColor: colors.black }]}></View>
        </View>
      </View>
      <View style={styles.gridContainer}>
        {data.map((item) => (
          <Pressable
            onPress={() =>
              navigation.navigate("CategoryProducts", {
                category: item.name,
              })
            }
            key={item.id}
            style={[
              styles.gridItem,
              {
                overflow: "hidden",
                borderWidth: 0.8,
                borderRadius: 13,
                borderColor: colors.black,
              },
            ]}
          >
            <Image source={{ uri: item.image }} style={[styles.image, {}]} />
            <View
              style={{
                padding: scale(7),
                backgroundColor: colors.secondary,
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text style={[styles.Cname, { color: colors.black }]}>
                {item.name}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default OfferBaner;

const styles = StyleSheet.create({
  Container: {
    margin: moderateVerticalScale(5),
    justifyContent: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: moderateVerticalScale(5),
  },
  Heading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: moderateVerticalScale(5),
  },
  Lines: {
    borderWidth: moderateVerticalScale(1.5),
    flex: 1,
    height: moderateVerticalScale(1.5),
    //borderColor: black,
    margin: moderateVerticalScale(5),
  },
  Text: {
    fontSize: 20,
    fontWeight: "600",
  },
  Cname: {
    fontSize: 17,
    fontWeight: "500",
  },
  gridItem: {
    width: "48%", // Adjust the width based on your design
    height: moderateVerticalScale(200),
    alignItems: "center",
    justifyContent: "center",

    marginVertical: 8,
    flexDirection: "column",
  },
  image: {
    flex: 3,
    width: "100%",

    //borderColor: black,
  },
});
