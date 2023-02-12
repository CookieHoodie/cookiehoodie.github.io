import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BackgroundBox from "./BackgroundBox";
import EmailIcon from "@mui/icons-material/Email";

const icons = [<EmailIcon />, <GitHubIcon />, <LinkedInIcon />];

function Footer() {
  return (
    <BackgroundBox>
      <Container>
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}>
          {icons.map((icon, i) => (
            <Button key={i} sx={{ color: "inherit" }}>
              {icon}
            </Button>
          ))}
        </Box>
      </Container>
    </BackgroundBox>
  );
}

export default Footer;
