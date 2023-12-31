import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign } from "@expo/vector-icons";
import Profile from '../../Screens/Profile';
import Offers from '../../Screens/Offers';
import check from '../../assests/Images/Nav/checkbox.png'
import Home from '../../Screens/Home';
import { useColorTheme } from '../../constants/Colors';
import { moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from "@expo/vector-icons";

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
const colors = useColorTheme()
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderBlockColor: colors.black,
        },
      }}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          headerStyle: { backgroundColor: colors.white },
          tabBarIcon: (tabInfo) => {
            return (
              <AntDesign
                name="home"
                size={28}
                color={colors.black}
                style={{
                  width: moderateScale(40),
                  height: moderateScale(40),
                  backgroundColor: tabInfo.focused
                    ? colors.secondary
                    : colors.primary,
                  padding: moderateScale(6),
                  borderColor: colors.black,
                  borderRadius: 7,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="person-outline"
                size={28}
                color={colors.black}
                style={{
                  width: moderateScale(40),
                  height: moderateScale(40),
                  backgroundColor: tabInfo.focused
                    ? colors.secondary
                    : colors.primary,
                  padding: moderateScale(6),
                  borderColor: colors.black,
                  borderRadius: 7,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Fontisto
                name="shopping-sale"
                size={28}
                color={colors.black}
                style={{
                  width: moderateScale(40),
                  height: moderateScale(40),
                  backgroundColor: tabInfo.focused
                    ? colors.secondary
                    : colors.primary,
                  padding: moderateScale(6),
                  borderColor: colors.black,
                  borderRadius: 7,
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
