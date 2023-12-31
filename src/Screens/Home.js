import React from "react";
import { ScrollView, StyleSheet, Text, View,StatusBar } from "react-native";
import CircularCategories from "../Components/Homecompo/CircularCategories";
import Categories from "../constants/Catagories.js";
import Header from "../Components/Homecompo/Header";
import SlidingImages from '../Components/Homecompo/SlidingImages.js'
import SearchBar from "../Components/Homecompo/SearchBar.js";
import ProductSlider from "../Components/Homecompo/ProductSlider.js";
import {cakes2} from "../constants/CakesData.js";
import { moderateVerticalScale } from "react-native-size-matters";
import OfferBaner from "../Components/Homecompo/Categories.js";
import { useEffect } from "react";
import { useColorTheme } from "../constants/Colors.js";
import { CakeCategories } from "../constants/CakeCategoris.js";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const colors = useColorTheme()
  const cakes = useSelector((state) => state.products.products);
  //console.log("CAKES",cakes)
    return (
    <View style={[styles.container,{backgroundColor:colors.primary}]}>
      <View>
        <Header />
        <ScrollView style={{ marginBottom: moderateVerticalScale(45) }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.Press}>
              {Categories.map((item, index) => (
                <CircularCategories
                  key={index.toString()} // Provide a unique key
                  name={item.name}
                  image={item.image}
                  event={item.event}
                />
              ))}
            </View>
          </ScrollView>
          <SearchBar cakes={cakes} />
          <SlidingImages />
          <ProductSlider cakesData={cakes2} text="Famous Cakes" />
          <ProductSlider cakesData={cakes2} text="Most Liked" />
          <OfferBaner data={CakeCategories} text={"Categories"}/>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
   // backgroundColor: primary,
    flex: 1,
    marginTop: moderateVerticalScale(27.250),
  },
  Press: {
    flexDirection: "row",
  },
});
