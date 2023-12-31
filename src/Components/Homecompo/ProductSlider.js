import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useRef } from "react";

import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from "react-native-size-matters";
import { black, secondary } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useColorTheme } from "../../constants/Colors";


const ProductSlider = (props) => {

 const scrollViewRef = useRef();

 const scrollToTop = () => {
   scrollViewRef.current.scrollTo({ y: 0, animated: true });
 };

 

 
  const colors=useColorTheme()
  const { cakesData } = props;
  const { text } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.Heading}>
        <View style={[styles.Lines, { borderColor: colors.black }]}></View>
        <View>
          <Text style={[styles.Text, { color: colors.black }]}>{text}</Text>
        </View>
        <View style={[styles.Lines, { borderColor: colors.black }]}></View>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cakesData.map((cake) => (
            <Pressable
              onPress={() =>
                navigation.navigate("ProductInfo", { productData: cake })
              }
              key={cake.id}
              style={{
                borderRadius: 10,
                padding: 0,
                margin: moderateScale(3),
                backgroundColor: colors.secondary,
                justifyContent: "center",
                alignItems: "center",
                width: moderateScale(135),
                height: moderateVerticalScale(185),
              }}
            >
              <View style={{overflow:'hidden',borderRadius:11,borderColor:colors.black,borderWidth:0.8}}>
                <Image
                  source={{ uri: cake.image }}
                  style={[styles.image, { borderColor: colors.black }]}
                />

                <View style={[styles.nameBox, { borderColor: colors.black }]}>
                  <Text
                    key={cake.id}
                    style={[styles.Name, { color: colors.black }]}
                  >
                    {cake.name}
                  </Text>
                  <Text style={[styles.price, { color: colors.black }]}>
                    Rs.{cake.price}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductSlider;

const styles = StyleSheet.create({
  Container: {
    margin: moderateVerticalScale(5),
    justifyContent: "center",
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

  image: {
   flex:3,
   
   // borderColor:black
  },
  nameBox: {
    textAlign: "center",
    width: moderateScale(135),
    justifyContent: "center",
    textAlignVertical: "center",
    flex:1,
    
    padding:moderateScale(5)
  },
  Name: {
    marginRight: 5,
    height: moderateVerticalScale(30),
    textAlign: "center",
    fontWeight: "500",
    fontSize: 13,
  },
  price: {
    marginRight: 5,
    height: moderateVerticalScale(20),
    textAlign: "center",
    fontWeight: "500",
    fontSize: 15,
  },
});
