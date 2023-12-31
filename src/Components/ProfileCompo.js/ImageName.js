import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { moderateScale,moderateVerticalScale } from 'react-native-size-matters';
import { useColorTheme } from '../../constants/Colors';

const ImageName = (props) => {
    const { imageUri, userName } = props;
  const colors=useColorTheme()
  return (
    <View style={[styles.profileContainer]}>
      <Image
        source={{ uri: imageUri }}
        style={[styles.Profile, { borderColor:colors.black }]}
      ></Image>
      <Text style={[styles.name,{color:colors.black}]}>{userName}</Text>
    </View>
  );
}

export default ImageName

const styles = StyleSheet.create({
  Profile: {
    height: moderateScale(130),
    width: moderateScale(130),
    alignSelf: "center",

    borderRadius: moderateScale(65),
    borderWidth: 2,
    
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: moderateVerticalScale(30),
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: moderateScale(5),
  },
});