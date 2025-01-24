import { ThemeContext } from "@emotion/react";
import { PaletteMode } from "@mui/material";
import { ReactNode, useMemo, useState } from "react";

// we need interface to show what props its gonna Be

interface Props {
  children: ReactNode; // is a component: a node point of access to other things - hover over to see
}

export const ThemeProvider = ([children]): Props => {
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

  const theme = useMemo(() => createAppTheme(mode), [mode])

  // we need to allow the theme to be changed
  return (
    <ThemeContext.Provider value={themeContext}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider> 
    </ThemeContext.Provider>
  );

};
