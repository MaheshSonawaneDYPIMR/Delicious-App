import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons";
import ProductSlider from "../Components/Homecompo/ProductSlider";
import OfferBaner from "../Components/Homecompo/Categories";
import { useColorTheme } from "../constants/Colors";
import ButtonCompo from "../Components/comman/ButtonCompo";
import StartRating from "../Components/ProductRelated/StartRating";
import { useDispatch, useSelector } from "react-redux";
import { cakes2 } from "../constants/CakesData";
import { Alert } from "react-native";
import { addToCartRequest } from "../Redux-Store/Actions/cart";
import { fetchProductQuantityRequest } from "../Redux-Store/Actions/cartProductQnty";
import CommonHeader from "../Components/comman/CommonHeader";
import { likeProductRequest } from "../Redux-Store/Actions/like";
import { dislikeProductRequest } from "../Redux-Store/Actions/like";

const ProductInfo = () => {
  const cakes = useSelector((state) => state.products.products);
  const productQuanty = useSelector((state) => state.productQuantity.quantity);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const colors = useColorTheme();
  const route = useRoute();
  const { productData } = route.params;
  const [status, setStatus] = useState(2);
  const [isLiked,SetisLiked] = useState(false)
  const navigation = useNavigation();
  const sanCategoryCakes = cakes.filter(
    (cake) => cake.category === productData.category
  );

  const productId = productData.uId;


  const handleAddTOCart = () => {
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
          { text: "Register", onPress: () => navigation.navigate("Register") },
        ]
      );
    } else {
      
      console.log("USER_ID", user.userData.id);
      console.log("PRODUCT_ID", productData.uId);
      dispatch(addToCartRequest(user.userData.id, productData.uId));
      
    }
  };

  

  
const handleLikeClick = () => {
  if (user.userData === null) {
    Alert.alert("Like", "Please Register to add Products to Your Likes...", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Register", onPress: () => navigation.navigate("Register") },
    ]);
  } else {
    if (isLiked) {
      // If already liked, dispatch dislike action
      dispatch(dislikeProductRequest(user.userData.id, productData.uId));
      SetisLiked(!isLiked);
    } else {
      // If not liked, dispatch like action
      dispatch(likeProductRequest(user.userData.id, productData.uId));
      SetisLiked(!isLiked);
    }
  }
};


//console.log("UserIDDD",user.userData.id,productData.uId)
//const userId=user.userData.id
useEffect(()=>{
 if (user.userData != null) {
  dispatch(fetchProductQuantityRequest(user.userData.id, productId));

 }
},[cart])




  let content;

  switch (status) {
    case 1:
      content = (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignSelf: "center",

              marginTop: moderateVerticalScale(20),
              flexWrap: "wrap",
              width: "95%",

              height: moderateScale(280),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={[styles.textH, { color: colors.black }]}>
                Name :{" "}
              </Text>
              <Text style={[styles.textC, { color: colors.black }]}>
                {productData.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={[styles.textH, { color: colors.black }]}>
                Category :{" "}
              </Text>

              <Text style={[styles.textC, { color: colors.black }]}>
                {productData.category}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={[styles.textH, { color: colors.black }]}>
                Size :{" "}
              </Text>
              <Text style={[styles.textC, { color: colors.black }]}>
                {productData.size}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text style={[styles.textH, { color: colors.black }]}>
                Description :
              </Text>
              <Text style={[styles.textC, { color: colors.black }]}>
                {productData.description}
              </Text>
            </View>
          </View>
        </ScrollView>
      );
      break;
    case 2:
      content = (
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                borderWidth: 0.8,
                flexDirection: "row",
                marginTop: moderateVerticalScale(7),
                padding: moderateScale(7),
                borderRadius: 9,
                backgroundColor: colors.primary,
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={[styles.textH, { color: colors.black, fontSize: 17 }]}
                >
                  Average Rating :{" "}
                </Text>
              </View>
              <View>
                <StartRating rating={4.1} size={17} color={colors.black} />
              </View>
            </View>
            <View
              style={{
                width: "100%",
                borderWidth: 0.8,
                height: 1,
                marginTop: moderateVerticalScale(7),
              }}
            ></View>
          </View>
          <ScrollView nestedScrollEnabled={true}>
            {productData.reviews.map((review) => (
              <View
                key={review.id}
                style={{
                  marginVertical: moderateVerticalScale(5),
                  borderWidth: 0.8,
                  padding: moderateVerticalScale(5),
                  marginHorizontal: moderateScale(13),
                  borderRadius: 7,
                  backgroundColor: colors.primary,
                }}
              >
                <Text style={[styles.textH, { color: colors.black }]}>
                  {review.username} :
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginVertical: moderateVerticalScale(5),
                    color: colors.black,
                  }}
                >
                  "{review.comment}"
                </Text>
                <StartRating
                  rating={review.rating}
                  size={15}
                  color={colors.black}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      );
      break;
    default:
      content = <Text>Rendered when none of the conditions match</Text>;
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <CommonHeader
        text={"Product"}
        icon={<AntDesign name="arrowleft" size={24} color={colors.black} />}
        event={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={[styles.imageContainer, { borderColor: colors.black }]}>
            <Pressable onPress={() =>handleLikeClick()} style={styles.btnContainer}>
              <View>
                {isLiked ? (
                  <View
                    style={[styles.imgBtn, { backgroundColor: colors.white }]}
                  >
                    <AntDesign name="hearto" size={28} color={colors.quadry} />
                  </View>
                ) : (
                  <View
                    style={[styles.imgBtn, { backgroundColor: colors.white }]}
                  >
                    <AntDesign name="hearto" size={28} color={colors.primary} />
                  </View>
                )}
              </View>
            </Pressable>
            <Image
              source={{ uri: productData.image }}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                borderWidth: 0.8,
                zIndex: 1,
                opacity: 0.9,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: moderateVerticalScale(80),
            width: moderateScale(350),
            justifyContent: "center",
            padding: moderateScale(10),
            borderWidth: 0.8,
            flexWrap: "wrap",
            backgroundColor: colors.secondary,
            borderRadius: 8,
            alignSelf: "center",
            marginTop: moderateVerticalScale(10),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <View>
                <Text style={[styles.productName, { color: colors.black }]}>
                  {productData.name}
                </Text>
                <Text style={[styles.withLove, { color: colors.gray }]}>
                  (with love)
                </Text>
              </View>
            </View>
            <View>
              <Text style={[styles.productPrice, { color: colors.black }]}>
                Rs.{productData.price}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: moderateScale(10),
            marginBottom: moderateVerticalScale(2),
            marginTop: moderateVerticalScale(10),
          }}
        >
          <Pressable
            onPress={() => setStatus(1)}
            style={[
              styles.proInfo,
              { borderColor: colors.black },
              {
                backgroundColor:
                  status == 1 ? colors.quandry : colors.secondary,
              },
            ]}
          >
            <Text
              style={[
                styles.textInfo,
                { color: colors.white },
                status == 1 && {
                  color: colors.black,
                  borderBottomWidth: 1,
                  borderColor: colors.black,
                  fontWeight: "600",
                },
              ]}
            >
              Details
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setStatus(2)}
            style={[
              styles.proInfo,
              { borderColor: colors.black },
              {
                backgroundColor:
                  status == 2 ? colors.quandry : colors.secondary,
              },
            ]}
          >
            <Text
              style={[
                styles.textInfo,
                { color: colors.white },
                status == 2 && {
                  color: colors.black,
                  borderBottomWidth: 1,
                  borderColor: colors.black,
                  fontWeight: "600",
                },
              ]}
            >
              Reviews
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: colors.black,
            overflow: "hidden",
            width: "95%",
            alignSelf: "center",
            height: moderateScale(280),
            flexWrap: "wrap",
            borderRadius: 15,
            backgroundColor: colors.secondary,
            marginTop: moderateVerticalScale(8),
            flex: 1,
          }}
        >
          {content}
        </View>

        <View>
          <ProductSlider
            cakesData={sanCategoryCakes}
            text={"More In This Category"}
          />
          <OfferBaner data={cakes2} text={"Categories"} />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: moderateVerticalScale(10),
        }}
      >
        <View style={{ flex: 1 }}>
          <ButtonCompo
            text={"Buy Now"}
            color={colors.quandry}
            event={() => console.warn("pressed")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <ButtonCompo
            text={productQuanty > 0 ? `+ Cart (${productQuanty})` : `+ Cart`}
            color={colors.quandry}
            event={handleAddTOCart}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateVerticalScale(27.25),

    //  backgroundColor: colors.primary,
    flex: 1,
  },
  imageContainer: {
    position: "relative",

    borderWidth: 0.8,
    // borderColor: colors.black,
    overflow: "hidden",
    width: "100%",
    alignSelf: "center",
    height: moderateScale(240),
  },
  btnContainer: {
   
    position: "absolute",
    top: moderateScale(165),
    left: "80%",
    right: 0,
    bottom: 0,
    flexDirection: "row",
    //justifyContent: "space-between",
    zIndex: 2, // Ensure the button container is above the image
    padding: 16, // Adjust the padding as needed
  },
  imgBtn: {
    borderWidth: 0.8,
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: colors.white,
    opacity: 0.7,
  },
  productName: {
    fontSize: 20,
    fontWeight: "500",
  },
  withLove: {
    color: "gray",
    letterSpacing: 1,
  },
  productPrice: {
    fontSize: 26,
    fontWeight: "500",
  },
  proInfo: {
    borderBottomWidth: 1,
    borderWidth: 0.8,
    height: moderateVerticalScale(40),
    justifyContent: "center",

    padding: moderateVerticalScale(5),
    borderRadius: 9,
    width: "40%",
    alignItems: "center",
  },
  textInfo: {
    fontSize: 17,
    fontWeight: "400",
  },
  textH: {
    fontSize: 15,
    fontWeight: "500",
  },
  textC: {
    fontSize: 14,
    fontWeight: "400",
  },
});
