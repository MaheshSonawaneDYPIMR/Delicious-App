import { StatusBar, View } from 'react-native';
import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../Screens/Splash';
import Parent from './normal/Parent';
import Cart from '../Screens/Cart';
import LikedProduct from '../Screens/LikedProduct';

import BottomNavigator from './bottom/BottomNavigator';
import OrderHistory from '../Screens/OrderHistory';
import ProductStatus from '../Screens/ProductStatus';
import ProductInfo from '../Screens/ProductInfo';
import { useColorTheme } from '../constants/Colors';
import { useSelector } from 'react-redux';

import CategoryProducts from '../Screens/CategoryProducts';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import { useDispatch } from 'react-redux';
import { fetchProductsRequest } from '../Redux-Store/Actions/getProducts';

const Stack = createStackNavigator();

 

const AppNavigator = () => {
const dispatch = useDispatch();
const colors = useColorTheme();
const isDarkMode = useSelector((state) => state.theme);

useEffect(() => {
  // Set the status bar color for the entire app
  StatusBar.setBackgroundColor(colors.primary); // Replace with your desired color
  // StatusBar.setBarStyle('dark-content');
  isDarkMode.mode === "light" ? StatusBar.setBarStyle('dark-content') :StatusBar.setBarStyle('light-content') ;
}, []); 
 
useEffect(() => {
  dispatch(fetchProductsRequest());
}, [dispatch]);

const products = useSelector((state) => state.products.products);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LikedProduct"
          component={LikedProduct}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategoryProducts"
          component={CategoryProducts}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductStatus"
          component={ProductStatus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductInfo"
          component={ProductInfo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
