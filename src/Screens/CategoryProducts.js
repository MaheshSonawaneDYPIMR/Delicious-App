import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useColorTheme } from "../constants/Colors";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { useNavigation, useRoute } from "@react-navigation/native";
import CommonHeader from "../Components/comman/CommonHeader.js";

import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import ProductGrid from "../Components/ProductRelated/ProductGrid.js";
import { useState } from "react";


const CategoryProducts = () => {
  const colors = useColorTheme();
  const route = useRoute();
  const { category } = route.params;
  const navigation = useNavigation();
  const cakes = useSelector((state) => state.products.products);
 
  const [loading, setLoading] = useState(true);

  function getCakesByCategory(categoryName) {
    return cakes.filter((cake) => cake.category === categoryName);
  }

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const categoryProducts = await getCakesByCategory(category);
        // Simulated delay to showcase the loading indicator
        setTimeout(() => {
          setLoading(false);
        }, 10); // Replace this with your actual data fetching logic
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [category, cakes]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const categoryProducts = getCakesByCategory(category);

  return (
    <View
      style={{
        marginTop: moderateVerticalScale(27.25),
        backgroundColor: "#FFF5EE",
      }}
    >
      <CommonHeader
        text={category}
        icon={<AntDesign name="arrowleft" size={24} color={colors.black} />}
        event={() => navigation.goBack()}
      />
      <ProductGrid products={categoryProducts} category={category} />
    </View>
  );
};

export default CategoryProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
