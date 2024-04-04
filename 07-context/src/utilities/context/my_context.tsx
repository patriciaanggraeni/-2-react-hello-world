import { createContext } from "react";
import { themes } from "../themes/my_themes";

export const LevelContext = createContext(1);

export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
});