import { createContext, useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";

const ColorThemeContext = createContext();

export const useColorTheme = () => useContext(ColorThemeContext);

export const ColorThemeProvider = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme);
  const [colors, setColors] = useState({
    primary: "#FAF0E6",
    secondary: "#98E4FF",
    tertiary: "#80B3FF",
    quadry: "#687EFF",
    black: "black",
    white: "white",
    gray: "gray",
    green: "#00A693",
    priceB: "#6C7C59",
    star: "#FFDF00",
  });

  useEffect(() => {
    setColors({
      primary: isDarkMode.mode === "light" ? "#FFFAFA" : "#2D2B2A",
      secondary: isDarkMode.mode === "light" ? "#FFE4E1" : "#44413F",
      tertiary: isDarkMode.mode === "light" ? "#FDA4BA" : "#87827D",
      quadry: isDarkMode.mode === "light" ? "#FE7F9c" : "#B4AEA7",
      black: isDarkMode.mode === "light" ? "black" : "#EDE8E3",
      white: isDarkMode.mode === "light" ? "white" : "black",
      gray: isDarkMode.mode === "light" ? "gray" : "#E7E1DA",
      green: isDarkMode.mode === "light" ? "#00A693" : "blue",
      priceB: isDarkMode.mode === "light" ? "#6C7C59" : "gray",
      star: isDarkMode.mode === "light" ? "#FFDF00" : "white",
    });
  }, [isDarkMode]);

  return (
    <ColorThemeContext.Provider value={colors}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export default ColorThemeProvider ;
