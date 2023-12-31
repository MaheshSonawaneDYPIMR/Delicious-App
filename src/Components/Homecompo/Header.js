import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../assests/Images/Categories/logo.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useColorTheme } from "../../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { fetchTotalProductQuantityRequest } from "../../Redux-Store/Actions/cartItemsQ";
import { Ionicons } from "@expo/vector-icons";
const Header = () => {
  const dispatch = useDispatch();
  const [tp, setTP] = useState(0);
  const totalProducts = useSelector((state) =>
    state.cartItems.totalQuantity ? state.cartItems.totalQuantity : 0
  );
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const userId = user.userData;
  
  useEffect(() => {
    if (userId != null) {
      dispatch(fetchTotalProductQuantityRequest(userId.id));
      console.log(totalProducts);
    }
  }, [cart]);

  const navigation = useNavigation();
  const colors = useColorTheme();
  return (
    <View
      style={[
        styles.container,
        {
          borderTopColor: colors.black,
          borderBottomColor: colors.black,
          backgroundColor: colors.secondary,
        },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.menuContainer}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Entypo name="menu" size={32} color={colors.black} />
          </Pressable>
        </View>
        
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <Pressable
          onPress={() => navigation.navigate("LikedProduct")}
          style={styles.iconContainer}
        >
          <AntDesign name="hearto" size={25} color={colors.black} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Cart")}
          style={styles.iconContainer}
        >
          <View style={{}}>
            {totalProducts === 0 ? (
              <MaterialCommunityIcons
                name="cart-arrow-down"
                size={27}
                color={colors.black}
              />
            ) : (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="cart-arrow-down"
                  size={27}
                  color={colors.black}
                />
                <View
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -6,
                    backgroundColor: colors.tertiary,
                    justifyContent: "center",

                    height: moderateScale(16),
                    width: moderateScale(16),
                    alignItems: "center",
                    borderRadius: moderateScale(5),
                    borderWidth: 0.3,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>{totalProducts}</Text>
                </View>
              </View>
            )}
          </View>
        </Pressable>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(5),
    flexDirection: "row",
    justifyContent: "space-between",
    height: verticalScale(42),
    width: "100%",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: moderateScale(10),
  },
  logoContainer: {},
  iconsContainer: {
    flexDirection: "row",

    alignItems: "center",
    margin: scale(10),
  },
  iconContainer: {
    marginHorizontal: moderateScale(15),
  },
  logo: {
    height: verticalScale(50),
    width: moderateScale(100),
  },
});
