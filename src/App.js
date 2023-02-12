import "@fontsource/dm-sans";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";


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
    },
    MuiDivider: {
      variants: [
        {
          props: { variant: 'thick'},
          style: {
            borderWidth: "1px",
            borderColor: "black"
          },
        }
      ],
      defaultProps: {
        variant: 'thick',
      },
      // styleOverrides: {
      //   root: {
      //     borderWidth: "1px",
      //     borderColor: "black"
      //   }
      // }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={fontTheme}>
        <Header />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
