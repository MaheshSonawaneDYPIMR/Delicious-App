import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import {chocolateCake,delicios,snaks,dessert} from '../../assests/Images/Banner/BannerExp.js'
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters";

const Carousel = () => {
  const images = [
  chocolateCake,delicios,snaks,dessert,
  ];
  return (
    <View style={{marginVertical:moderateVerticalScale(5)}}>
      <SliderBox
        images={images}
        sliderBoxHeight={200}
        onCurrentImagePressed={(index) =>
          console.warn(`image ${index} pressed`)
        }
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoPlay={true}
        autoPlayWithInterval={3000}
        circleLoop
        resizeMethod={"resize"}
        resizeMode={"cover"}
        
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "rgba(128, 128, 128, 0.92)",
        }}
        ImageComponentStyle={{ borderRadius: 15, width: "97%", marginTop: 5 }}
        imageLoadingColor="#2196F3"
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
