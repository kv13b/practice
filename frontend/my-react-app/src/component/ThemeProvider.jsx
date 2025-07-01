import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};
function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
    setDarkMode((mode) => !mode);
  };
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
