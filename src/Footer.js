import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const icons = [<EmailIcon />, <GitHubIcon />, <LinkedInIcon />];

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        padding: (theme) => theme.custom.outerPadding,
      }}
    >
      <Container>
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}>
          {icons.map((icon, i) => (
            <Button key={i} sx={{ color: "inherit" }}>{icon}</Button>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
