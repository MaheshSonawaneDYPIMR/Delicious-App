import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { loginRequest } from "../../Redux-Store/Actions/Auth.js";
import { moderateScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Title from "../../Components/authForm/Title";
import Btn from "../../Components/authForm/Btn";
import ScreenNav from "../../Components/authForm/ScreenNav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
     setIsLoading(true);
    dispatch(loginRequest(email, password));
  };
  


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
        <ActivityIndicator
          style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}
          size="large"
          color="#0000ff"
        />
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
            <Title title={"Sign In"} />

            <View style={{ marginTop: 50 }}>
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

              <Btn event={handleLogin} text={"Log In"} />
              <ScreenNav
                event={() => navigation.navigate("Register")}
                text={"Don't have a account?"}
                colorText={"Sigh UP"}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  textField: {
    
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginLeft: 13,
    width: moderateScale(250),
    marginVertical: 10,
  },
});
