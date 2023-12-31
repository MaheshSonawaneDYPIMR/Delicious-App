import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import  { useColorTheme }  from "../constants/Colors.js";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Feather } from "@expo/vector-icons";
import ImageName from "../Components/ProfileCompo.js/ImageName";
import userData from "../constants/UserData";
import UserInfo from "../Components/ProfileCompo.js/UserInfo";
import ProfileButton from "../Components/ProfileCompo.js/ProfileButton";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import ButtonCompo from "../Components/comman/ButtonCompo.js";
import CommonHeader from "../Components/comman/CommonHeader.js";
import Login from "./Auth/Login.js";
import { getUserRequest } from "../Redux-Store/Actions/getUser.js";
const Profile = () => {
  const colors = useColorTheme();
 
  const navigation = useNavigation()
  const isUser = useSelector(state=>state.auth)
  const [profile, setProfile] = useState(false)
  console.log("IS_USER",isUser.user)
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user)

   
   useEffect(() => {
     if (isUser.user) {
     console.log("I_AM HERE_1");
    
       dispatch(getUserRequest(isUser.user));
       
     }
   }, [isUser.user]);

useEffect(() => {
  if (isUser.user && user) {
     console.log("I_AM HERE_2");
    setProfile(true);
   
    
  } else {
    console.log("I_AM HERE_3");
    
    setProfile(false);
  }
}, [user]);

 //console.log("USER DATA", user.userData.name);

 



  
  return (
    <>
      {profile ? (
        <View style={[styles.container, { backgroundColor: colors.primary }]}>
          <CommonHeader
            text={"Profile"}
            icon={<AntDesign name="arrowleft" size={24} color={colors.black} />}
            event={() => navigation.goBack()}
          />

          <ScrollView>
            <View style={[styles.infoContainer, { borderColor: colors.black }]}>
              <Pressable
                style={styles.editContainer}
                onPress={() => {
                  console.warn("I AM PRESSED(EDIT)");
                }}
              >
                <Feather
                  name="edit-2"
                  size={24}
                  color={colors.black}
                  style={[styles.icon, { borderColor: colors.black }]}
                />
              </Pressable>
              <ImageName
                imageUri={
                  "https://imgs.search.brave.com/bOKkevnl0NvtvpSULAWg7fvvRt1g5KCC7ihOR6XpWrw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY2Fy/dG9vbi1wcm9maWxl/LXBpY3R1cmVzLTdz/bmVtcWFkYTllNDdq/ajQuanBn"
                }
                userName={user.userData.name}
              />
              <UserInfo
                name={user.userData.name}
                email={user.userData.email}
                contact={user.userData.phone}
                // address={user.userData.shippingAddress}
              />
            </View>
            <View>
              <View style={styles.buttons}>
                <ProfileButton
                  text={"Your Orders"}
                  icon={require("../assests/Images/ButtonIcon/youOrders.png")}
                  event={"OrderHistory"}
                />
                <ProfileButton
                  text={"Your Cart"}
                  icon={require("../assests/Images/ButtonIcon/add-cart.png")}
                  event={"Cart"}
                />
              </View>
              <View style={styles.buttons}>
                <ProfileButton
                  text={"Your Liked"}
                  icon={require("../assests/Images/ButtonIcon/heart.png")}
                  event={"LikedProduct"}
                />
                <ProfileButton
                  text={"Cakes"}
                  icon={require("../assests/Images/ButtonIcon/cake.png")}
                  event={"Products"}
                />
              </View>
            </View>
            <ButtonCompo
              text={"Log Out"}
              color={colors.tertiary}
              event={() => console.warn("pressed")}
            />
          </ScrollView>
        </View>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
   // backgroundColor: colors.primary,
    flex: 1,
    marginTop: moderateVerticalScale(27.250),
  },
  headerLine: {
  //  borderColor: colors.black,
    borderWidth: 0.5,
  },

  editContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  icon: {
    width: moderateScale(44),
    margin: moderateScale(5),
    padding: moderateScale(10),
  //  backgroundColor: colors.secondary,
    borderRadius: moderateScale(7),
    borderWidth: 0.8,
  },
  infoContainer: {
    borderWidth: 1,
    margin: moderateScale(10),
    padding: moderateScale(15),
    borderRadius: moderateScale(15),
    //backgroundColor: colors.primary,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
   // color: colors.black,
    fontSize: 18,
    fontWeight: "500",
  },
  
});
