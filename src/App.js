import "@fontsource/dm-sans";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Intro from "./Intro";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";

const fontTheme = createTheme({
  custom: {
    outerPadding: 4
  },
  palette: {
    background: {
      default: "#f3f3f3"
    },
    text: {
      grey: "#606060"
    }
  },
  typography: {
    allVariants: {
      fontFamily: "DM Sans, sans-serif"
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg"
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={fontTheme}>
        <Header />
        <Intro />
        <About />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
