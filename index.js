import React from "react";
import { AppRegistry, Platform } from "react-native";

import App from "./App";

const ReduxApp = () => (
  
    <App />
 
);

AppRegistry.registerComponent("main", () => ReduxApp);

if (Platform.OS === "web") {
  const rootTag =
    document.getElementById("root") || document.getElementById("main");
  AppRegistry.runApplication("main", { rootTag });
}
