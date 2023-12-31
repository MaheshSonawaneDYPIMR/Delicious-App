import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { moderateScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../../Redux-Store/Actions/Auth.js";
import Title from "../../Components/authForm/Title.js";
import Btn from "../../Components/authForm/Btn.js";
import ScreenNav from "../../Components/authForm/ScreenNav.js";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
const Register = () => {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
const dispatch = useDispatch();
const user = useSelector((state) => state.user);
const [isLoading, setIsLoading] = useState(false);

 const handleRegister = () => {
  setIsLoading(true);
   dispatch(registerRequest(name,email,phone, password));
 };

 useEffect(()=>{
  if(user.userData != null){
    navigation.goBack()
  }
 })

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        padding: 10,
      }}
    >
      {isLoading ? (
        <ActivityIndicator style={{flex:1,alignSelf:'center',justifyContent:'center'}} size="large" color="#0000ff" />
      ) : (
        <KeyboardAvoidingView
          style={{ alignSelf: "center", flex: 1, justifyContent: "center" }}
        >
          <View
            style={{
              backgroundColor: colors.secondary,
              paddingHorizontal: moderateScale(25),
              paddingVertical: 50,
              borderRadius: 20,
            }}
          >
            <Title title={"Register"} />

            <View style={{ marginTop: 50 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <SimpleLineIcons name="pencil" size={24} color="gray" />
                <TextInput
                  placeholder="Name"
                  value={name}
                  onChangeText={(text) => setName(text)}
                  placeholderTextColor="gray"
                  style={[styles.textField, { fontSize: email ? 18 : 15 }]}
                />
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={24}
                  color="gray"
                />
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholderTextColor="gray"
                  style={[styles.textField, { fontSize: email ? 18 : 15 }]}
                />
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="phone" size={24} color="gray" />
                <TextInput
                  value={phone}
                  onChangeText={(text) => setPhone(text)}
                  placeholder="Phone No"
                  placeholderTextColor="gray"
                  style={[styles.textField, { fontSize: phone ? 18 : 15 }]}
                />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="key-outline" size={24} color="gray" />
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="gray"
                  style={[styles.textField, { fontSize: password ? 18 : 15 }]}
                />
              </View>

              <Btn event={handleRegister} text={"Register"} />

              <ScreenNav
                event={() => navigation.goBack()}
                text={"Already have an Account"}
                colorText={"Sign In"}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  textField: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginLeft: 13,
    width: moderateScale(250),
    marginVertical: 10,
  },
});
