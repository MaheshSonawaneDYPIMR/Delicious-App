import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/Navigation/AppNavigator.js";
import { Provider } from "react-redux";
import configureStore from "./src/Redux-Store/store/store.js";
import {ColorThemeProvider} from "./src/constants/Colors.js";
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <ColorThemeProvider>
        <AppNavigator />
      </ColorThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
