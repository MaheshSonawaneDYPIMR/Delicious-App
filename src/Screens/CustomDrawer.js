import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import userData from "../constants/UserData";
import ImageName from "../Components/ProfileCompo.js/ImageName";
import { FontAwesome5 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { useColorTheme } from "../constants/Colors";
import DarkMode from "../Components/Drawer/DarkMode";
import DrawerSec from "../Components/Drawer/DrawerSec";

const CustomDrawer = () => {
  const colors = useColorTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <View
        style={{
          backgroundColor: colors.secondary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            width: "100%",
           
          }}
        >
          <View
            style={{
              height: moderateVerticalScale(40),
              width: moderateVerticalScale(40),
              borderWidth: 0.8,
              borderColor:colors.black,
              borderRadius: moderateVerticalScale(20),
              marginTop: moderateVerticalScale(20),
              marginLeft: moderateVerticalScale(15),
              backgroundColor:colors.primary,
              justifyContent:'center',
              alignItems:'center',
              
            }}
          >
            <DarkMode/>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            margin: moderateVerticalScale(40),
            marginTop: moderateVerticalScale(-10),
          }}
        >
          <Image
            source={{ uri: userData.userProfiles[0].image }}
            style={{
              height: moderateScale(70),
              width: moderateScale(70),
              borderRadius: moderateScale(35),
              alignItems: "center",
              borderWidth: 1,
              borderColor: colors.black,
            }}
          ></Image>
          <Text
            style={{ fontSize: 20, fontWeight: "500", color: colors.black }}
          >
            {userData.userProfiles[0].username}
          </Text>
          <Text
            style={{ fontSize: 16, fontWeight: "400", color: colors.black }}
          >
            {userData.userProfiles[0].email}
          </Text>
        </View>
      </View>

      <View style={{ marginHorizontal: moderateVerticalScale(20) }}>
        <DrawerSec
          icon={<FontAwesome5 name="user" size={24} color={colors.black} />}
          name={"Profile"}
        />
        <DrawerSec
          icon={
            <SimpleLineIcons name="pencil" size={24} color={colors.black} />
          }
          name={"Orders"}
        />
        <DrawerSec
          icon={<FontAwesome name="heart-o" size={24} color={colors.black} />}
          name={"WhishList"}
        />
        <DrawerSec
          icon={
            <MaterialCommunityIcons
              name="cart-arrow-down"
              size={24}
              color={colors.black}
            />
          }
          name={"Cart"}
        />
        <DrawerSec
          icon={
            <Ionicons
              name="share-social-outline"
              size={24}
              color={colors.black}
            />
          }
          name={"Share"}
        />
        <DrawerSec
          icon={
            <MaterialIcons name="rate-review" size={24} color={colors.black} />
          }
          name={"Rate Us"}
        />
        <DrawerSec
          icon={<AntDesign name="mail" size={24} color={colors.black} />}
          name={"Contact Us"}
        />
        <DrawerSec
          icon={
            <Foundation name="clipboard-notes" size={24} color={colors.black} />
          }
          name={"About Us"}
        />
        <DrawerSec
          icon={
            <Ionicons
              name="help-circle-outline"
              size={24}
              color={colors.black}
            />
          }
          name={"Help"}
        />
        <DrawerSec
          icon={
            <Ionicons
              name="arrow-redo-outline"
              size={24}
              color={colors.black}
            />
          }
          name={"Log Out"}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: moderateVerticalScale(27.25),
  },
});
