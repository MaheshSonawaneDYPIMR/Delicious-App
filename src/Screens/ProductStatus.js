import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { useColorTheme } from "../constants/Colors";
import { useRoute } from "@react-navigation/native";

const ProductStatus = () => {
  const colors = useColorTheme()
  const route = useRoute();
  const { statuss } = route.params;
 
  const [status, setStatus] = useState();
  const [bgStatus, setBgStatus] = useState();

  const progress1 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;
  const start1 = () => {
    Animated.timing(progress1, {
      toValue: moderateVerticalScale(100),
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const start2 = () => {
    Animated.timing(progress2, {
      toValue: moderateVerticalScale(100),
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const start3 = () => {
    Animated.timing(progress3, {
      toValue: moderateVerticalScale(100),
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const handleStatusChange = async () => {
    

    const delay = async (ms) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    switch (status) {
      case 2:
        start1();
        await delay(3000);
        setBgStatus(2);
        break;

      case 3:
        start1();
        await delay(3000);

        start2();
        setBgStatus(2);
        await delay(3000);
        setBgStatus(3);
        break;

      case 4:
         start1();
        await delay(3000);
        start2();
        setBgStatus(2);
        await delay(3000);
        start3();
        setBgStatus(3);
        await delay(3000);
        setBgStatus(4);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setStatus(statuss);
    handleStatusChange();
  }, [status]);

  return (
    <View
      style={{
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: moderateVerticalScale(13),
          borderWidth: 0.8,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.secondary,
          borderRadius: 7,
          alignSelf: "center",
          borderColor: colors.black,
          marginBottom: moderateVerticalScale(15),
        }}
      >
        <Text style={[styles.heading, { color: colors.black }]}>Product:</Text>
        <Text style={{ fontSize: 15, color: colors.black }}>Product Name</Text>
      </View>

      <View
        style={{
          alignSelf: "center",
          borderWidth: 0.8,

          borderColor: colors.black,
          padding: moderateVerticalScale(10),
          borderRadius: 17,
          backgroundColor: colors.secondary,
          height: "70%",
          width: "85%",
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: moderateVerticalScale(30),
            }}
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      status > 0 ? colors.quadry : colors.secondary,
                  },
                ]}
              >
                <Text style={[styles.circleText, { color: colors.white }]}>
                  1
                </Text>
              </View>
              <View style={styles.lineContainer}>
                <View
                  style={[styles.line1, { backgroundColor: colors.white }]}
                ></View>
                <Animated.View
                  style={[
                    styles.line2,
                    { height: progress1, backgroundColor: colors.quadry },
                  ]}
                ></Animated.View>
              </View>
            </View>
            <View>
              <View style={styles.infoContainer}>
                <Text style={[styles.heading,{color:colors.black}]}>Order Placed:</Text>
                <Text style={[styles.content,{color:colors.black}]}>
                  Your order is confirmed! We're preparing it for shipment. Look
                  out for a confirmation email soon.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: moderateVerticalScale(30),
            }}
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      bgStatus > 1 ? colors.quadry : colors.secondary,
                  },
                ]}
              >
                <Text style={[styles.circleText, { color: colors.white }]}>
                  2
                </Text>
              </View>
              <View style={styles.lineContainer}>
                <View
                  style={[styles.line1, { backgroundColor: colors.white }]}
                ></View>
                <Animated.View
                  style={[
                    styles.line2,
                    { height: progress2, backgroundColor: colors.quadry },
                  ]}
                ></Animated.View>
              </View>
            </View>
            <View>
              <View style={styles.infoContainer}>
                <Text
                  style={[
                    styles.heading,
                    { color: bgStatus > 1 ? colors.black : colors.white },
                  ]}
                >
                  Shipped:
                </Text>
                <Text
                  style={[
                    styles.content,
                    { color: bgStatus > 1 ? colors.black : colors.white },
                  ]}
                >
                  Exciting news! Your order is on its way. Watch for a tracking
                  number in your inbox shortly. updated.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: moderateVerticalScale(30),
            }}
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      bgStatus > 2 ? colors.quadry : colors.secondary,
                  },
                ]}
              >
                <Text style={[styles.circleText, { color: colors.white }]}>
                  3
                </Text>
              </View>
              <View style={styles.lineContainer}>
                <View
                  style={[styles.line1, { backgroundColor: colors.white }]}
                ></View>
                <Animated.View
                  style={[
                    styles.line2,
                    { height: progress3, backgroundColor: colors.quadry },
                  ]}
                ></Animated.View>
              </View>
            </View>
            <View>
              <View style={styles.infoContainer}>
                <Text
                  style={[
                    styles.heading,
                    { color: bgStatus > 2 ? colors.black : colors.white },
                  ]}
                >
                
                  Out for Delivery:
                </Text>
                <Text
                  style={[
                    styles.content,
                    { color: bgStatus > 2 ? colors.black : colors.white },
                  ]}
                >
                  Your package is en route! Keep an eye out for our delivery
                  team. Ensure someone's there to receive it.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: moderateVerticalScale(30),
            }}
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      bgStatus > 3 ? colors.quadry : colors.secondary,
                  },
                ]}
              >
                <Text style={[styles.circleText, { color: colors.white }]}>
                  4
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.infoContainer}>
                <Text
                  style={[
                    styles.heading,
                    { color: bgStatus > 3 ? colors.black : colors.white },
                  ]}
                >
                  {" "}
                  Delivered:
                </Text>
                <Text
                  style={[
                    styles.content,
                    { color: bgStatus > 3 ? colors.black : colors.white },
                  ]}
                >
                  Success! Your order has been delivered. Enjoy your items!
                  Reach out to support for any issues.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductStatus;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateVerticalScale(27.25),
  },
  circle: {
    height: moderateVerticalScale(25),
    width: moderateVerticalScale(25),
    borderRadius: moderateVerticalScale(12.5),
    
  },
  circleText: {
    fontSize: 19,
    //color: colors.white,
    alignSelf: "center",
  },
  lineContainer: {
    position: "relative",
  },
  line1: {
    width: moderateVerticalScale(6),
    height: moderateVerticalScale(100),
    marginTop: moderateVerticalScale(0),
  //  backgroundColor: "white",
  },
  line2: {
    position: "absolute",
    left: 0,
    width: moderateVerticalScale(6),
    marginTop: moderateVerticalScale(0),
   // backgroundColor: colors.quadry,
  },
  heading: {
    fontSize: 16,
    fontWeight: "500",
    //
  },
  infoContainer: {
    justifyContent: "flex-start",
    marginLeft: moderateVerticalScale(30),
  },
  content: {
    width: moderateScale(200),
  },
});
