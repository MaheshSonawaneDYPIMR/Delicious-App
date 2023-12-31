import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { useColorTheme } from "../../constants/Colors.js";
import StartRating from './StartRating.js';
import { useNavigation } from "@react-navigation/native";
import CommonHeader from '../comman/CommonHeader.js';
import { AntDesign } from "@expo/vector-icons";

const ProductGrid = (props) => {
  const colors = useColorTheme();
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: moderateVerticalScale(45),
            backgroundColor:colors.primary
          }}
        >
          {props.products.map((product) => (
            <Pressable
              onPress={() =>
                navigation.navigate("ProductInfo", { productData: product })
              }
              key={product.id}
              style={{
                borderWidth: 0.8,
                height: moderateVerticalScale(250),
                width: moderateVerticalScale(160),
                flexDirection: "column",
                marginHorizontal: moderateScale(8),
                borderColor: colors.black,
                margin: moderateVerticalScale(10),
                borderRadius: 9,
                overflow: "hidden",
                backgroundColor: colors.secondary,
              }}
            >
              <Image
                source={{
                  uri: product.image,
                }}
                style={{ height: "73%", width: "100%" }}
              />
              <View
                style={{
                  margin: moderateScale(5),
                  marginTop: moderateScale(2),
                  flexWrap: "wrap",
                }}
              >
                <View>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontSize: 15 }}
                  >
                    {product.name}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 16, color: colors.green }}>
                    {product.price}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        alignSelf: "flex-end",
                        flexDirection: "row",
                        marginLeft: moderateScale(5),
                      }}
                    >
                      <View
                        style={{
                          position: "relative",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 13,
                            marginRight: moderateScale(2),
                            color: colors.gray,
                          }}
                        >
                          $700
                        </Text>
                        <View
                          style={{
                            position: "absolute",
                            width: "100%",
                            borderBottomColor: colors.gray,
                            borderBottomWidth: 1,
                            top: "50%",
                          }}
                        ></View>
                      </View>
                      <Text style={{ fontSize: 13, color: colors.green }}>
                        16%OFF
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: colors.star,
                      fontSize: 13,
                      marginRight: moderateScale(2),
                    }}
                  >
                    {product.averageRating}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <StartRating
                      rating={product.averageRating}
                      size={12}
                      color={colors.star}
                    />
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: colors.gray,
                          fontSize: 12,
                          marginLeft: moderateScale(2),
                        }}
                      >
                        ({product.reviews.length}))
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

export default ProductGrid

const styles = StyleSheet.create({

})