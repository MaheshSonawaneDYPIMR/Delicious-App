import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchMode } from "../../Redux-Store/Actions/action.js";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useColorTheme } from "../../constants/Colors.js";

const DarkMode = () => {
  const colors = useColorTheme();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.mode);
  const [displayText, setDisplayText] = useState("light");

  const toggleTheme = () => {
    const newMode = isDarkMode === "light" ? "dark" : "light";
    dispatch(switchMode(newMode));
  };
  useEffect(() => {
    setDisplayText(isDarkMode === "light" ? "light" : "dark");
  }, [isDarkMode]);

  return (
    <Pressable onPress={toggleTheme}>
      {displayText === "light" ? (
        <Feather name="sun" size={30} color={colors.black} />
      ) : (
        <Ionicons name="moon" size={30} color={colors.black} />
      )}
    </Pressable>
  );
};

export default DarkMode;

const styles = StyleSheet.create({});
