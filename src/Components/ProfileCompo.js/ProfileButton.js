import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useColorTheme } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';



const ProfileButton = (props) => {
const colors = useColorTheme()
  const navigation = useNavigation();
 
    const ComponentNav = (selectedEvent) => {
      console.warn("selected",{selectedEvent})

    switch (selectedEvent) {
      case "OrderHistory":
        navigation.navigate("OrderHistory");
        break;
      case "Cart":
        navigation.navigate("Cart");
        break;
      case "LikedProduct":
        navigation.navigate("LikedProduct");
        break;
      case "Products":
        navigation.navigate("Products");
        break;
      default:
        console.warn("Nothing Happened");
    }
  };
  return (
    <Pressable
      style={[
        styles.container,
        { borderColor: colors.black, backgroundColor: colors.secondary },
      ]}
      onPress={() => ComponentNav(props.event)}
    >
      <Image source={props.icon} style={styles.icon} />
      <Text style={[styles.text,{borderColor:colors.black,backgroundColor:colors.primary,color:colors.black}]}>{props.text}</Text>
    </Pressable>
  );
}

export default ProfileButton

const styles = StyleSheet.create({
  container: {
    height: moderateScale(120),
    width: moderateScale(120),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(12),
    borderWidth: 1,
   
    margin:moderateScale(15)
  },
  icon: {
    height: moderateScale(60),
    width: moderateScale(60),
  },
  text: {
    padding:moderateScale(5),
    borderWidth: 1,
    
    marginTop:moderateScale(10),
    borderRadius: moderateScale(5),
    width:'80%',
    textAlign:'center',
    justifyContent:'center',
    textAlignVertical:'center',
    fontSize:14,
   
  },

});