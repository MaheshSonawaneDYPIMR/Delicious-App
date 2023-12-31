import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters';
import { secondary } from '../../constants/Colors';
import { useColorTheme } from '../../constants/Colors';

const UserInfo = (props) => {
  const colors=useColorTheme() 
  return (
    <View style={[styles.info, { backgroundColor: colors.secondary }]}>
      <View style={styles.InfoRow}>
        <View style={styles.infoRow2}>
          <View>
            <Text style={[styles.infoTitle, { color: colors.black }]}>
              Name :
            </Text>
          </View>
          <View>
            <Text style={[(styles.infoContent, { color: colors.black })]}>
              {props.name}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.InfoRow}>
        <View style={styles.infoRow2}>
          <View>
            <Text style={[styles.infoTitle, { color: colors.black }]}>
              Email :
            </Text>
          </View>
          <View>
            <Text style={[(styles.infoContent, { color: colors.black })]}>
              {props.email}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.InfoRow}>
        <View style={styles.infoRow2}>
          <View>
            <Text style={[styles.infoTitle, { color: colors.black }]}>
              Contact :
            </Text>
          </View>
          <View>
            <Text style={[(styles.infoContent, { color: colors.black })]}>
              {props.contact}
            </Text>
          </View>
        </View>
      </View>
      
    </View>
  );
}

export default UserInfo

const styles = StyleSheet.create({
  info: {
    borderWidth: 0.8,
    padding: moderateScale(10),
    borderRadius: 7,
   
    
  },

  InfoRow: {
    margin: moderateScale(1),
    padding: moderateScale(1),
    marginHorizontal: moderateScale(10),
  },
  infoRow2: { flexDirection: "row" },
  infoTitle: { fontSize: 16, fontWeight: "500" },
  infoContent: {
    fontSize: 16,
    fontWeight: "400",
    flex:1
   },
});