import "@fontsource/dm-sans";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import About from "./About";
import Header from "./Header";

const fontTheme = createTheme({
  palette: {
    background: {
      default: "#f3f3f3"
    }
  },
  typography: {
    allVariants: {
      fontFamily: "DM Sans, sans-serif"
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={fontTheme}>
        <Header />
        <About />
    </ThemeProvider>
  );
}

export default App;
