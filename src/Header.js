import { styled } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const AppBarButton = styled(Button)`
    font-weight: bold;
    text-transform: inherit;
    color: inherit;
    font-size: 1.2rem;
`;

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ padding: 4 }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            align="left"
            fontWeight="bold"
          >
            ch.
          </Typography>
          <AppBarButton>About</AppBarButton>
          <AppBarButton>Work</AppBarButton>
          <AppBarButton>Contact</AppBarButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// TODO: iconbutton in small factor

export default Header;
