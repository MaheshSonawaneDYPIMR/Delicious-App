import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import CommonHeader from "../Components/comman/CommonHeader";
import { AntDesign } from "@expo/vector-icons";
import { useColorTheme } from "../constants/Colors";
import CartCard from "../Components/CartCompo/cartCard";
import { useDispatch, useSelector } from "react-redux";

import { fetchTotalProductQuantityRequest } from "../Redux-Store/Actions/cartItemsQ";
import { fetchProductQuantityRequest } from "../Redux-Store/Actions/cartProductQnty";
const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  
  const cakes = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cartItems.fullCartData);
  // console.log("Cart Items:", cartItems); // Check if cartItems has data
  // console.log("Cakes:", cakes); // Check if cakes has data
  const cart = useSelector((state) => state.cart);

  const mergedProducts = {};

  // Loop through cart items
  cartItems.forEach((cartItem) => {
    const { productId, quantity } = cartItem;

    // Find the cake with matching productId in cakes array
    const matchedCake = cakes.find((cake) => cake.uId === productId);
   // console.log(`Matching Cake for ${productId}:`, matchedCake); // Log matchedCake for each cartItem

    // If the product exists in cakes array, add it to the merged object
    if (matchedCake) {
      mergedProducts[productId] = {
        ...matchedCake,
        quantity: quantity,
      };
    }
  });

console.log("Merged Products:", mergedProducts); // Check mergedProducts
useEffect(() => {
 
}, [cartItems]);


  const colors = useColorTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <CommonHeader
        text={"Your Cart"}
        icon={<AntDesign name="arrowleft" size={24} color={colors.black} />}
        event={() => navigation.goBack()}
      />

     

      <View>
        {Object.entries(mergedProducts).map(([productId, product]) => (
          <View key={productId}>
            <View>
              <CartCard name={product.name} image={product.image} price={product.price * product.quantity} quantity={product.quantity} productId={product.uId}/>
            </View>
           
          </View>
        ))}
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: primary,
    flex: 1,
    marginTop: moderateVerticalScale(27.25),
  },
});
