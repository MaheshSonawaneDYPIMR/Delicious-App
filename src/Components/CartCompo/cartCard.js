import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import { moderateScale,moderateVerticalScale } from 'react-native-size-matters';
import { useColorTheme } from '../../constants/Colors';
import { useDispatch, useSelector } from "react-redux";
import { addToCartRequest } from '../../Redux-Store/Actions/cart';
import { removeFromCartRequest } from '../../Redux-Store/Actions/cartRemove';
import { useState } from 'react';
const CartCard = (props) => {
  const colors = useColorTheme();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAddTOCart = (productId) => {
    if (user.userData === null) {
      Alert.alert(
        "Register",
        "Please Register to add Products to Your Cart...",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Register",
            onPress: () => navigation.navigate("Register"),
          },
        ]
      );
    } else {

      dispatch(addToCartRequest(user.userData.id, productId));
    }
  };
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCartRequest(user.userData.id, productId));
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: moderateScale(10),
        padding: moderateScale(10),
        borderWidth: 0.8,
        borderRadius: 14,
        backgroundColor: colors.secondary,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ borderRadius: 7, overflow: "hidden" }}>
          <Image
            source={{
              uri: props.image,
            }}
            style={{
              height: moderateScale(85),
              width: moderateScale(85),
              borderRadius: 7,
            }}
          />
        </View>
        <View
          style={{ marginLeft: moderateScale(15), width: moderateScale(125) }}
        >
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontSize: 22, fontWeight: "500" }}
          >
            {props.name}
          </Text>
          <Text style={{ fontSize: 14, color: colors.gray }}>(With love)</Text>
          <Text
            style={{ fontSize: 18, color: colors.black, fontWeight: "400" }}
          >
            {props.price}
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "center", width: moderateScale(100) }}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              backgroundColor: colors.primary,
              height: moderateScale(40),
              width: moderateScale(40),
              alignItems: "center",
              justifyContent: "center",
              margin: moderateScale(2),
              borderRadius: moderateScale(7),
              borderWidth: 0.3,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              {props.quantity}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => handleRemoveFromCart(props.productId)}
            style={{
              height: moderateScale(22),
              backgroundColor: colors.tertiary,
              borderWidth: 0.3,
              width: moderateScale(44),
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: moderateScale(22),
              borderTopLeftRadius: moderateScale(22),
              margin: moderateScale(2),
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "700" }}>-</Text>
          </Pressable>
          <Pressable
            onPress={() => handleAddTOCart(props.productId)}
            style={{
              height: moderateScale(22),
              backgroundColor: colors.tertiary,
              borderWidth: 0.3,
              width: moderateScale(44),
              justifyContent: "center",
              alignItems: "center",
              borderBottomRightRadius: moderateScale(22),
              borderTopRightRadius: moderateScale(22),
              margin: moderateScale(2),
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "700" }}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default CartCard

const styles = StyleSheet.create({})