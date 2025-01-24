import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";
import { ThemeProvider } from "./context/ThemeProvider";
import { CssBaseline } from "@mui/material";
import { MusicProvider } from "./context/MusicProvider";

const router = createBrowserRouter(routes);

function App() {
  
  return (
    <ThemeProvider>
      <MusicProvider>
      <RouterProvider router={router} />
      </MusicProvider>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
