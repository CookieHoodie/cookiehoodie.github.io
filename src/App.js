import "@fontsource/dm-sans";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

// background-image: linear-gradient(315deg, rgb(217, 228, 245) 0%, rgb(245, 227, 230) 74%);
// background-attachment: fixed;

// global theme
const simpleTheme = createTheme({
  custom: {
    outerPadding: 4,
  },
  palette: {
    background: {
      default: "#f3f3f3",
    },
    text: {
      grey: "#606060",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "DM Sans, sans-serif",
    },
  },
  components: {
    // for global
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth", // smooth scroll to sections
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiDivider: {
      variants: [
        {
          props: { variant: "thick" },
          style: {
            borderWidth: "1px",
            borderColor: "black",
          },
        },
      ],
      defaultProps: {
        variant: "thick",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={simpleTheme}>
      <CssBaseline />
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
