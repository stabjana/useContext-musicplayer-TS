import { createContext } from "react";
import { PaletteMode } from "@mui/material";

// interface of a type
export interface ThemeContextType {
  mode: PaletteMode; // expected value of a type - its crerated from MUI
  toggleColorMode: () => void; // definition of a function
}

export const ThemeContext = createContext<ThemeContextType>({ // creates a context with this type
  mode: "light",
  toggleColorMode: () => {},
});

// then theme provider
