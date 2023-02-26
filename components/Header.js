import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { Menu, MenuItem } from "@mui/material";

const brand = "ch.";
const pages = ["About", "Projects", "Contact"];

const AppBarButton = styled(Button)`
  font-weight: bold;
  text-transform: inherit;
  color: inherit;
  font-size: 1.2rem;
  padding-left: 12px;
  padding-right: 12px;
`;

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      color="default"
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.default",
        padding: (theme) => theme.custom.outerPadding,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          {/* Name */}
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            align="left"
            fontWeight="bold"
          >
            {brand}
          </Typography>

          {/* Pages */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", sm: "flex" },
            }}
          >
            {pages.map((page) => (
              <AppBarButton
                key={page}
                href={`#${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{ color: "inherit" }}
              >
                {page}
              </AppBarButton>
            ))}
          </Box>

          {/* Hidden menu */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", sm: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem component="button"
                  key={page}
                  href={`#${page.toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
