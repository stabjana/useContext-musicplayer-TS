import { ThemeContext } from "./ThemeContext";
import { CssBaseline, PaletteMode } from "@mui/material";
import { ReactNode, useMemo, useState } from "react";
import {ThemeProvider as MUIThemeProvider} from "@mui/material/styles";
import { createAppTheme } from "../theme/theme";

// we need interface to show what props its gonna Be

interface Props {
  children: ReactNode; // is a component: a node point of access to other things - hover over to see
}

export const ThemeProvider = ({children}: Props) => { // announcing the children are of type props - ch are props (interface props are chi of node) - out of bracket: return type is props (was wrong)
  const [mode, setMode] = useState<PaletteMode>("light");

  const themeContext = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  // we need to allow the theme to be changed
  return (
    <ThemeContext.Provider value={themeContext}>
      <MUIThemeProvider theme={theme}>{children}
       {/*  <CssBaseline/> */}
        </MUIThemeProvider> 
    </ThemeContext.Provider>
  );

};
