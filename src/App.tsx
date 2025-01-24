import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";
import { ThemeProvider } from "./context/ThemeProvider";

const router = createBrowserRouter(routes);

function App() {
  return (
  <ThemeProvider>
  <RouterProvider router={router} />
  </ThemeProvider>
  );
}

export default App;
